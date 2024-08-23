import { FaLongArrowAltRight } from "react-icons/fa";
import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../../assets/gallery-2.jpg";
import gallery3 from "../../assets/gallery-3.jpg";
import gallery4 from "../../assets/gallery-4.jpg";
import "./Campus.css";

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt=''/>
            <img src={gallery2} alt=''/>
            <img src={gallery3} alt=''/>
            <img src={gallery4} alt=''/>
        </div>
        <button className='btn btn2'><span>See More <FaLongArrowAltRight className='arrow'/></span></button>
    </div>
  )
}

export default Campus