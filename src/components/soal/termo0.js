import React, { useState } from "react";
import { Card, Image, Button, Toast, Space } from "react-vant";
import "./soal.css";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: <Image src="/soal/1.png" />,
      options: [
        { answer: "1 dan 2", isCorrect: true },
        { answer: "2 dan 3", isCorrect: false },
        { answer: "3 dan 1", isCorrect: false },
        { answer: "4 dan 2", isCorrect: false },
        { answer: "5 dan 3", isCorrect: false },
        { answer: "Jika tekanan gas dipertahankan konstan, maka volume gas sama dengan suhunya", isCorrect: true },
        { answer: "Jika tekanan gas dipertahankan konstan, maka volume gas berbanding terbalik dengan suhunya", isCorrect: false },
        { answer: "Jika tekanan gas dipertahankan konstan, maka volume gas berbanding lurus dengan suhunya", isCorrect: false },
        { answer: "Jika tekanan gas dipertahankan konstan, maka volume gas lebih besar dari suhunya", isCorrect: false },
        { answer: "Jika tekanan gas dipertahankan konstan, maka volume gas lebih kecil dari suhunya", isCorrect: false },
      ],
    },
    {
      id: 2,
      question:
        "Suhu suatu gas dalam sebuah ruangan tertutup mula-mula adalah . Jika tekanan akhir pada ruangan tertutup tersebut 5 kali lebih besar dari tekanan semula, maka suhu akhir gas tersebut sebesar ….",
      options: [
        { answer: "35°C", isCorrect: true },
        { answer: "77°C", isCorrect: false },
        { answer: "160°C", isCorrect: false },
        { answer: "273°C", isCorrect: false },
        { answer: "385°C", isCorrect: false },
        { answer: "Pada volume tetap, tekanan gas berbanding lurus dengan suhunya", isCorrect: true },
        { answer: "Pada volume tetap, tekanan gas berbanding terbalik dengan suhunya", isCorrect: false },
        { answer: "Pada volume tetap, tekanan gas sama dengan dengan suhunya", isCorrect: false },
        { answer: "Pada volume tetap, tekanan gas lebih besar dari suhunya", isCorrect: false },
        { answer: "Pada volume tetap, tekanan gas lebih kecil dari suhunya", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: <Image src="/soal/3.png"/>,
      options: [
        { answer: "1, 2, dan 3", isCorrect: true },
        { answer: "1 dan 4", isCorrect: false },
        { answer: "1 dan 2", isCorrect: false },
        { answer: "2, 3, dan 4", isCorrect: false },
        { answer: "2 dan 4", isCorrect: false },
        { answer: "Usaha hanya bisa dilakukan oleh sistem", isCorrect: true },
        { answer: "Usaha tidak bisa dilakukan oleh lingkungan", isCorrect: false },
        { answer: "Usaha sebanding dengan suhu", isCorrect: false },
        { answer: "Usaha merupakan perkalian antara perubahan volume gas dengan tekanan tetap", isCorrect: false },
        { answer: "Usaha maksimal ketika proses isokhorik", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Gas dengan suhu, tekanan, dan volume tertentu ditekan sehingga volumenya menjadi setengah dari volumenya semula. Pernyataan berikut yang benar adalah ….",
      options: [
        { answer: "kerja yang dilakukan lingkungan pada sistem jika proses berlangsung secara isobarik lebih besar daripada jika proses berlangsung secara isotermal", isCorrect: true },
        { answer: "kerja yang dilakukan lingkungan pada sistem jika proses berlangsung secara isobarik lebih besar daripada jika proses berlangsung secara adiabatik ", isCorrect: false },
        { answer: "kerja yang dilakukan lingkungan pada sistem jika proses berlangsung secara adiabatic lebih besar daripada jika proses berlangsung secara isotermal ", isCorrect: false },
        { answer: "kerja yang dilakukan lingkungan pada sistem jika proses berlangsung secara adiabatic lebih kecil daripada jika proses berlangsung secara isotermal", isCorrect: false },
        { answer: "tekanan dan suhu juga berkurang menjadi setengahnya", isCorrect: false },
        { answer: "Kerja yang dilakukan oleh lingkungan pada sistem bernilain positif, dan sistem mendapat kalor bernilai positif", isCorrect: true },
        { answer: "Kerja yang dilakukan oleh lingkungan pada sistem bernilain negatif, dan sistem mendapat kalor bernilai positif", isCorrect: false },
        { answer: "Kerja yang dilakukan oleh lingkungan pada sistem bernilain negatif, dan sistem mendapat kalor bernilai negatif", isCorrect: false },
        { answer: "Kerja yang dilakukan oleh lingkungan pada sistem bernilain positif, dan sistem mendapat kalor bernilai negative", isCorrect: false },
        { answer: "Kerja tidak bisa dilakukan oleh lingkungan pada sistem", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "Sebanyak 1,5 mol gas dalam wadah mengalami pemuaian isobarik pada tekanan 2 × 105 Pa. Suhu awal gas 300 K dan suhu akhirnya 600 K. Jika usaha selama proses -3.600 J, maka besar volume awal dan akhir untuk mencapai usaha tersebut sebesar ….",
      options: [
        { answer: "0,003 m3 dan 0,006 m3", isCorrect: true },
        { answer: "0,004 m3 dan 0,009 m3", isCorrect: false },
        { answer: "0,013 m3 dan 0,029 m3", isCorrect: false },
        { answer: "0,019 m3 dan 0,037 m3", isCorrect: false },
        { answer: "0,021 m3 dan 0,043 m3", isCorrect: false },
        { answer: "Perubahan volume berbanding lurus dengan tekanan", isCorrect: true },
        { answer: "Perubahan volume berbanding terbalik dengan suhu", isCorrect: false },
        { answer: "Perubahan volume berbanding terbalik dengan jumlah mol gas", isCorrect: false },
        { answer: "Perubahan volume berbanding terbalik dengan konstanta gas umum", isCorrect: false },
        { answer: "Perubahan volume berbanding lurus dengan usaha", isCorrect: false },
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
