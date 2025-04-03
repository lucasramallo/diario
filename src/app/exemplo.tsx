'use client'

import { useState } from "react";
import styles from "./page.module.css";

type Props = {
  counter: number;
  setCounter: any;
};

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.page}>
      <MyButton counter={counter} setCounter={setCounter}/>
    </div>
  );
}

export function MyButton(props: Props) {
  return (
    <button onClick={c => {props.setCounter(props.counter + 1)}}>{props.counter}</button>
  );
}