import React from "react";

function about() {
  return (
    <div id="about">
      <h2>ABOUT ME</h2>
      <hr />
      <p className="about-text">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="about-container">
        <div className="know-me">
          <h3>Get to Know Me</h3>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <button className="contact-btn btn btn-primary btn-lg">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
        <div className="my-skills">
          <h3>My Skills</h3>
          <div className="skills-container">
            <div className="item">HTML</div>
            <div className="item">CSS</div>
            <div className="item">JavaScript</div>
            <div className="item">React</div>
            <div className="item">SASS</div>
            <div className="item">Bootstrap</div>
            <div className="item">Responsive Design</div>
            <div className="item">GIT/Github</div>
            {/* <div className="item">Node.js</div>
            <div className="item">Express</div>
            <div className="item">SQL</div>
            <div className="item">MongoDB</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
