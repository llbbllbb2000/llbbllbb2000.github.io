import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import HomeImg from "../../assets/images/house-door-fill.svg";
import AboutImg from "../../assets/images/person-fill.svg";
import BlogImg from "../../assets/images/book.svg";
import LinkedinImg from "../../assets/images/linkedin.svg";
import GithubImg from "../../assets/images/github.svg";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav class="nav flex-column">
        <NavLink className="home-icon" to="/">
          <img src={HomeImg} />
        </NavLink>
        <NavLink className="about-icon" to="/about">
          <img src={AboutImg} />
        </NavLink>
        <NavLink className="blog-icon" to="/blog">
          <img src={BlogImg} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" href="https://linkedin.com/in/zisheng-cai/">
            <img src={LinkedinImg} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/llbbllbb2000">
            <img src={GithubImg} />
          </a>
        </li>
      </ul>
    </div>
  );
};  

export default Sidebar;
