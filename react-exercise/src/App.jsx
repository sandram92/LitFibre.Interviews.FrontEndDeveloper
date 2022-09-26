import ProductTile from "./components/ProductTile";
import "./App.css";

const products = [
  {
    name: "Brownie",
    price: "£3.50",
    image: "./images/brownies.jpg",
  },
  {
    name: "Carrot cake",
    price: "£3.00",
    image: "./images/carrot cake.jpg",
  },
  {
    name: "Sponge",
    price: "£2.50",
    image: "./images/sponge.jpg",
  },
  {
    name: "Blueberry muffin",
    price: "£2.50",
    image: "./images/blueberry muffin.jpg",
  },
  {
    name: "Toast",
    price: "£1.00",
    image: "./images/toast.jpg",
  },
  {
    name: "Savoury muffin",
    price: "£1.50",
    image: "./images/savoury muffin.jpg",
  },
  {
    name: "Sandwich",
    price: "£1.90",
    image: "./images/sandwich.jpg",
  },
  {
    name: "Tea",
    price: "£1.00",
    image: "./images/tea.jpg",
  },
  {
    name: "Coffee",
    price: "£1.50",
    image: "./images/coffee.jpg",
  },
  {
    name: "Iced coffee",
    price: "£2.30",
    image: "./images/iced coffee.jpg",
  },
  {
    name: "Hot chocolate",
    price: "£2.00",
    image: "./images/hot chocolate.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <ProductTile
        productName="Brownie"
        productPrice="£3.50"
        productImageSrc="./images/brownies.jpg"
      />
      <ProductTile
        productName="Coffee"
        productPrice="£1.50"
        productImageSrc="./images/coffee.jpg"
      />
      <ProductTile
        productName="Toast"
        productPrice="£1.00"
        productImageSrc="./images/toast.jpg"
      />
    </div>
  );
}

export default App;
