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
            <div className="row">
              <div className="col">
                <h1>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArr={["A", "b", "o", "u", "t", " ", "m", "e"]}
                    idx={3}
                  />
                </h1>
                <p>
                  As a current computer science student at Brandeis, I am eager
                  to apply my skills and knowledge to solve real-world problems.
                </p>
                <p>
                  During my study, I have gained experience in various
                  programming languages, including Python, Java, and C/C++.
                  Also, I have developed skills in web development using
                  HTML/CSS and JavaScript, and I have some small project
                  experience.
                </p>
                <p>
                  One of my key strengths is my self-learning ability.
                  Technology and programming languages are constantly evolving,
                  and there is always something new to learn. I enjoy keeping up
                  with the latest trends and developments in the field, and I am
                  always eager to expand my knowledge and skills.
                </p>
                <p>
                  Overall, I believe my passion for computer science make me a
                  strong candidate in this field. I look forward to learn and
                  grow as a CS student and as a professional in the industry.
                </p>
              </div>
              <div className="col">
                <h1>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArr={["R", "e", "s", "u", "m", "e"]}
                    idx={4}
                  />
                </h1>
                <div className="d-grid gap-2 mx-auto">
                  <div className="text-container">
                    <h1>Brandeis University</h1>
                    <h2>Computer Science</h2>
                    <p>Java Programming, Algorithm and Data Structure, Web Development, Machine Learning</p>
                  </div>
                  <div className="text-container">
                    <h1>Dalian University of Technology</h1>
                    <h2>Environmental and Ecological Engineering</h2>
                    <p>C/C++ Programming, Electrical Technology, Biostatistics and Experimental Design</p>
                  </div>
                  <div className="text-container">
                    <h1>XPeng</h1>
                    <h2>Data Analyst Intern</h2>
                    <p>Python, SQL, NoSQL</p>
                  </div>
                </div>
              </div>
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
