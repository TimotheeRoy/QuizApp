import React, { useState, useRef } from 'react'

import Question from './Question';
import JSConfetti from 'js-confetti';

import '../styles/shake.css';

function Quiz({theme, questions}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const jsConfetti = useRef(new JSConfetti({ canvas: canvasRef.current }));
    const question = questions[questionIndex];

    
    function shakeItUp () {
        containerRef.current.classList.add('shake')
        setTimeout(() => containerRef.current.classList.remove('shake'), 1000)
    }

    function handleAnswerClick(isCorrect) {
        if (isCorrect) {
            setQuestionIndex(previousIndex => previousIndex + 1);
            jsConfetti.current.addConfetti()
        }
        else {
            shakeItUp();
        }
    }

    return <div className='quiz' ref={containerRef}>
        <Question question={question} onClick={handleAnswerClick}  />
        <canvas ref={canvasRef}/>
    </div>

}

export default Quiz