import "./App.css";
import "animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
