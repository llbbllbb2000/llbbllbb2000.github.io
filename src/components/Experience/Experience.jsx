import "./Experience.scss";
import Resume from "../../assets/files/Zisheng_Cai_resume.pdf";
import { Col, Nav, Row, Tab } from "react-bootstrap";

const Experience = () => {
  return (
    <section id="Experience">
      <div className="container-fluid">
        <h2>Internship Experience</h2>
        <hr />
        <br />
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col md={3}>
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey="first">Brandeis</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">XPeng</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Fengyun</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Design Inst</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h4>Intern, Autonomous Driving Center</h4>
                  <p style={{ display: "flex", justifyContent: "end" }}>
                    12/2021 - 05/2022
                  </p>
                  <ul>
                    <li>
                      Built a website API using Python Django and PostgreSQL as
                      the backend database
                    </li>
                    <li>
                      Created API wrappers in multiple programming languages,
                      including Python, R, and Perl
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h4>Intern, Autonomous Driving Center</h4>
                  <p style={{ display: "flex", justifyContent: "end" }}>
                    12/2021 - 05/2022
                  </p>
                  <ul>
                    <li>
                      Utilized Python to process and visualize a substantial
                      dataset comprising 20 million data points to analyze
                      algorithm performance across more than 10 diverse
                      scenarios, providing valuable insights and optimizations.
                    </li>
                    <li>
                      Designed the database structure for a groundbreaking
                      parking algorithm using a NoSQL JSON database, playing a
                      crucial role in supporting subsequent algorithm
                      enhancements and optimizations.
                    </li>
                    <li>
                       Applied Dijkstra and A* to optimize autonomous parking
                      routes, ensuring the most efficient and shortest paths are
                      identified.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h4>Data Analyst Intern</h4>
                  <p style={{ display: "flex", justifyContent: "end" }}>
                    07/2021 - 11/2021
                  </p>
                  <ul>
                    <li>
                      Collected routine data by SQL, with Python and R to clean,
                      summarize and analyze data of chemical indicators,
                      filtered abnormal data by statistical methods in SPSS to
                      identify possible issues, and send daily data analysis
                      reports
                    </li>
                    <li>
                      Implemented clustering algorithms like K-means to classify
                      water quality data from different sewage plants and
                      summarized similarities and differences among those
                      plants.
                    </li>
                    <li>
                      Communicated with environmental engineers about the result
                      of K-means and helped prioritize future tasks.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h4>Intern</h4>
                  <p style={{ display: "flex", justifyContent: "end" }}>
                    01/2021 - 02/2021
                  </p>
                  <ul>
                    <li>
                      Studied AutoCAD drawings to understand the distribution of
                      Dongguan city sewage lines, and made modifications to
                      drawings.
                    </li>
                    <li>
                      Conducted data analysis and identified problems occurred
                      based on location and level of water pollution.
                    </li>
                    <li>
                      Predicted pollution levels based on history data, weather
                      change, and population profile; summarized analysis and
                      prediction results, and gave suggestions to decision
                      makers
                    </li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </section>
  );
};

export default Experience;

/*
<h1>XPeng Motors</h1>
        <div className="row">
          <h2 className="col-lg-6">Intern, Autonomous Driving Center</h2>
          <h2 className="col-lg-6" style={{ textAlign: "right" }}>
            12/2021 - 05/2022
          </h2>
        </div>
        <ul>
          <li>
            Processed and visualized about 20 million pieces of data to analyze
            the performances of the algorithm in over 10 different situations by
            Python.
          </li>
          <li>
            Leveraged algorithms, such as Dijkstra and A*, to help find the
            shortest way of autonomous parking.
          </li>
          <li>
            Discovered that the data generated by the new parking algorithm did
            not fit the key-value pairs like SQL, and applied NoSQL to store and
            analyze data, which reduced about 20% running time of data searching
          </li>
          <li>
            Collaborated with the testing department and driving center to
            access the new algorithm outcomes and negotiate the weakness of the
            new parking algorithm.
          </li>
        </ul>
        <h1>Fengyun IOT Technology Ltd</h1>
        <div className="row">
          <h2 className="col-lg-6">Data Analyst Intern</h2>
          <h2 className="col-lg-6" style={{ textAlign: "right" }}>
            07/2021 - 11/2021
          </h2>
        </div>
        <ul>
          <li>
            Collected routine data by SQL, with Python and R to clean, summarize
            and analyze data of chemical indicators, filtered abnormal data by
            statistical methods in SPSS to identify possible issues, and send
            daily data analysis reports
          </li>
          <li>
            Implemented clustering algorithms like K-means to classify water
            quality data from different sewage plants and summarized
            similarities and differences among those plants.
          </li>
          <li>
            Communicated with environmental engineers about the result of
            K-means and helped prioritize future tasks.
          </li>
        </ul>
        <br />

        <a className="btn btn-lg btn-outline-dark" href={Resume}>
            Download CV
        </a>
        
        {/* This code can view the resume online
        <form method="get" action={Resume}>
          <button type="submit" class="btn btn-lg btn-outline-dark">
            Download CV
          </button>
        </form> 
        */
