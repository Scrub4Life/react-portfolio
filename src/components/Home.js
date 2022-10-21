import React from "react";
// image
import pic from '../images/job1-res.jpg'

const Home = () => {
  return (
    <div id="home">
      <img src={pic} alt="Avery Blake" />
      <h1>Hello, I'm Avery</h1>
      <p>
        a <span>Web Developer!</span>
      </p>
    </div>
  );
};

export default Home;
