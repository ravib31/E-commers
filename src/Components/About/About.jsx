import "./About.css";
import videoImage from "../../assets/videoImage.jpg";
import { IoMdPlayCircle } from "react-icons/io";
import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer"; // Adjust the import path as needed

const About = () => {
  const [playState, setPlayState] = useState(false);

  const handlePlayClick = () => {
    setPlayState(true);
  };

  return (
    <div className="about">
      <div className="about-left">
        {!playState && (
          <>
            <img src={videoImage} alt="University Campus" className="about-img" />
            <IoMdPlayCircle className="play-icon" onClick={handlePlayClick} />
          </>
        )}
        {playState && (
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
        )}
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>National University</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
    </div>
  );
};

export default About;
