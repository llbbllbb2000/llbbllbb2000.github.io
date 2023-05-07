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
              <ul>
                <li>
                  Understood how to use data structures in Java, such as
                  ArrayList, Stacks, and Queues
                </li>
                <li>
                  Learned OOP Programming, and four concepts, including
                  abstraction, encapsulation, inheritance, and polymorphism
                </li>
                <li>Implemented JUnit to test programming assignments</li>
              </ul>
            </p>
          </div>
          <div className="col-md-12 col-xl-4 item">
            <h4>Data Structures :</h4>
            <p>
              <ul>
                <li>
                  Understood technical principles of several common data
                  structures, such as queue, stack, and linked list.
                </li>
                <li>
                  Leveraged classical algorithms, like Merge sort and Dijkstra,
                  using Java
                </li>
                <li>
                  Achieved a complete AVL tree, including operations of
                  inserting and deleting, and can handle many exceptions, such
                  as deleting a node that doesn't exist or inserting a duplicate
                  node
                </li>
              </ul>
            </p>
          </div>
          <div className="col-md-12 col-xl-4 item">
            <h4>Machine Learning :</h4>
            <p>
              <ul>
                <li>Learned Pytorch and Tensorflow and how to build models.</li>
                <li>
                  Understood the basic ideas of several classical machine
                  learning models, such as convolutional neural network,
                  k-means, autoencoder, and transformer
                </li>
                <li>
                  Studied common metrics for different models, such as accuracy,
                  confusion matrix, F1 score, mean squared/absolute
                  error(MSE/MAE), and so on.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <br /> <br />
        <h1>Dalian University of Technology</h1>
        <div className="row">
          <h2 className="col-lg-6">
            B.E. in Environmental and Ecological Engineering
          </h2>
          <h2 className="col-lg-6" style={{ textAlign: "right" }}>
            09/2018 - 06/2022
          </h2>
        </div>
        <br />
        <h3>Relative Courses:</h3>
        <br />
        <div className="row description">
          <div className="col-md-12 col-xl-4 item">
            <h4>C++ Programming :</h4>
            <p>
              <ul>
                <li>
                  Understood the use of STL in C++, such as unordered_map and
                  vector.
                </li>
                <li>
                  Implemented quick sort and depth-first searching algorithms.
                </li>
                <li>
                  Utilized new features in C++11, like auto and smart pointers
                </li>
              </ul>
            </p>
          </div>
          <div className="col-md-12 col-xl-4 item">
            <h4>Python for Data Analysis :</h4>
            <p>
              <ul>
                <li>
                  Used Python libraries, like numpy and pandas, to do data
                  cleaning and analysis.
                </li>
                <li>
                  Visualized the data distribution using matplotlib and seaborn,
                  and gave reports based on several mathematical metrics.
                </li>
                <li>Connected to MySQL database to do CRUD operations.</li>
              </ul>
            </p>
          </div>
          <div className="col-md-12 col-xl-4 item">
            <h4>Mathematical Modeling with MATLAB :</h4>
            <p>
              <ul>
                <li>
                  Learned basic MATLAB syntax and how to program based on
                  MATLAB.
                </li>
                <li>
                  Devised several models, such as linear programming and dynamic
                  programming, to solve homework problems.
                </li>
                <li>
                  Led a 3-people team to create a model based on the Monte Cario
                  method and binomial distribution, and won first price in a
                  school competition
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
