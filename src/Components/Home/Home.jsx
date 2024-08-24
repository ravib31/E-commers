import "./Home.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home container">
      <div className="home-text">
        <h1>Empowering Minds, Shaping Futures</h1>
        <p>
          Inspiring Excellence, Fostering Innovation, and Preparing Tomorrow's
          Leaders for a Changing World.
        </p>

        <button className="btn btn2">
          <span>
            Explore More <FaLongArrowAltRight className="arrow" />
          </span>{" "}
        </button>

        <button className="btn">
          Explore More <FaLongArrowAltRight className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Home;
