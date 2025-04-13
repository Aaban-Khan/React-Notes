import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("aaban");
  //1 useState me double values iss assign ki jati hai
  const [form, setForm] = useState({ email: "", phone: "" });
  // if we pass an empty obj
  const [form2, setForm2] = useState({});

  const alertFucntion = () => {
    alert("btn hover");
  };

  const MouseEnter = () => {
    alert("mouse entered");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  //form ko handle karne kka tarika, yha 2 inputs 1 function se handle ho rhe hai
  const handler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handler2 = (e) => {
    setForm2({ ...form2, [e.target.name]: e.target.value });
    console.log(form2);
  };

  // ideal yhi mana jata hai ki hum Event handle karte time  Evend jsx me banaye aur Event handeler return ke pahele banaye
  return (
    <>
      <Form />
      <button onClick={alertFucntion}>click</button>
      <div className="box" onMouseEnter={MouseEnter}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem
        alias dolorem quia quas sint eum harum perspiciatis? Eius veritatis
        commodi reiciendis eligendi suscipit aspernatur, fuga minus et
        recusandae cupiditate!
      </div>
      <input
        type="text"
        value={name}
        placeholder="aaban khan"
        onChange={handleChange}
      />
      {/* bohot si jagah input me pahele se kuch name likha hua hota hai to wha par "value={name}" use kar sakte hai then change karne ke liye 
      " const handleChange = (e)=>{
        setName(e.target.value)
       } " ka use kar sakte hai  */}

      {/* yha "value={form.email}" iss tarah di hai jo batati hai form ki email / form me phone  */}
      <input type="text" name="email" value={form.email} onChange={handler} />
      <input type="text" name="phone" value={form.phone} onChange={handler} />

      <div>
        {/* empty obj hone ki wahaj se console me error aayega isliye hum  value={form.email? form.email:""} iss syntax ko use karte hai jo kehta hai form.email agar email usestate me hai to form.email use karo otherwise "" blank string chordh do*/}
        <input
          type="text"
          name="email"
          value={form2.email ? form2.email : ""}
          onChange={handler2}
        />
        <input
          type="text"
          name="phone"
          value={form2.phone ? form2.phone : ""}
          onChange={handler2}
        />
      </div>
    </>
  );
}

export default App;
