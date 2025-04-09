import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" alt="wild image" style={{width: "100%"}} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card

//props : ka naam kuch bhi ho sakta hai 
// {} react ko batata hai ki ab javascript likhi jayegi
// INLINE CSS KE LIYE:
// style={} btata hai ki ab javaScript likhi jayegi, 
// style={{width = "100%"}} as a javascript likhte hai