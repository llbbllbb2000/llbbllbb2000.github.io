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
        <NavLink className="icon home-icon nav-item" to="/">
          <img src={HomeImg} />
        </NavLink>
        <NavLink className="icon about-icon nav-item" to="/about">
          <img src={AboutImg} />
        </NavLink>
        <NavLink className="icon blog-icon nav-item" to="/blog">
          <img src={BlogImg} />
        </NavLink>
        <ul>
          <li className="nav-item">
            <a target="_blank" href="https://linkedin.com/in/zisheng-cai/">
              <img src={LinkedinImg} />
            </a>
          </li>
          <li className="nav-item">
            <a target="_blank" href="https://github.com/llbbllbb2000">
              <img src={GithubImg} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
