import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";


export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const quizIsOver = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }
    
    if (quizIsOver) {
        return (
            <div id="summary">
                <h2>Quiz Completed</h2>
                <img src={quizCompletedImg} alt="Quiz completed Logo" />
                <ul>
                    {QUESTIONS.map((question, index) => (
                        <li key={index} className={userAnswers[index] === question.correctAnswer ? "correct" : "incorrect"}>
                            {question.text}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    const shuffuledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffuledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffuledAnswers.map((answer, index) => (
                        <li key={index} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}