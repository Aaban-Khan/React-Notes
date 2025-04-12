import { useRef, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let a = 0;
  useEffect(() => {
    a = a + 1;
    // console.log(`rendering and the value of a is ${a}`);
  }); //isse use karne hai initially to a ki value 1 then 2 hoo jayegi but later a ki value 1 hi rahegi cuz har re-render par a ki value again zero ho jayegi

  //iss problem ko avoid karne ke liye useRef use kiya jata hai

  let ref = useRef(0);
  useEffect(() => {
    ref.current = ref.current + 1; 
    console.log(`rendering and the value of ref is ${ref.current}`);
  }); //yha " .current " ka use karna important hai, ye ref ki current value ka access deta hai 

  let btnRef = useRef(0)
  useEffect(() => {
    if(count === 3){
      btnRef.current.style.backgroundColor = "red"
    }
  }, [count])
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button  ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=> btnRef.current.style.display = "none"}>click</button>
    </>
  );
}

export default App;
