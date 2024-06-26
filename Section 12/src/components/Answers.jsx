import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffuledAnswers = useRef();

    if (!shuffuledAnswers.current) {
        shuffuledAnswers.current = [...answers]
        shuffuledAnswers.current.sort(() => Math.random() - 0.5);
    }


    return (
        <ul id="answers">
            {shuffuledAnswers.current.map((answer, index) => {
                let cssClasses = '';
                const isSelected = selectedAnswer === answer;

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClasses = answerState
                }
                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelect(answer)}
                            className={cssClasses}
                            disabled={answerState !== ''}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}