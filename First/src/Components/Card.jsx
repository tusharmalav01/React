import React from 'react'

const Card = (Taking) => {
  
  return (
    <div>
      <div className="card">
    <img src={Taking.img} alt="" />
    <h1>
       {Taking.user},{Taking.age}
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis?
    </p>
    <button onClick={() => console.log("clicked")}>
  view profile
</button>

   </div>
    </div>
  )
}

export default Card
