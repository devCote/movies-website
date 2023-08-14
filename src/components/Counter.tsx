import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className={classes.h1}>{count}</h1>
      <button className={classes.btn} onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  );
};
