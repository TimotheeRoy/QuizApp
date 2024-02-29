import React, { useEffect, useState } from "react";
import Quiz from "./components/Quiz";

import "./styles/App.css";
import "./styles/Question.css";

const url = 'https://api-quiz-mu.vercel.app/quiz'

function App() {
  const [theme, setTheme] = useState(null)
  const [questions, setQuestions] = useState([])
  const [themes , setThemes] = useState([])
  

  const handleThemeClick = async (theme) =>{
    setTheme(theme)

    const res = await fetch(url + `/${theme}`)
    const data = await res.json()
    setQuestions(data)
  }

  const getThemes = async() =>{
    try {
      const res = await fetch(url)
      const data = await res.json()
      setThemes(data)
    } catch (error) {
      console.error('error',error)
    }
}

useEffect(()=>{
  const fetchThemes = async () =>{
    await getThemes()
  }
  fetchThemes()
}, [])


  return (
    <div className="App">
      {theme && questions.length ? (
        <Quiz theme={theme} questions={questions} />
      ) : (
        <>
        <h1>Choose a theme</h1>
        <ul>
          {themes.map((category, index) => (
            <li key={index} onClick={() => handleThemeClick(category)}> 
              {category[0].toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </>
      )}
    </div>      
  );
}

export default App;
