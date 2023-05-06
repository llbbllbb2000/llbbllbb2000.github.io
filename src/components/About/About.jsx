import "./About.scss";
import React, { useState } from "react";
import Reading from "../../assets/images/reading.jpg";
import Snowboard from "../../assets/images/snowboard.jpg";
import Game from "../../assets/images/game.jpg";

const About = () => {
  const colors = {
    "item-1": "#dfc98a",
    "item-2": "#7EC8E3",
    "item-3": "#acada8",
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
        Going fast and flying through the air are really exciting! I don't
        really know how to play ball games, like basketball and it may because I
        have no talent. But snowboard is really great, especially when I do a
        prefect carve at high speed, and 
      </p>
    ),
    "item-3": (
      <p>
        Vestibulum imperdiet nec felis non tincidunt. Praesent semper convallis
        vulputate. Morbi mollis risus non sapien tempor feugiat. In non aliquam
        felis.
      </p>
    ),
  };

  const [colorState, setcolorState] = useState(colors["item-1"]);
  const [titleState, setTitleState] = useState(titles["item-1"]);
  const [contentState, setcontentState] = useState(contents["item-1"]);

  const demo = (props) => {
    setcolorState(colors[props.target.id]);
    setTitleState(titles[props.target.id]);
    setcontentState(contents[props.target.id]);
  };

  return (
    <section id="About" style={{ backgroundColor: colorState }}>
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
