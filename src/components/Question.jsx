import React from "react";

import '../styles/Question.css';

const Question = ({ question, onClick }) => {
    
    return (
        <div className="questions">
            <h2>{question.question}</h2>
            <ul>
                {question.reps && question.reps.map((rep, index) => (
                    <li key={index} onClick={() => onClick(rep.isCorrect)}>
                        {rep.rep}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Question;