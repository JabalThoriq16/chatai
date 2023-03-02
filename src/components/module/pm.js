import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Card, Toast, Loading } from "react-vant";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateQuestion = async (event) => {
    event.preventDefault();
    setLoading(true);
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    };
    try {
      const response = await openai.createCompletion(
        {
          model: "text-davinci-003",
          prompt: "saya ingin tahu tentang  Hukum 0 Termodinamika:",
          temperature: 0.3,
          max_tokens: 300,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        { headers: headers }
      );
      const question = response.data.choices[0].text;
      const answerResponse = await openai.createCompletion(
        {
          model: "text-davinci-003",
          prompt: "buatlah 1 soal Pemecahan Masalah untuk hukum 0 termodinamika:",
          temperature: 0.5,
          max_tokens: 200,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        { headers: headers }
      );
      const answer = answerResponse.data.choices[0].text;
      setCurrentQuestion({ question, answer });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateQuestion = () => {
    const event = new Event("click");
    generateQuestion(event);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      {loading ? (      
        <div style={{textAlign:"center", marginTop:"50%", color:"Highlight", fontSize:"40px"}}><Loading/>Loading...</div>
              ) : (
        <Card round style={{ marginBottom: 20 }}>
          <Card.Cover onClick={() => Toast.info("")}></Card.Cover>
          <Card.Header>
            <h3>Konsep</h3>
          </Card.Header>
          <Card.Body>
            {currentQuestion && (
              <div>
                <p style={{ fontSize: "16px", textAlign: "justify" }}>
                  {currentQuestion.question}
                </p>
                {showAnswer && (
                  <div>
                    <h5>Soal:</h5>
                    <p style={{ fontSize: "16px", textAlign: "justify" }}>
                      {currentQuestion.answer}
                    </p>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
          <Card.Footer>
            <button onClick={handleShowAnswer}>Lihat Soal</button>
            <button onClick={handleGenerateQuestion}>Saya Ingin Tahu?</button>
            </Card.Footer>
            {/* Add a loading screen while waiting for the response */}
        {currentQuestion === null && <div>Tekan Tombol Saya Ingin Tahu</div>}
        </Card>)}
</div>
);
};

export default App;
