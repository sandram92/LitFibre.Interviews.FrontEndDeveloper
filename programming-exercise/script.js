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
// USING REDUCE
// 1.merge both arrays
// 2. loop over the data using reduce
// 3. initilize reduce with objects with totalPrice and totalCalories
// 4.each itaration need to check if the item exist in pasted products
// - if exists in past products we add to total price and to total callories
// - if no return accumulator

//USING FILTER
//1. merge both arrays
//2.filter merged array - each itaration need to check if the item exist in pasted products
//3.initilize totalPrice and totalCalories
//4. add price to totalPrice and add callories to totalCalories

//PROMOTIONS
// loop over promotions
// check if promotion contains bakery and coffee from basket
// if it does remove both items from basket array
// add promotionPrice to total price
// loop over remaining items in basket and add the price

const calculateBasket = (products) => {

  // const bakeryCaffeeProducts = [...bakeryProducts, ...cafeProducts];

  // const basket = bakeryCaffeeProducts.filter((product) => {
  //   return products.includes(product.name);
  // });

  // let totalCalories = basket.reduce((acc, product) => {
  //   acc += product.calories;
  //   return acc;
  // }, 0);

  // let totalPrice = 0;

  // basket.forEach((bas) => {
  //   console.log(bas);

  //   const basValues = Object.values(bas);
  //   console.log(basValues)
  //   promotions.forEach((prom) => {
  //     console.log(prom.applicableFromBakery)
  //     if (
  //       prom.applicableFromBakery.some((r) => basValues.indexOf(r) >= 0) ||
  //       prom.applicableFromCafe.some((r) => basValues.indexOf(r) >= 0)
  //     )

  //      const el1 =  prom.applicableFromBakery.filter(element => basValues.includes(element))
  //      const el2 =  prom.applicableFromCafe.filter(element => basValues.includes(element))
      
  //   });
  // });

  // return { totalCalories, totalPrice };

  // const bakeryCoffeeProducts = [...bakeryProducts, ...cafeProducts];

  // const basket = bakeryCoffeeProducts.filter((product) => {
  //   return products.includes(product.name);
  // });

  // let totalPrice = 0;
  // let totalCalories = 0;

  // basket.forEach((prod) => {
  //   totalPrice += prod.unitPrice;
  //   totalCalories += prod.calories;
  // });

  // return {
  //   totalCalories,
  //   totalPrice,
  // };

  const bakeryCaffeeProducts = [...bakeryProducts, ...cafeProducts]

   const basket = bakeryCaffeeProducts.reduce((acc, product) => {

    if(products.includes(product.name)){
      acc.totalPrice += product.unitPrice
      acc.totalCalories += product.calories
    }
    return acc

  },{ totalPrice:0, totalCalories:0 })

  console.log(basket)

  // JavaScript exercise
  // This function mysteriously got wiped from our online ordering system, and there's no history of it in source control...
  // The function takes an array of product names (see the calls below).
  // It needs to calculate the order total both in terms of price and of calories and return them in an object:
  //
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
console.log(calculateBasket(["brownie", "iced coffee"])); // with promotion - total 3.5

console.log(calculateBasket(["blueberry muffin", "carrot cake"])); // no promotion - total 5.5

console.log(calculateBasket(["savoury muffin", "coffee", "hot chocolate"])); // with promotion - 4

console.log(
  calculateBasket([
    "brownie",
    "carrot cake",
    "sandwich",
    "coffee",
    "coffee",
    "iced coffee",
  ])
); // with promotion - 11.2

console.log(calculateBasket(["sponge", "tea", "savoury muffin", "coffee", "sponge"])); // with promotion -  7.8
