import React, { useEffect, useState } from "react";


const Delayed = (props) => {
  const [hidden, sethidden] = useState(true);
  
  console.log(props)

  useEffect(() => {
    setTimeout(() => {
      sethidden(false);
    }, props.waitTime);
  }, [hidden]);

  return <>{hidden ? <></> : props.children}</>;
};

export default Delayed;
