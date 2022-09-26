const bakeryProducts = [
  {
    name: "brownie",
    unitPrice: 3.5,
    calories: 300,
  },
  {
    name: "carrot cake",
    unitPrice: 3.0,
    calories: 100,
  },
  {
    name: "sponge",
    unitPrice: 2.5,
    calories: 120,
  },
  {
    name: "blueberry muffin",
    unitPrice: 2.5,
    calories: 170,
  },
  {
    name: "toast",
    unitPrice: 1.0,
    calories: 50,
  },
  {
    name: "savoury muffin",
    unitPrice: 1.5,
    calories: 70,
  },
  {
    name: "sandwich",
    unitPrice: 1.9,
    calories: 60,
  },
];

const cafeProducts = [
  {
    name: "tea",
    unitPrice: 1.0,
    calories: 20,
  },
  {
    name: "coffee",
    unitPrice: 1.5,
    calories: 20,
  },
  {
    name: "iced coffee",
    unitPrice: 2.3,
    calories: 50,
  },
  {
    name: "hot chocolate",
    unitPrice: 2.0,
    calories: 100,
  },
];

const promotions = [
  {
    name: "breakfast to go",
    applicableFromBakery: ["toast", "savoury muffin"],
    applicableFromCafe: ["tea", "coffee"],
    promotionPrice: 1.8,
  },
  {
    name: "elevenses",
    applicableFromBakery: [
      "brownie",
      "carrot cake",
      "sponge",
      "blueberry muffin",
    ],
    applicableFromCafe: ["tea", "coffee", "iced coffee", "hot chocolate"],
    promotionPrice: 3.5,
  },
  {
    name: "winter special",
    applicableFromBakery: ["savoury muffin"],
    applicableFromCafe: ["hot chocolate"],
    promotionPrice: 2.5,
  },
];

const calculateBasket = (products) => {
  // JavaScript exercise
  // This function mysteriously got wiped from our online ordering system, and there's no history of it in source control...
  // The function takes an array of product names (see the calls below).
  // It needs to calculate the order total both in terms of price and of calories and return them in an object:
  // {
  //     totalPrice: ???,
  //     totalCalories: ???
  // }
  // The bakeryProducts and cafeProducts arrays contain all the details you'll need about the business' products (pretend the data is from a database or REST API).
  //
  // For extra points, check if any promotions (from the promotions array) can be applied, based on the products that are passed in, and reflect any change in total price.
  // Promotions should override the price of a pair of products,
  // where one of the products is found in the "applicableFromBakery" array and the other is found in the "applicableFromCafe" array.
  // Example:
  // products = ["toast", "tea", "blueberry muffin"]
  // totalPrice would normally be 1.0 (toast) + 1.0 (tea) + 2.5 (muffin) = 4.5
  // With the "breakfast to go" promotion, we can override the cost of the tea and toast with 1.8:
  // totalPrice becomes 1.8 (toast + tea promotion) + 2.5 (muffin) = 4.3
  //
  // A basic implementation could search for valid pairs of products and apply promotions in the order that it finds them
  // A more advanced version could calculate the ideal promotions to apply, resulting in the lowest possible total
  //
  // Do as little or as much as you feel like of this exercise, the point isn't to pass/fail your JavaScript skills,
  // but to see how you go about using the language and how you approach solving a given problem
};

// Exercise output (don't change anything of these but feel free to add more tests)
console.log(calculateBasket(["brownie", "iced coffee"]));

console.log(calculateBasket(["blueberry muffin", "carrot cake"]));

console.log(calculateBasket(["savoury muffin", "coffee", "hot chocolate"]));

console.log(
  calculateBasket([
    "brownie",
    "carrot cake",
    "sandwich",
    "coffee",
    "coffee",
    "iced coffee",
  ])
);

console.log(
  calculateBasket(["sponge", "tea", "savoury muffin", "coffee", "sponge"])
);
