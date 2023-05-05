import React, { useState } from "react";
import leftButton from "./Left-removebg-preview.png";
import rightButton from "./Right-removebg-preview.png";
import picture1 from "./page1.PNG";
import picture2 from "./page2.PNG";
import picture3 from "./page3.PNG";
import styles from "./Main.css";

function Main() {
  const [pictures, setPictures] = useState([picture1, picture2, picture3]);
  const [nextIndex, setNextIndex] = useState(0);

  const rightClick = () => {
    setNextIndex(nextIndex === pictures.length - 1 ? 0 : nextIndex + 1);
  };
  const leftClick = () => {
    setNextIndex(nextIndex === 0 ? pictures.length - 1 : nextIndex - 1);
  };
  return (
    <div>
      <img className="mainPage" src={pictures[nextIndex]}></img>
      <button className="right" onClick={rightClick}>
        <img className="rightButton" src={rightButton}></img>
      </button>
      <button className="left" onClick={leftClick}>
        <img className="leftButton" src={leftButton}></img>
      </button>
    </div>
  );
}

export default Main;
