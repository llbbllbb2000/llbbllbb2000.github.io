import "./Home.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import MyImg from "../../assets/images/MyImg.png";
import Loading from "../Loading/Loading";

const Home = () => {
  const [loadingClass, setLoadingClass] = useState(false);
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    if (loadingClass) {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    } else {
      setTimeout(() => {
        setLoadingClass(true);
      }, 3000);
    }
  });

  return (
    <>
      {loadingClass ? (
        <div className="home-page container">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArr={["H", "i", ","]}
                idx={5}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArr={["I", "'", "m", " ", "Z", "i", "s", "h", "e", "n", "g"]}
                idx={8}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArr={[
                  "a",
                  " ",
                  "C",
                  "S",
                  " ",
                  "s",
                  "t",
                  "u",
                  "d",
                  "e",
                  "n",
                  "t",
                ]}
                idx={18}
              />
            </h1>
            <h2>HTML/CSS/JS, C/C++/Python/Java</h2>
            <a href="mailto:zisheng.cai2000@gmail.com">
              <button type="button" className="flat-button">
                Contact Me
              </button>
            </a>
            <img src={MyImg} alt="A photo of myself" />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
