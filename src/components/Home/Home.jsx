import Delayed from "../Delayed/Delayed";
import "./Home.scss";
import React, { useState } from "react";

const Home = () => {
  const [height, setheight] = useState("30vh")
  const [anime, setanime] = useState('')

  setTimeout(() => {
    setheight("5rem")
    setanime('anime')
  }, 3000)

  return (
    <section id="Home" style={{"padding-top" : height}}>
      <div className="container-fluid">
        <div className="intro-text">
          <h1>
            {["H", "i", ",", " I", "'","m", " Z", "i", "s", "h", "e", "n", "g"].map(
              (char, i) => {
                return (<Delayed waitTime={ (i < 3 ? 300 : 800) + i * 100}><span className={anime}>{char}</span></Delayed>)
              }
            )}
          </h1>
          <h2>A CS student in Brandeis</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
