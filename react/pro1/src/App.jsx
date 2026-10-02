import Student from "./component/student"


const App = () => {
  return (
    <div>
      <h1>STUDENT RECORD</h1>
      <div style={{display:'flex', margin:'20px', gap:'20px'}}>
        <Student/>
        <Student/>
        <Student/>
      </div>
      
    </div>
  )
}

export default App