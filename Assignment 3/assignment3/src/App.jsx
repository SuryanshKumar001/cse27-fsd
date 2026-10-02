import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <div style={{display:"flex", gap:'10px'}}>
        <Card details={{name:"Pizza",price:100,url:"https://en.wikipedia.org/wiki/Pizza"}}/>
        <Card details={{name:"Burger",price:200,url:"https://www.recipetineats.com/tachyon/2019/08/Avocado-Chicken-Burgers_9.jpg"}}/>
        <Card details={{name:"Momos",price:50,url:"https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg"}}/>
      </div>
      
    </div>
  )
}

export default App