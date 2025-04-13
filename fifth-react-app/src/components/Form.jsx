import React from 'react'
import { useState } from "react"

const Form = () => {

    const [form3, setForm3] = useState({email: "", phone: ""})

    const handleClick = (e) =>{
        setForm3({...form3, [e.target.name] : e.target.value})
    }

    // useState me form har component me alag hona chahiye 

  return (
    <div style={{width: "30vw", height:"30vh", border:"3px solid #fff"}}>
        <input type="text" name='email' value={form3.email} onChange={handleClick} />
        <input type="text" name='phone' value={form3.phone} onChange={handleClick} />
    </div>
  )
}

export default Form