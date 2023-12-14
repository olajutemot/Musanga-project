import React from "react";
import ReactDOM from "react-dom/client";

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
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>MUSANGA FOODS</h1>;
}

function Menu() {
  return (
    <div>
      <img src={menuData[0].photoName} alt="corn" />
      <h4>Raw Corn and Corn Salad</h4>
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
