import React, { useState, useEffect } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: 2 },
        { answerText: "London", isCorrect: 1 },
        { answerText: "Paris", isCorrect: 10 },
        { answerText: "Dublin", isCorrect: 3 },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: 1 },
        { answerText: "Elon Musk", isCorrect: 10 },
        { answerText: "Bill Gates", isCorrect: 2 },
        { answerText: "Tony Stark", isCorrect: 3 },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: 10 },
        { answerText: "Intel", isCorrect: 2 },
        { answerText: "Amazon", isCorrect: 1 },
        { answerText: "Microsoft", isCorrect: 2 },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: 10 },
        { answerText: "Intel", isCorrect: 2 },
        { answerText: "Amazon", isCorrect: 1 },
        { answerText: "Microsoft", isCorrect: 2 },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: 3 },
        { answerText: "4", isCorrect: 1 },
        { answerText: "6", isCorrect: 2 },
        { answerText: "7", isCorrect: 10 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNo, setQuestionNo] = useState(1);

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    timeOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  // function resetTimer() {
  //   setTimer(3);
  //   nextQuestion();
  // }

  var setTime;
  const timeOut = () => {
    setTime = setTimeout(() => {
      if (timer === 0) {
        resetTimer();
      } else {
        setTimer(timer - 1);
      }
    }, 1000);
  };

  function resetTimer() {
    if (clearTimeout(setTime)) {
      console.log("success");
    }
    timeOut();
    setTimer(5);
    nextQuestion();
  }

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setshowScore(true);
    }
    setQuestionNo(questionNo + 1);
  };

  const handleAnswerButtonClick = (isCorrect) => {
    resetTimer();

    nextQuestion();
    setQuestionNo(questionNo + 1);
    let trustScore = score + isCorrect;
    setScore(trustScore);
  };

  return (
    <div className="app">
      {}
      {showScore ? (
        <div className="score-section">
          Your Trust Score is: {score} / {questions.length * 10}{" "}
        </div>
      ) : (
        <>
          <div className="timer">{timer}</div>
          <div className="question-wrapper">
            <div className="question-section">
              <div className="question-count">
                <span>Question {questionNo}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() => {
                    handleAnswerButtonClick(answerOptions.isCorrect);
                    timeOut();
                  }}
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </div>
          <div>{/* <button onClick={onClickResetButton}>Reset</button> */}</div>
        </>
      )}
    </div>
  );
}
