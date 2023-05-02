import React from 'react'
import Pari from "../images/friend.jpeg"
const Avika = () => {

  return (
   <>

<h2>Touch on Card</h2>
<p className='hand'>👇</p>
<div className="body" responsive="sm">
 <div className="birthdayCard">
<div className="cardFront"><h3 className="happy">HAPPY BIRTHDAY!<br/><span style={{color:"purple",fontSize:"22px",marginTop:"170px"}}>❤️‍🔥Dear Friend💓</span></h3>
<div className="balloons">
  <div className="balloonOne"></div>
  <div className="balloonTwo"></div>
  <div className="balloonThree"></div>
  <div className="balloonFour"></div>
</div>

</div>
<div className="cardInside">
<h5 className="back">हमारे हाफ पैंट परम मित्र को जन्म दिवस की हार्दिक शुभकामनाएं </h5>
    {/* <p>Dear Best Friend,</p>  */}
    {/* <p>Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.</p>
     */}
     <img src={Pari} width="228px" height="225px" style={{marginLeft:"8px",marginBottom:"3px"}} className="avikaa"></img>
    <p className="name">Birthday Boy Nitish🎂</p>
  </div>
  <h2 style={{fontSize:"16px",marginTop:"30px"}}>🤔Love from 👉 Kamal 🥰</h2>
</div>
</div>



   </>
  )
}

export default Avika;