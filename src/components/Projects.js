import React from "react";
import data from "../data";
import Card from "./Card";

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="project-title">My Projects</h2>
      <div className="grid-container">
        {data.map((item) => {
         return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
