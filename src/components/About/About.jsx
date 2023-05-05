import "./About.scss";
import React, { useState } from "react";
import Reading from "../../assets/images/reading.jpg";
import Snowboard from "../../assets/images/snowboard.jpg";
import Game from "../../assets/images/game.jpg";

const About = () => {
  const colors = {
    "item-1" : "#dfc98a",
    "item-2" : "#7EC8E3",
    "item-3" : "#acada8"
  }

  const [colorState, setcolorState] = useState(colors['item-1'])

  const demo = (props) => {
    setcolorState(colors[props.target.id])
  }

  return (
    <section id="About" style={{backgroundColor : colorState}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-xl-6 about-text">
            <h1>I enjoy reading</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              placerat enim a erat fringilla, non ullamcorper quam auctor.
              Pellentesque eu rhoncus magna. Cras urna diam, mollis tristique
              orci in, commodo tempor sapien. Vestibulum imperdiet nec felis non
              tincidunt. Praesent semper convallis vulputate. Morbi mollis risus
              non sapien tempor feugiat. In non aliquam felis. Sed diam sapien,
              blandit vitae orci eu, venenatis vestibulum ante. Cras at mi a leo
              consequat mattis. Nunc vestibulum interdum rutrum.
            </p>
          </div>
          <div className="col-lg-12 col-xl-6 slider-container">
            {/* Using defaultcheck instead of checked in React.js!!! */}
            <input type="radio" name="slider" id="item-1" defaultChecked onChange={demo}/>
            <input type="radio" name="slider" id="item-2" onChange={demo}/>
            <input type="radio" name="slider" id="item-3" onChange={demo}/>
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
