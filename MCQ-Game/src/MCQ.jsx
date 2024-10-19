import React, { useState } from "react";
import "./MCQ.css";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
    answer: "Albert Einstein"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
];

export default function MCQQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (option) => {
    if (option === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="mcq">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length}
        </div>
      ) : (
        <div className="question-section">
          <h1>Question {currentQuestionIndex + 1}/{quizQuestions.length}</h1>
          <div className="question-text">
            {quizQuestions[currentQuestionIndex].question}
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
