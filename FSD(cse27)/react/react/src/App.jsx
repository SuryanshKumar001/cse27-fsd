import React from 'react'
import Student from './component/Student'

const App = () => {
  return (
    <div>
      Suryansh
      <Student/>
      <Student/>
      <Student/>
    </div>
  )
}

export default App

// index.html -> main.jsx -> App.jsx -> component 
// parent -> child
// return statemnet is only used in child 
// all components have 1st letter capital