
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";

import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">

        <Title subTitle="Our Program" title="What We Offer" />

        <Title/>

        <Programs />
        <About/>
        <Title subTitle="Gallery" title="Campus Click" />
        <Campus/>
        <Title subTitle="Testimonials" title="What Our Students Says" />
        <Testimonials/>
        <Title subTitle="Contact US" title="Get In Touch" />
        <Contact/>
      </div>
    </div>
  );
};

export default App;
