import "./Footer.scss";
import React from "react";
import Github from "../../assets/images/github.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";
import Copyright from "../../assets/images/copyright.svg";

const Footer = () => {
  return (
    <section id="Footer">
      <div className="container-fluid">
        <div className="icon">
          <a href="https://github.com/llbbllbb2000" target="_blank">
            <img src={Github} />
          </a>
          <a href="https://www.linkedin.com/in/zisheng-cai/" target="_blank">
            <img src={Linkedin} />
          </a>
          <a href="https://www.instagram.com/zisheng2000/" target="_blank">
            <img src={Instagram} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100084519502812"
            target="_blank"
          >
            <img src={Facebook} />
          </a>
        </div>
        <br />
        <p>
            <img src={Copyright} style={{ width: "2rem" }} />
            Copyright 2023 by Zisheng
        </p>
        <p>Email: zisheng.cai2000@gmail.com | Tel: (+1) 712-650-0367</p>
      </div>
    </section>
  );
};

export default Footer;
