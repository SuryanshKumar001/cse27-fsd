import React from 'react'
import {Link,Route,Routes,BrowserRouter} from 'react-router-dom'

function Home(){
  return <h1>this is my home page</h1>
  
}

function About(){
  return <h1>this is my about page</h1>
}

function Phone(){
  return <h1>this is my phone page</h1>
}

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About us</Link>
        <Link to='/phone'>Phone</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/phone" element={<Phone/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App