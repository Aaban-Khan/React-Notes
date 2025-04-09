import { useEffect, useState } from "react";
 
const Count = () => {
  const [count , setCount] = useState(0)
  const [dog , setDog] = useState(100)

  
    //clean-up function
    useEffect(() => {
      alert("heyy im an example of clean-up function")
      return () => {
        alert("component was unmounted") //run when we removes a component 
        //next lessons we see how to remove a component dynamically through conditional rendering 
        //it is rarely used in projects
      } //this func is called cleanup function and it is optional
    }, [count])

  return (
    <>
     <button onClick={()=> { setCount(count+1)}}> the Count is {count}</button>
     <button onClick={()=> { setDog(dog-1)}}> the Count is {dog}</button>
    </>
  );
};

export default Count;