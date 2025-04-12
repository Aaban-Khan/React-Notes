import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export function Person({ hello }) {
  return (
    <div className="person" style={{fontSize: "0.5vw"}}>
      <h1>
        hello my name is {hello.name}, i am {hello.age} years old and i speak{" "}
        {hello.language}
      </h1>
    </div>
  );
}//we can create small components in the App.jsx but it is suggested to not write code like this

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setShowbtn] = useState(true);

  const person = [
    {
      id: 1,
      name: "Aarav Mehta",
      age: 24,
      language: "Hindi",
    },
    {
      id: 2,
      name: "Sophia Williams",
      age: 27,
      language: "English",
    },
    {
      id: 3,
      name: "Kenji Tanaka",
      age: 30,
      language: "Japanese",
    },
    {
      id: 4,
      name: "Isabella Rossi",
      age: 22,
      language: "Italian",
    },
  ];

  const personList = person.map((data) => {
    return <Person key={data.id} hello={data} />;
  });
  //we learn how to use map() method in react !!
  //HERE firstly we use map write an function give props to the Person component, "hello" person wale component me jata hai aur "data" map ka argument rehta hai.
  return (
    <>
      <div>{personList}</div>
      {/* personList map se jo functionality banai hai use access karti hai */}
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setShowbtn(() => !showbtn)}>
          toggle ShowBtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/*this is called conditional rendering (if-else) */}
      {showbtn ? (
        <button style={{ backgroundColor: "green" }}>
          the showbtn is true
        </button>
      ) : (
        <button style={{ backgroundColor: "red" }}>the showbtn is false</button>
      )}

      {/* if we want to use only if! then we can use  */}
      {showbtn && (
        <button style={{ backgroundColor: "green" }}>
          the showbtn is true
        </button>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
