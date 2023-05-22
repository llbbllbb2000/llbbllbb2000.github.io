import "./About.scss";
import React, { useState } from "react";
import Reading from "../../assets/images/reading.jpg";
import Snowboard from "../../assets/images/snowboard.jpg";
import Game from "../../assets/images/game.jpg";

const About = () => {
  const colors = {
    "item-1": "#F7D8BA",
    "item-2": "#c6e2e9",
    "item-3": "#a8e6cf",
  };

  const titles = {
    "item-1": "Reading",
    "item-2": "Snowboard",
    "item-3": "Gaming",
  };

  const contents = {
    "item-1": (
      <p>
        I love reading books about history, philosophy, and ancient Chinese
        poetry.
        <br />
        I enjoy history because I believe "there is nothing new under the sun",
        all events will happen again, but just in different contexts. It helps
        me understand the present, and predict the future. As for philosophy, my
        dream is to find the meaning of life (or maybe life has no meaning, who
        knows).
        <br />
        And I really appreciate the beauty of ancient Chinese poetry, it is
        concise but incredibly emotional and impressive. I won't know what and
        how to talk or write in a proper way if I don't study poetry.
      </p>
    ),
    "item-2": (
      <p>
        Going fast and flying through the is are really exciting! I don't really
        know how to play ball games, like basketball and it may be because I
        have no talent.
        <br />
        But snowboarding is really great, especially when I do a perfect turn at
        high speed.I hope I can do a perfect curve in my next ski season, and
        finish the intermediate trail smoothly. Maybe finish the expert trail if
        possible? (but that's too scary, haha)
        <br />
        By the way, I have no idea about the feeling of riding powder (2022-2023
        is my first ski season, and the snow condition is bad in east coast ski
        resorts).
      </p>
    ),
    "item-3": (
      <p>
        I love games, and I believe no one hates them. the immersion is strong,
        and when I play games, I feel like I am experiencing a totally new life.
        Assassin's Creed 2 / Brotherhood/ Revelations, The Binding of Isaac,
        Celeste, Hollo Knight .... they're all my favorite games.
        <br />
        I don't really care about genres of games if they are interesting
        enough. Ever17, CLANNAD, STEINS;GATE, are visual novel games, but the
        stories are awesome and impressive.
        <br />
        I think I have a special taste. I prefer indie games, not 3A
        games. (My pc configuration used to be poor and could only run games
        that didn't require high specs🤣🤣)
      </p>
    ),
  };

  const [titleState, setTitleState] = useState(titles["item-1"]);
  const [contentState, setcontentState] = useState(contents["item-1"]);

  const demo = (props) => {
    setTitleState(titles[props.target.id]);
    setcontentState(contents[props.target.id]);
  };

  return (
    <section id="About">
      <div className="container-fluid">
        <div className="row gx-10">
          <div className="col-lg-12 col-xl-6">
            <h1>{titleState}</h1>
            {contentState}
          </div>
          <div className="col-lg-12 col-xl-6 slider-container">
            {/* Using defaultcheck instead of checked in React.js!!! */}
            <input
              type="radio"
              name="slider"
              id="item-1"
              defaultChecked
              onChange={demo}
            />
            <input type="radio" name="slider" id="item-2" onChange={demo} />
            <input type="radio" name="slider" id="item-3" onChange={demo} />
            <div className="cards">
              <label className="card" for="item-1" id="img-1">
                <img src={Reading} alt="A photo of book" />
              </label>
              <label className="card" for="item-2" id="img-2">
                <img src={Snowboard} alt="A photo of snowboard" />
              </label>
              <label className="card" for="item-3" id="img-3">
                <img src={Game} alt="A photo of game controller" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
