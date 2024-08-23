import nextBtn from "../../assets/next-icon.png";
import backBtn from "../../assets/back-icon.png";
import "./Testimonials.css";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const handleForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const handleBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={nextBtn} alt="" className="next-btn" onClick={handleForward} />
      <img src={backBtn} alt="" className="back-btn" onClick={handleBackward} />
      <img src="" alt="" />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://media.istockphoto.com/id/840531052/photo/smiling-businessman-or-worker-standing-in-suit-near-office-building.jpg?s=612x612&w=0&k=20&c=15m58u4P5X-hznFRlhPCI-nGOdZBxqVktfXS1vS98yQ="
                  alt=""
                />
                <div>
                  <h3>Sameer</h3>
                  <span>Odisha,India</span>
                </div>
              </div>
              <p>
                My experience at [College Name] has been nothing short of
                amazing. The faculty here are incredibly supportive, always
                encouraging us to think critically and explore new ideas. The
                diverse range of extracurricular activities has allowed me to
                grow both academically and personally.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8="
                  alt=""
                />
                <div>
                  <h3>Harshita</h3>
                  <span>Delhi,India</span>
                </div>
              </div>
              <p>
                My experience at [College Name] has been nothing short of
                amazing. The faculty here are incredibly supportive, always
                encouraging us to think critically and explore new ideas. The
                diverse range of extracurricular activities has allowed me to
                grow both academically and personally.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://media.istockphoto.com/id/530281621/photo/confident-businessman-in-office.jpg?s=612x612&w=0&k=20&c=zKrgHU2jZIQDK8jCXwxInHg93A4p-cv4Sj-fsDmrR-M="
                  alt=""
                />
                <div>
                  <h3>Vishal</h3>
                  <span>Bihar,India</span>
                </div>
              </div>
              <p>
                My experience at [College Name] has been nothing short of
                amazing. The faculty here are incredibly supportive, always
                encouraging us to think critically and explore new ideas. The
                diverse range of extracurricular activities has allowed me to
                grow both academically and personally.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=612x612&w=0&k=20&c=QuLbOHis00BKOYksMEJhmQulJJmCSrvcIV6StHCivfk="
                  alt=""
                />
                <div>
                  <h3>Nandita</h3>
                  <span>Uttarakhand,India</span>
                </div>
              </div>
              <p>
                My experience at [College Name] has been nothing short of
                amazing. The faculty here are incredibly supportive, always
                encouraging us to think critically and explore new ideas. The
                diverse range of extracurricular activities has allowed me to
                grow both academically and personally.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
