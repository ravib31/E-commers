import "./About.css";
import videoImage from "../../assets/videoImage.jpg";
import { IoMdPlayCircle } from "react-icons/io";
const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={videoImage} alt="" className="about-img"/>
            <IoMdPlayCircle className="play-icon"/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>National University</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
    </div>
  )
}

export default About