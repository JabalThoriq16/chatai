import React, { useState } from "react";
import { Card, Image, Button, Toast, Space } from "react-vant";
import "./soal.css";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: <Image src="/soal/11.png"/>,
      options: [
        { answer: "1 dan 2", isCorrect: true },
        { answer: "1 dan 4", isCorrect: false },
        { answer: "1 dan 5", isCorrect: false },
        { answer: "2 dan 3", isCorrect: false },
        { answer: "2 dan 4", isCorrect: false },
        { answer: "Usaha merupakan selisih antara kalor yang diserap dari reservoir panas dan kalor yang dibuang ke reservoir dingin", isCorrect: true },
        { answer: "Usaha merupakan jumlah dari kalor yang diserap dari reservoir panas dan kalor yang dibuang ke reservoir dingin", isCorrect: false },
        { answer: "Usaha merupakan pembagian antara kalor yang diserap dari reservoir panas dengan kalor yang dibuang ke reservoir dingin", isCorrect: false },
        { answer: "Usaha sama dengan jumlah kalor yang diserap dari reservoir panas", isCorrect: false },
        { answer: "Usaha sama dengan jumlah kalor yang dibuang ke reservoir dingin", isCorrect: false },
      ],
    },
    {
      id: 2,
      question:"Sebuah mesin kalor memiliki efisiensi sebesar 20%. Jika arah proses dalam mesin tersebut dibalik sehingga menjadi pompa panas, maka koefesien performa pompa panas tersebut adalah ….",
      options: [
        { answer: "5,0", isCorrect: true },
        { answer: "1,25", isCorrect: false },
        { answer: "0,9", isCorrect: false },
        { answer: "0,8", isCorrect: false },
        { answer: "0,2", isCorrect: false },
        { answer: "Koefesien performa berbanding lurus dengan efisiensi", isCorrect: true },
        { answer: "Koefesien performa berbanding terbalik dengan efisiensi", isCorrect: false },
        { answer: "Koefesien performa dan efisiensi sama besar", isCorrect: false },
        { answer: "Koefesien performa lebih besar dari efisiensi", isCorrect: false },
        { answer: "Koefesien performa lebih kecil dari efisiensi", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Kulkas dengan koefesien performa 5,0 digunakan untuk membekukan air, dengan daya masukan sebesar 500 W. Jumlah kalor yang dipindahkan dari reservoir dingin sebesar 2,08. 105 joule. Waktu yang diperlukan untuk terjadinya proses pembekuan adalah ….",
      options: [
        { answer: "67,8 sekon", isCorrect: true },
        { answer: "83,3 sekon", isCorrect: false },
        { answer: "91,6 sekon", isCorrect: false },
        { answer: "105,4 sekon", isCorrect: false },
        { answer: "121,9 sekon", isCorrect: false },
        { answer: "Waktu pembekuan semakin cepat jika kalor yang dipindahkan dari reservoir dingin semakin besar", isCorrect: true },
        { answer: "Waktu pembekuan semakin lama jika kalor yang dipindahkan dari reservoir dingin semakin kecil", isCorrect: false },
        { answer: "Waktu pembekuan semakin lama jika kalor yang dipindahkan dari reservoir dingin semakin besar", isCorrect: false },
        { answer: "Waktu pembekuan semakin lama jika daya semakin besar", isCorrect: false },
        { answer: "Waktu pembekuan semakin lama jika koefesien performa semakin besar", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Sebuah kubus es bermassa 60 gram dan bersuhu 0°C ditempatkan di dalam gelas. Setelah disimpan beberapa lama, setengah dari es tersebut mencair menjadi air bersuhu 0°C. perubahan entropi yang dialami es sebesar …. (diketahui kalor lebur es 80 kal/g)",
      options: [
        { answer: "8,8 kal/K", isCorrect: true },
        { answer: "9,8 kal/K", isCorrect: false },
        { answer: "10,8 kal/K", isCorrect: false },
        { answer: "11,8 kal/K", isCorrect: false },
        { answer: "12,8 kal/K", isCorrect: false },
        { answer: "Semakin besar perubahan suhu, semakin besar pula perubahan entropinya", isCorrect: true },
        { answer: "Semakin kecil perubahan suhu, semakin besar perubahan entropinya", isCorrect: false },
        { answer: "Semakin kecil perubahan kalor untuk meleburkan es, semakin besar perubahan entropinya", isCorrect: false },
        { answer: "Semakin besar perubahan kalor untuk meleburkan es, semakin kecil perubahan entropinya", isCorrect: false },
        { answer: "Semakin besar perubahan kalor untuk meleburkan es, semakin besar pula perubahan entropinya", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "Suatu pabrik ingin membuat mesin pendingin dengan koefesien performa 2,5. Jika dituangkan dalam bentuk diagram proses, maka diagram yang sesuai adalah ….",
      options: [
        { answer: <Image height="150px" width="150px" src="/soal/15/a.png"/>, isCorrect: true },
        { answer: <Image height="150px" width="150px" src="/soal/15/b.png"/>, isCorrect: false },
        { answer: <Image height="150px" width="150px" src="/soal/15/c.png"/>, isCorrect: false },
        { answer: <Image height="150px" width="150px" src="/soal/15/d.png"/>, isCorrect: false },
        { answer: <Image height="150px" width="150px" src="/soal/15/e.png"/>, isCorrect: false },
        { answer: "Kalor yang disedot reservoir panas lebih kecil dari kalor yang dibuang ke reservoir dingin", isCorrect: true },
        { answer: "Kalor yang disedot reservoir panas lebih besar dari kalor yang dibuang ke reservoir dingin", isCorrect: false },
        { answer: "Kalor yang disedot dari reservoir dingin lebih besar dari kalor yang dibuang ke reservoir panas", isCorrect: false },
        { answer: "Kalor yang disedot dari reservoir dingin lebih kecil dari kalor yang dibuang ke reservoir panas", isCorrect: false },
        { answer: "Kalor yang disedot dan buang dari reservoir panas dan dingin sama besar", isCorrect: false },
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
