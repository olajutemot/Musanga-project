import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menus />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>MUSANGA FOODS</h1>
    </header>
  );
}
function Menus() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Menu photoName="menu/corn.jpg" ingredients="Raw Corn and Corn Salad" />
      <Menu
        photoName="menu/fried_rice.jpg"
        ingredients="Green Peas and Sweet Corn"
      />
      <Menu
        photoName="menu/jollof_rice.jpg"
        ingredients="Tomatoes and Jollof Spice"
      />
    </div>
  );
}
function Menu(props) {
  return (
    <div>
      <img src={props.photoName} alt="corn" />
      <h4>{props.ingredients}</h4>
    </div>
  );
}
function Footer() {
  return <p>We are happy to welcome you at 12:00 to 22:00.</p>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
