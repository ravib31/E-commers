import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">
        <Programs />
      </div>
    </div>
  );
};

export default App;
