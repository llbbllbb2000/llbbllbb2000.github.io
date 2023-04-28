import "./Home.scss";
import React, { useState } from "react";

const Home = () => {
  const [letterClass, setLetterClass] = useState("type-anime");

  return (
    <section id="Home">
      <div className="container-fluid">
        <div className="intro-text">
          <h1>Hi, I'm Zisheng</h1>
          <h1>A CS student in Brandeis</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
