import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsOver = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsOver) {
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="Quiz completed Logo" />
                <h2>Quiz Completed</h2>
                <ul>
                    {QUESTIONS.map((question, index) => (
                        <li key={index} className={userAnswers[index] === question.correctAnswer ? "correct" : "wrong"}>
                            {question.text}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                idx={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer} 
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}