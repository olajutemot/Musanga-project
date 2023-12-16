import React from "react";
import Menu from "./Menu";

const menuData = [
  {
    name: "Corn",
    ingredients: "Raw Corn and Corn Salad",
    price: 6,
    photoName: "menu/corn.jpg",
    soldOut: false,
  },
  {
    name: "Fried Rice",
    ingredients: "Green Peas and Sweet Corn",
    price: 10,
    photoName: "menu/fried_rice.jpg",
    soldOut: false,
  },
  {
    name: "Jollof Rice",
    ingredients: "Tomatoes and Jollof Spice",
    price: 12,
    photoName: "menu/jollof_rice.jpg",
    soldOut: false,
  },
  {
    name: "Margherrita",
    ingredients: "Tomatoes and onion",
    price: 12,
    photoName: "menu/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Plantain",
    ingredients: "Plantain and Stew ",
    price: 15,
    photoName: "menu/plantain.jpg",
    soldOut: true,
  },
  {
    name: "Rice",
    ingredients: "Rice and Stew",
    price: 18,
    photoName: "menu/rice.jpg",
    soldOut: false,
  },
];
const Menus = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="foods">
        {menuData.length === 0 ? (
          <p>Hey, There is no food on ground</p>
        ) : (
          menuData.map((food) => <Menu foodObject={food} key={food.name} />)
        )}
      </ul>
    </div>
  );
};

export default Menus;
