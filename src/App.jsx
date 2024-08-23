
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
<<<<<<< HEAD
import Testimonials from "./Components/Testimonials/Testimonials";
=======
>>>>>>> 31be54648b9e48cf3f4c49815452152a8fe311c0
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">
<<<<<<< HEAD
        <Title subTitle="Our Program" title="What We Offer" />
=======
        <Title/>
>>>>>>> 31be54648b9e48cf3f4c49815452152a8fe311c0
        <Programs />
        <About/>
        <Title subTitle="Gallery" title="Campus Click" />
        <Campus/>
        <Title subTitle="Testimonials" title="What Our Students Says" />
        <Testimonials/>
      </div>
    </div>
  );
};

export default App;
