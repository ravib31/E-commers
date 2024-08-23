import React from "react";
import "./Programs.css";
import program1 from "../../assets/program-1.jpg";
import program2 from "../../assets/program-2.jpg";
import program3 from "../../assets/program-3.jpg"
import { IoBookSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
        <IoBookSharp className="degree-icons"/>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
        <FaLaptopCode className="degree-icons" />
            <p>Post Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
        <FaPenClip className="degree-icons"/>
            <p>Masters Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
