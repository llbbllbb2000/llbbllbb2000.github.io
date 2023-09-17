import { Row, Col } from "react-bootstrap";
import "./About.scss";
import React, { useState } from "react";
import MySelf from "../../assets/images/myself.jpg";
import Reading from "../../assets/images/reading.jpg";
import Snowboard from "../../assets/images/snowboard.jpg";
import Game from "../../assets/images/game.jpg";

const About = () => {
  const [item, setitem] = useState(0);

  const contents = [
    <>
      Hi there! I'm Zisheng Cai and I really enjoy coding and creating new
      things! Now I'm still a CS master's student in Brandeis, and my interest
      in computers started back in 2012 when I tried to learn how to do game
      hacking (which was not a good thing🤣🤣) using EPL (Easy Programming
      Language), a Chinese Programming Language.
      <br /> <br />
      When I entered high school, I participated in some algorithm competitions
      in China, which really taught me a lot about algorithms and data
      structures. For some reason, my undergraduate major was not CS, but I
      still choose CS as my graduate major and study further.
      <br /> <br />
      Now my main focus is learning C++, improving my rating in Codeforces. I
      hope I can find some backend developer jobs in the future.
      <br /> <br />
      Here are some technologies I've been working with recently :
      <ul>
        <li>C++</li>
        <li>Java</li>
        <li>Python</li>
        <li>React.js</li>
      </ul>
    </>,
    <>
      I love reading books about history, philosophy, and ancient Chinese
      poetry.
      <br /> <br />
      I enjoy history because I believe "there is nothing new under the sun",
      all events will happen again, but just in different contexts. It helps me
      understand the present, and predict the future. As for philosophy, my
      dream is to find the meaning of life (or maybe life has no meaning, who
      knows).
      <br /> <br />
      And I really appreciate the beauty of ancient Chinese poetry, it is
      concise but incredibly emotional and impressive. I won't know what and how
      to talk or write in a proper way if I don't study poetry.
    </>,
    <>
      Going fast and flying through the is are really exciting! I don't really
      know how to play ball games, like basketball and it may be because I have
      no talent.
      <br /> <br />
      But snowboarding is really great, especially when I do a perfect turn at
      high speed.I hope I can do a perfect curve in my next ski season, and
      finish the intermediate trail smoothly. Maybe finish the expert trail if
      possible? (but that's too scary, haha)
      <br /> <br />
      By the way, I have no idea about the feeling of riding powder (2022-2023
      is my first ski season, and the snow condition is bad in east coast ski
      resorts).
    </>,
    <>
      I love games, and I believe no one hates them. the immersion is strong,
      and when I play games, I feel like I am experiencing a totally new life.
      Assassin's Creed 2 / Brotherhood/ Revelations, The Binding of Isaac,
      Celeste, Hollo Knight .... they're all my favorite games.
      <br /> <br />
      I don't really care about genres of games if they are interesting enough.
      Ever17, CLANNAD, STEINS;GATE, are visual novel games, but the stories are
      awesome and impressive.
      <br /> <br />I think I have a special taste. I prefer indie games, not 3A
      games. (My pc configuration used to be poor and could only run games that
      didn't require high specs🤣🤣)
    </>,
  ];
  const images = [MySelf, Reading, Snowboard, Game];

  return (
    <section id="About">
      <div className="container-fluid">
        <h2>About me</h2>
        <hr></hr>
        <br />
        <div className="content-area">
          <p>{contents[item]}</p>
          <div
            className="image-area"
            onClick={() => {
              setitem((item + 1) % contents.length);
            }}
          >
            <img className="top-image" src={images[item]} alt="top" />
            <img
              className="bottom-image"
              src={images[(item + 1) % images.length]}
              alt="bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
