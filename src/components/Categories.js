import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Categories = ({ categories, filterItems }) => {
  return (
    <ButtonGroup className="btn-group" aria-label="Basic example" size="lg">
      {categories.map((category, index) => {
        return (
          <Button
            variant="primary"
            key={index}
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default Categories;
