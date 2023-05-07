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
      </div>
    </section>
  );
};

export default Education;
