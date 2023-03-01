import React, { useState } from "react";
import { Card, Image, Button, Toast, Space } from "react-vant";
import "./soal.css";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "Sebuah piston mengandung 0,05 mol gas ideal pada suhu 27°C. Tekanan gas sebesar 105 Pa. Proses selanjutnya, gas dipanaskan hingga suhunya mencapai 77°C dan volume piston bertambah pada tekanan konstan. Maka usaha yang telah dilakukan oleh gas sebesar ….",
      options: [
        { answer: "12,8 joule", isCorrect: true },
        { answer: "20,8 joule", isCorrect: false },
        { answer: "25,6 joule", isCorrect: false },
        { answer: "29,3 joule", isCorrect: false },
        { answer: "33,3 joule", isCorrect: false },
        { answer: "Usaha merupakan perkalian antara perubahan suhu dengan tekanan tetap", isCorrect: true },
        { answer: "Usaha merupakan perkalian antara jumlah mol gas dengan suhu awal", isCorrect: false },
        { answer: "Usaha merupakan perkalian antara perubahan suhu dengan perubahan volume", isCorrect: false },
        { answer: "Usaha merupakan perkalian antara perubahan volume gas dengan tekanan tetap", isCorrect: false },
        { answer: "Usaha merupakan selisih dari perubahan suhu dan volume", isCorrect: false },
      ],
    },
    {
      id: 2,
      question:
        "10 mol gas helium disimpan dalam tabung tertutup, volume 2 liter (isokhorik) dengan tekanan 1,2. 106 Pa. Jika gas menyerap kalor sehingga tekanan menjadi 2. 106 Pa. maka besar perubahan energi dalamnya adalah ….",
      options: [
        { answer: "240 joule", isCorrect: true },
        { answer: "270 joule", isCorrect: false },
        { answer: "300 joule", isCorrect: false },
        { answer: "324 joule", isCorrect: false },
        { answer: "360 joule", isCorrect: false },
        { answer: "Perubahan energi dalam berbanding lurus dengan jumlah perkalian antara tekanan dan volume pada keadaan akhir dan awal", isCorrect: true },
        { answer: "Perubahan energi dalam berbanding terbalik dengan selisih perkalian antara tekanan dan volume pada keadaan akhir dan awal", isCorrect: false },
        { answer: "Perubahan energi dalam berbanding terbalik dengan jumlah perkalian antara tekanan dan volume pada keadaan akhir dan awal", isCorrect: false },
        { answer: "Perubahan energi dalam berbanding lurus dengan pembagian antara tekanan dan volume pada keadaan akhir dan awal", isCorrect: false },
        { answer: "Perubahan energi dalam berbanding lurus dengan selisih perkalian antara tekanan dan volume pada keadaan akhir dan awal", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: <Image src="/soal/8.png"/>,
      options: [
        { answer: "1", isCorrect: true },
        { answer: "2", isCorrect: false },
        { answer: "3", isCorrect: false },
        { answer: "4", isCorrect: false },
        { answer: "5", isCorrect: false },
        { answer: "Usaha berbanding terbalik dengan perubahan suhu", isCorrect: true },
        { answer: "Usaha sama dengan perubahan suhu", isCorrect: false },
        { answer: "Usaha berbanding lurus dengan perubahan suhu", isCorrect: false },
        { answer: "Usaha dalam proses adiabatik selalu nol", isCorrect: false },
        { answer: "Usaha tidak dipengaruhi oleh suhu", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Gas ideal sebanyak 0,24 mol berada dalam sebuah sistem yang dihubungkan dengan sebuah reservoir termal, agar sistem berada dalam suhu konstan 40°C. Jika diketahui volume awal sistem 4 liter dan usaha yang dilakukan 20 joule, maka kenaikan volume dan tekanan akhir gas adalah ….",
      options: [
        { answer: "12,8. 10−5 m3 dan 1,56. 105 Pa", isCorrect: true },
        { answer: "12,8. 10−3 m3 dan 1,56. 103 Pa", isCorrect: false },
        { answer: "13,4. 10−5 m3 dan 1,28. 105 Pa", isCorrect: false },
        { answer: "13,4. 10−3 m3 dan 1,28. 103 Pa", isCorrect: false },
        { answer: "15,6. 10−5 m3 dan 1,34. 105 Pa", isCorrect: false },
        { answer: "Tekanan berbanding terbalik dengan suhu, dan perubahan volume berbanding terbalik dengan usaha", isCorrect: true },
        { answer: "Tekanan berbanding lurus dengan suhu, dan perubahan volume berbanding lurus dengan usaha", isCorrect: false },
        { answer: "Tekanan berbanding terbalik dengan suhu, dan perubahan volume berbanding lurus dengan usaha", isCorrect: false },
        { answer: "Tekanan berbanding lurus dengan suhu, dan perubahan volume berbanding terbalik dengan usaha", isCorrect: false },
        { answer: "Tekanan berbanding lurus dengan volume, dan suhu berbanding terbalik dengan usaha", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "Gas dalam sebuah ruangan tertutup mengalami proses isotermik yang menyebabkan volumenya mengalami pengembangan sebesar 2.000 dm3. Jika suhu awal gas 273 K dan tekanan awalnya 4 𝑥 105 Pa, maka kalor yang diterima atau dibuang sistem, agar kerja yang dilakukan lingkungan terhadap sistem bernilai negatif sebesar ….",
      options: [
        { answer: "6,123. 105 J", isCorrect: true },
        { answer: "7,014. 105 J", isCorrect: false },
        { answer: "8,034. 105 J", isCorrect: false },
        { answer: "9,541. 105 J", isCorrect: false },
        { answer: "10,374. 105 J", isCorrect: false },
        { answer: "Untuk mendapatkan kerja bernilai negatif, maka sistem menerima kalor", isCorrect: true },
        { answer: "Untuk mendapatkan kerja bernilai negatif, maka sistem membuang kalor", isCorrect: false },
        { answer: "Untuk mendapatkan kerja bernilai positif, maka sistem membuang kalor", isCorrect: false },
        { answer: "Untuk mendapatkan kerja bernilai positif, maka sistem menerima kalor", isCorrect: false },
        { answer: "Untuk mendapatkan kerja bernilai negatif, maka lingkungan menerima kalor", isCorrect: false },
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
