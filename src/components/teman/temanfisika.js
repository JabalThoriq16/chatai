import React, { useState, useEffect} from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './Chat.css';
import axios from 'axios';

function Chat() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState((window.innerHeight - (window.innerHeight*13/100)));
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  console.log(process.env.REACT_APP_API_KEY)

  // Set up OpenAI API key
  const configuration = new Configuration({
    // organization: "org-VDCuduHFopkPSXUBo6MHzU3a",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    };
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0,
      max_tokens: 200,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }, { headers: headers });
    setOutput(response.data.choices[0].text);
    setInput('');
    setChatHistory([...chatHistory, { message: input, sender: 'user' }, { message: response.data.choices[0].text, sender: 'bot' }]);
  };

  return (
    <div style={{height:height,width:width}} className="chat-container">

      <div className="chat-body">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message chat-message-${chat.sender}`}>
            <p style={{fontSize:"16px"}}>{chat.message}</p>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
