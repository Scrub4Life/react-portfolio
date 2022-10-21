import React, { useState } from "react";
// data
import data from "../data";
// components
import Card from "./Card";
import Categories from "./Categories";

const Projects = () => {
  // getting the unique categories from my data file, using the 'Set' function
  const allCategories = ["All", ...new Set(data.map((item) => item.category))];

  const [arr, setArr] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    // setting menu back to original array if the category is set to 'all
    if (category === "All") {
      setArr(data);
      return;
    }
    // filtering the menu for only items of a certian category
    const newItems = data.filter((item) => item.category === category);
    setArr(newItems);
  };

  return (
    <div id="projects">
      <h2 className="project-title">Projects</h2>
      <hr />
      <Categories categories={categories} filterItems={filterItems} />
      <Card items={arr} />
    </div>
  );
};

export default Projects;
