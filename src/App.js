import "./App.css";
import "animate.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "./components/Title/Title";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Future from "./components/Future/Future";
import Delayed from "./components/Delayed/Delayed";

function App() {
  return (
    <div>
      <Delayed waitTime={3500}>
        <Title />
      </Delayed>
      <Home />
      <Delayed waitTime={4000}>
        <About />
        <Education />
        <Experience />
        <Future />
        <Footer />
      </Delayed>
    </div>
  );
}

export default App;
