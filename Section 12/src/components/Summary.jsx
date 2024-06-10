import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers, onRestart }) {

    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => QUESTIONS[index].answers[0] === answer);
    const wrongAnswers = userAnswers.filter((answer, index) => QUESTIONS[index].answers[0] !== answer);

    const skippedPercentage = Math.round((skippedAnswers.length / QUESTIONS.length) * 100);
    const correctPercentage = Math.round((correctAnswers.length / QUESTIONS.length) * 100);
    const wrongPercentage = Math.round((wrongAnswers.length / QUESTIONS.length) * 100);

    return (
        <div id="summary">
            <img src={quizCompletedImg} alt="Quiz completed Logo" />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">
                        {skippedPercentage}%
                    </span>
                    <span className="text">
                        Skipped
                    </span>
                </p>
                <p>
                    <span className="number">
                        {correctPercentage}%
                    </span>
                    <span className="text">
                        answered correctly
                    </span>
                </p>
                <p>
                    <span className="number">
                        {wrongPercentage}%
                    </span>
                    <span className="text">
                        answered incorrectly
                    </span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';

                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (QUESTIONS[index].answers[0] === answer) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    );
}
