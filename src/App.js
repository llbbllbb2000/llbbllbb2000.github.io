import "./App.css";
import "animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "./components/Title/Title";
import Home from "./components/Home/Home";

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
    </div>
  );
}

export default App;
