import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [todo, setTodo] = useState([]);

  const TodoData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    setTodo(data);
  };

  useEffect(() => {
    TodoData();
  }, []);

  return (
    <>
      <div>
        {todo.map((item) => {
          return (
            <div key={item.id} className="card">
              <h1>Todo</h1>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
