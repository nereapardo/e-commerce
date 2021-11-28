import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const flag = false;
  const [flag, setFlag] = useState();

  useEffect(() => {
    const getChar = async () => {
      const char = await fetch("https://rickandmortyapi.com/api/character");
      const res = char.json();
      console.log(res);
    };
    getChar();
  }, [flag]);

  const getName = () => {
    return <h1>nerea</h1>;
  };

  if (flag) {
    return (
      <div>
        <h1>prueba</h1>
      </div>
    );
  }
  getName();
  const gettingTheName = getName();
  const classnamje = flag ? "bgbgh" : "jjm";

  return (
    <div className={styles.container}>
      <div>
        <h1>hello world</h1>
        <p className={flag ? "bgbgh" : "jjm"}>my name is {getName()}</p>
      </div>
    </div>
  );
}
