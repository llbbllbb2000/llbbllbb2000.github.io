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

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="About" element={<About />} />
    //       <Route path="Blog" element={<Blog />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Title />
      <Home />
      <About />
      <Education />
      <Experience />
      <Future />
      <Footer />
    </div>
  );
}

export default App;
