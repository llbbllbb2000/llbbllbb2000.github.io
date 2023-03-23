import "./About.scss";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const About = () => {
  const [loadingClass, setLoadingClass] = useState(false);
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    if (loadingClass) {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 2000);
    } else {
      setTimeout(() => {
        setLoadingClass(true);
      }, 2000);
    }
  });

  return (
    <>
      {loadingClass ? (
        <div className="about-page">
          <div className="text-zone">
            <h1>
              <div className="row">
                <div className="col">
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArr={["A", "b", "o", "u", "t", " ", "m", "e"]}
                    idx={3}
                  />
                </div>
                <div className="col">
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArr={["P", "r", "o", "j", "e", "c", "t"]}
                    idx={4}
                  />
                </div>
              </div>
            </h1>
            <p>
              As a current computer science student at Brandeis, I am eager to
              apply my skills and knowledge to solve real-world problems.
            </p>
            <p>
              During my study, I have gained experience in various programming
              languages, including Python, Java, and C/C++. Also, I have
              developed skills in web development using HTML/CSS and JavaScript,
              and I have some small project experience.
            </p>
            <p>
              One of my key strengths is my self-learning ability. Technology
              and programming languages are constantly evolving, and there is
              always something new to learn. I enjoy keeping up with the latest
              trends and developments in the field, and I am always eager to
              expand my knowledge and skills.
            </p>
            <p>
              Overall, I believe my passion for computer science make me a
              strong candidate in this field. I look forward to learn and grow
              as a CS student and as a professional in the industry.
            </p>
          </div>
          <div className="project-page">
            <div className="d-grid gap-2 mx-auto">
              <a
                className="btn btn-outline-primary btn-lg"
                href="https://github.com/llbbllbb2000/llbbllbb2000.github.io/tree/code"
                target="_blank"
              >
                Personal Website
                <br />
                Using React Router DOM with HTML/CSS/JS
              </a>
              <a
                className="btn btn-outline-primary btn-lg"
                href="https://github.com/llbbllbb2000/CS144"
                target="_blank"
              >
                TCP/IP Protocol
                <br />
                Using C++ to build a simple TCP/IP Protocol
              </a>
              <a
                className="btn btn-outline-primary btn-lg"
                href="https://github.com/llbbllbb2000/cancer-diagnose"
                target="_blank"
              >
                Cancer Detection Project :
                <br />
                a CNN network using Python,
                <br />a React front-end app and a flask back-end
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
