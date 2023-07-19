import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  let [count, setCount] = useState(0);

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      {/* when you pass function to onClick, 
      the DOM will re-render*/}
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        Toggle Theme
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount((count += 1))}>Increment</button>
      <button onClick={() => setCount((count -= 1))}>Decrement</button>
    </div>
  );
};

export default UseState;
