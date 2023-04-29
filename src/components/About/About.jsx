import "./About.scss";
import React from "react";
import ReadImg from "../../assets/images/MyImg.png";

const About = () => {
  return (
    <section id="About">
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
          <div className="col-lg-12 col-xl-6">
            <img src={ReadImg} alt="A photo of book" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
