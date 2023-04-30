import "./Education.scss";
import React from "react";

const Education = () => {
  return (
    <section id="Education">
      <div className="container-fluid">
        <h1>Brandeis University</h1>
        <div className="row">
          <h2 className="col-lg-6">Master of Computer Science</h2>
          <h2 className="col-lg-6" style={{ textAlign: "right" }}>
            08/2022 - 05/2024
          </h2>
        </div>
        <br />
        <h3>Relative Courses:</h3>
        <br />
        <div className="row description">
          <div className="col-md-12 col-xl-4 item">
            <h4>Java Programming :</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              placerat enim a erat fringilla, non ullamcorper quam auctor.
              Pellentesque eu rhoncus magna. Cras urna diam, mollis tristique
              orci in, commodo tempor sapien. Vestibulum imperdiet nec felis non
              tincidunt. Praesent semper convallis vulputate. Morbi mollis risus
              non sapien tempor feugiat. In non aliquam felis. Sed diam sapien,
              blandit vitae orci eu, venenatis vestibulum ante. Cras at mi a leo
              consequat mattis. Nunc vestibulum interdum rutrum
            </p>
          </div>
          <div className="col-md-12 col-xl-4 item">
            <h4>Data Structures :</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              placerat enim a erat fringilla, non ullamcorper quam auctor.
              Pellentesque eu rhoncus magna. Cras urna diam, mollis tristique
              orci in, commodo tempor sapien. Vestibulum imperdiet nec felis non
              tincidunt. Praesent semper convallis vulputate. Morbi mollis risus
              non sapien tempor feugiat. In non aliquam felis. Sed diam sapien,
              blandit vitae orci eu, venenatis vestibulum ante. Cras at mi a leo
              consequat mattis. Nunc vestibulum interdum rutrum
            </p>
          </div>
          <div className="col-md-12 col-xl-4 item">
            <h4>Machine Learning :</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              placerat enim a erat fringilla, non ullamcorper quam auctor.
              Pellentesque eu rhoncus magna. Cras urna diam, mollis tristique
              orci in, commodo tempor sapien. Vestibulum imperdiet nec felis non
              tincidunt. Praesent semper convallis vulputate. Morbi mollis risus
              non sapien tempor feugiat. In non aliquam felis. Sed diam sapien,
              blandit vitae orci eu, venenatis vestibulum ante. Cras at mi a leo
              consequat mattis. Nunc vestibulum interdum rutrum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
