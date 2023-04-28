import "./Title.scss";
import React from "react";

const Title = () => {
  let contents = ["Home", "About", "Career"];

  return (
    <section id="title">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          {contents.map(content => (
            <a className={`nav-item ${content}`} href={`#${content}`}>
              {content}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Title;
