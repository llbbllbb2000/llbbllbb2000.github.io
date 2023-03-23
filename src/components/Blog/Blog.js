import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import "./Blog.scss";

const Blog = () => {
  const [loadingClass, setLoadingClass] = useState(false);
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    if (loadingClass) {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    } else {
      setTimeout(() => {
        setLoadingClass(true);
      }, 2000);
    }
  });

  return (<>
    {loadingClass? (
        <></>
    ) : (
        <Loading />
    )}
  </>);
};

export default Blog;
