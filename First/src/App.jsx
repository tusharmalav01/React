//import React from 'react'

import Card from "./Components/Card"


const App = () => {
  return (
    <div className="parent">
      
    <Card user='Kittu' age={21} img="https://images.unsplash.com/photo-1766303046126-96e6dcf50929?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user='Happy' age={18} img="https://images.unsplash.com/photo-1766324934839-313529832615?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"/>
   </div>
  )
}

export default App
