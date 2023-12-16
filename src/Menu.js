import React from "react";

const Menu = ({ foodObject }) => {
  return (
    <li className="food">
      <img src={foodObject.photoName} alt="corn" />
      <div>
        <h3>{foodObject.name} </h3>
        <p>{foodObject.ingredients}</p>
        <span>{foodObject.price} </span>
      </div>
    </li>
  );
};

export default Menu;
