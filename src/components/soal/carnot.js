import React, { useState } from "react";
import { Card, Image, Button, Toast, Space } from "react-vant";
import "./soal.css";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: <Image src="/soal/16.png"/>,
      options: [
        { answer: "1 dan 2", isCorrect: true },
        { answer: "1 dan 3", isCorrect: false },
        { answer: "1 dan 4", isCorrect: false },
        { answer: "2 dan 1", isCorrect: false },
        { answer: "2 dan 4", isCorrect: false },
        { answer: "Efisiensi mesin Carnot berbanding lurus dengan jumlah suhu pada reservoir panas dan dingin, serta berbanding terbalik dengan suhu pada reservoir panas", isCorrect: true },
        { answer: "Efisiensi mesin Carnot berbanding lurus dengan suhu pada reservoir panas, serta berbanding terbalik dengan selisih suhu pada reservoir panas dan dingin", isCorrect: false },
        { answer: "Efisiensi mesin Carnot berbanding lurus dengan suhu pada reservoir panas, serta berbanding terbalik dengan jumlah suhu pada reservoir panas dan dingin", isCorrect: false },
        { answer: "Efisiensi mesin Carnot berbanding terbalik dengan selisih suhu pada reservoir panas dan dingin, serta berbanding lurus dengan suhu pada reservoir panas", isCorrect: false },
        { answer: "Efisiensi mesin Carnot berbanding lurus dengan selisih suhu pada reservoir panas dan dingin, serta berbanding terbalik dengan suhu pada reservoir panas", isCorrect: false },
      ],
    },
    {
      id: 2,
      question:"17.	Suatu mesin Carnot menghasilkan daya 490 kW saat menyerap panas sebanyak 700 kJ per sekon dari reservoir panas. Jika suhu reservoir panas 1000 K, maka suhu reservoir dinginnya adalah ….",
      options: [
        { answer: "450 K", isCorrect: true },
        { answer: "400 K", isCorrect: false },
        { answer: "350 K", isCorrect: false },
        { answer: "300 K", isCorrect: false },
        { answer: "273 K", isCorrect: false },
        { answer: "Suhu berbanding terbalik dengan kalor", isCorrect: true },
        { answer: "Suhu berbanding lurus dengan kalor", isCorrect: false },
        { answer: "Daya berbanding terbalik dengan usaha", isCorrect: false },
        { answer: "Daya berbanding lurus dengan efisiensi", isCorrect: false },
        { answer: "Daya sama dengan kalor pada reservoir rendah", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "18.	Efisiensi sebuah mesin Carnot adalah 60%. Jika reservoir bersuhu rendah memiliki suhu 50°C, maka suhu reservoir yang lain sebesar ….",
      options: [
        { answer: "872,5 K", isCorrect: true },
        { answer: "852,5 K", isCorrect: false },
        { answer: "832,5 K", isCorrect: false },
        { answer: "822,5 K", isCorrect: false },
        { answer: "812,5 K", isCorrect: false },
        { answer: "Suhu pada reservoir rendah sebanding dengan suhu pada reservoir tinggi", isCorrect: true },
        { answer: "Semakin besar efisiensi Carnot, maka kualitas mesin semakin menurun", isCorrect: false },
        { answer: "Efisiensi Carnot hanya bergantung pada suhu di reservoir rendah", isCorrect: false },
        { answer: "Semakin besar selisih suhu pada reservoir panas dan dingin, maka efisiensi makin besar", isCorrect: false },
        { answer: "Semakin besar selisih suhu pada reservoir panas dan dingin, maka efisiensi makin kecil", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: <Image src="/soal/19.png"/>,
      options: [
        { answer: "0,2. 105 Joule", isCorrect: true },
        { answer: "0,4. 105 Joule", isCorrect: false },
        { answer: "0,8. 105 Joule", isCorrect: false },
        { answer: "1,2. 105 Joule", isCorrect: false },
        { answer: "1,6. 105 JouleK", isCorrect: false },
        { answer: "Kalor yang dilepas adalah selisih antara kalor yang diserap dengan usaha", isCorrect: true },
        { answer: "Kalor yang dilepas adalah jumlah antara kalor yang diserap dan usaha", isCorrect: false },
        { answer: "Kalor yang dilepas lebih besar daripada kalor yang diserap", isCorrect: false },
        { answer: "Kalor yang dilepas berbanding terbalik dengan suhu", isCorrect: false },
        { answer: "Kalor yang dilepas tidak mempengaruhi efisiensi mesin", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "20.	Pada sebuah restoran akan dipasang pendingin yang memiliki koefesien performa 5,0. Jika suhu ruangan di dapur 29°C , maka diagram alir suhu yang sesuai adalah ….",
      options: [
        { answer: <Image height="150px" width="150px" src="/soal/20/a.png"/>, isCorrect: true },
        { answer: <Image height="150px" width="150px" src="/soal/20/b.png"/>, isCorrect: false },
        { answer: <Image height="150px" width="150px" src="/soal/20/c.png"/>, isCorrect: false },
        { answer: <Image height="150px" width="150px" src="/soal/20/d.png"/>, isCorrect: false },
        { answer: <Image height="150px" width="150px" src="/soal/20/e.png"/>, isCorrect: false },
        { answer: "Pada mesin pendingin, kalor mengalir dari reservoir bersuhu tinggi ke reservoir bersuhu rendah, dengan diberikan usaha dari luar", isCorrect: true },
        { answer: "Pada mesin pendingin, kalor mengalir dari reservoir bersuhu tinggi ke reservoir bersuhu rendah, dan menghasilkan usaha", isCorrect: false },
        { answer: "Pada mesin pendingin, kalor mengalir dari reservoir bersuhu rendah menuju reservoir suhu tinggi, dengan diberikan usaha dari luar", isCorrect: false },
        { answer: "Pada mesin pendingin, kalor mengalir dari reservoir bersuhu rendah menuju reservoir suhu tinggi, tanpa ada diberikan usaha dari luar", isCorrect: false },
        { answer: "Pada mesin pendingin, kalor mengalir dari reservoir bersuhu rendah menuju reservoir bersuhu tinggi, dan mengasilkan usaha", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  const handleAnswerOptionClick = () => {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let points = 0;
  
    setCheckedItems({});
  
    questions[currentQuestion].options.forEach((option) => {
      if (option.isCorrect && checkedItems[option.answer]) {
        correctAnswers++;
      } else if (!option.isCorrect && checkedItems[option.answer]) {
        wrongAnswers++;
      }
    });
  
    const numCorrectAnswers = questions[currentQuestion].options.filter(option => option.isCorrect).length;
    const numCheckedAnswers = Object.values(checkedItems).filter(Boolean).length;
    const correctRatio = numCorrectAnswers > 0 ? correctAnswers / numCorrectAnswers : 0;
  
    if (numCheckedAnswers === 0) {
      points = 0;
    } else if (correctRatio === 1) {
      if (wrongAnswers === 0) {
        points = 4;
      } else {
        points = Math.max(0, 4 - wrongAnswers);
      }
    } else if (correctRatio >= 0.5) {
      points = 2;
    } else {
      points = 0;
    }

    let incorrectAnswers = 0;
    questions[currentQuestion].options.forEach((option) => {
      if (!option.isCorrect && checkedItems[option.answer]) {
        incorrectAnswers++;
      }
    });

points = Math.max(0, 2 * correctAnswers - incorrectAnswers);
  
    setScore(score + points);
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  
  

  const [showScore, setShowScore] = useState(false);
  
  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <div className="congratulations" style={{backgroundImage: "url('https://wallpapercave.com/wp/wp2722942.jpg')"}}>
              <h2>Your Score<br/>{score * 5} points.</h2>
              <h2></h2>
              <p></p>
          </div>
          {/* You scored {score} out of {questions.length} */}
        </div>
      ) : (
        <>
          <div className="question-section">

            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <Card round style={{ marginBottom: 20 }}>
              <Card.Cover onClick={() => Toast.info("")}>
                {questions[currentQuestion].question}
              </Card.Cover>
              <Card.Header></Card.Header>
              <Card.Body>
                {questions[currentQuestion].options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      name={option.answer}
                      checked={checkedItems[option.answer] || false}
                      onChange={handleCheckboxChange}
                    />
                    {option.answer}
                  </label>
                ))}
              </Card.Body>
              <Card.Footer>
                <button onClick={handleAnswerOptionClick}>Submit</button>
              </Card.Footer>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};
export default Quiz;
