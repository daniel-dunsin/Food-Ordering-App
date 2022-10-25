//BURGER
import burger1 from "./assets/images/burger1.png";
import burger2 from "./assets/images/burger2.png";
import burger3 from "./assets/images/burger3.png";
import burger4 from "./assets/images/burger4.png";
import burger5 from "./assets/images/burger5.png";
import burger6 from "./assets/images/burger6.png";

// CHICKEN
import chicken1 from "./assets/images/chicken1.png";
import chicken2 from "./assets/images/chicken2.png";
import chicken3 from "./assets/images/chicken3.png";
import chicken4 from "./assets/images/chicken4.png";
import chicken5 from "./assets/images/chicken5.png";
import chicken6 from "./assets/images/chicken6.png";

// DRINK
import drink1 from "./assets/images/drink1.png";
import drink2 from "./assets/images/drink2.png";
import drink3 from "./assets/images/drink3.png";
import drink4 from "./assets/images/drink4.png";
import drink5 from "./assets/images/drink5.png";
import drink6 from "./assets/images/drink6.png";
import drink7 from "./assets/images/drink7.png";
import drink8 from "./assets/images/drink8.png";

//FISH
import fish1 from "./assets/images/fish1.png";
import fish2 from "./assets/images/fish2.png";
import fish3 from "./assets/images/fish3.png";
import fish4 from "./assets/images/fish4.png";

// fruit
import fruit1 from "./assets/images/fruit1.png";
import fruit2 from "./assets/images/fruit2.png";
import fruit3 from "./assets/images/fruit3.png";
import fruit4 from "./assets/images/fruit4.png";
import fruit5 from "./assets/images/fruit5.png";
import fruit6 from "./assets/images/fruit6.png";
import fruit7 from "./assets/images/fruit7.png";
import fruit8 from "./assets/images/fruit8.png";
import fruit9 from "./assets/images/fruit9.png";
import fruit10 from "./assets/images/fruit10.png";
import fruit11 from "./assets/images/fruit11.png";

//HOT DOG
import hotdog1 from "./assets/images/hdog1.png";
import hotdog2 from "./assets/images/hdog2.png";
import hotdog3 from "./assets/images/hdog3.png";
import hotdog4 from "./assets/images/hdog4.png";
import hotdog5 from "./assets/images/hdog5.png";
import hotdog6 from "./assets/images/hdog6.png";

// ICE CREAM
import snack1 from "./assets/images/i1.png";
import snack2 from "./assets/images/i2.png";
import snack3 from "./assets/images/i3.png";
import snack4 from "./assets/images/i4.png";
import snack5 from "./assets/images/i5.png";
import snack6 from "./assets/images/i6.png";
import snack7 from "./assets/images/i7.png";

//PIZZA
import pizza1 from "./assets/images/pizza1.png";
import pizza2 from "./assets/images/pizza2.png";
import pizza3 from "./assets/images/pizza3.png";
import pizza4 from "./assets/images/pizza4.png";
import pizza5 from "./assets/images/pizza5.png";
import pizza6 from "./assets/images/pizza6.png";

//RICE
import rice1 from "./assets/images/rice1.png";
import rice2 from "./assets/images/rice2.png";
import rice3 from "./assets/images/rice3.png";
import rice4 from "./assets/images/rice4.png";
import rice5 from "./assets/images/rice5.png";

// SOUP
import soup1 from "./assets/images/soup1.png";
import soup2 from "./assets/images/soup2.png";
import soup3 from "./assets/images/soup3.png";
import soup4 from "./assets/images/soup4.png";
import soup5 from "./assets/images/soup5.png";
import soup6 from "./assets/images/soup6.png";

// TACO
import taco1 from "./assets/images/taco1.png";
import taco2 from "./assets/images/taco2.png";
import taco3 from "./assets/images/taco3.png";
import taco4 from "./assets/images/taco4.png";
import taco5 from "./assets/images/taco5.png";
import taco6 from "./assets/images/taco6.png";
import { IData, IMenuItems } from "../type/interfaces";

const MenuItems: IMenuItems[] = [
  {
    id: 1,
    itemId: "burger",
    name: "Burger",
    imgSrc: burger3,
  },
  {
    id: 2,
    itemId: "pizza",
    name: "Pizza",
    imgSrc: pizza2,
  },
  {
    id: 3,
    itemId: "hotdog",
    name: "Hotdog",
    imgSrc: hotdog1,
  },
  {
    id: 4,
    itemId: "taco",
    name: "Taco",
    imgSrc: taco1,
  },
  {
    id: 5,
    itemId: "snack",
    name: "Snack",
    imgSrc: snack1,
  },
  {
    id: 6,
    itemId: "drink",
    name: "Drink",
    imgSrc: drink1,
  },
  {
    id: 7,
    itemId: "chicken",
    name: "Chicken",
    imgSrc: chicken4,
  },
  {
    id: 8,
    itemId: "soup",
    name: "Soup",
    imgSrc: soup1,
  },
  {
    id: 9,
    itemId: "rice",
    name: "Rice",
    imgSrc: rice5,
  },
  {
    id: 10,
    itemId: "fruit",
    name: "Fruit",
    imgSrc: fruit11,
  },
  {
    id: 11,
    itemId: "fish",
    name: "Fish",
    imgSrc: fish2,
  },
];

const Items: IData[] = [
  {
    id: 1,
    itemId: "burger",
    imgSrc: burger1,
    name: "Burger Bistro",
    ratings: 5,
    price: 7.5,
  },
  {
    id: 2,
    itemId: "burger",
    imgSrc: burger2,
    name: "Smokin' Burger",
    ratings: 5,
    price: 12,
  },
  {
    id: 3,
    itemId: "burger",
    imgSrc: burger3,
    name: "Euphoria Burger",
    ratings: 5,
    price: 12,
  },
  {
    id: 4,
    itemId: "burger",
    imgSrc: burger4,
    name: "Sassy Burger",
    ratings: 5,
    price: 12,
  },
  {
    id: 5,
    itemId: "burger",
    imgSrc: burger5,
    name: "Jazz Burger",
    ratings: 5,
    price: 12,
  },
  {
    id: 6,
    itemId: "burger",
    imgSrc: burger6,
    name: "Healthy Buns",
    ratings: 5,
    price: 12,
  },
  {
    id: 7,
    itemId: "pizza",
    imgSrc: pizza1,
    name: "Margherita",
    ratings: 5,
    price: 12,
  },
  {
    id: 8,
    itemId: "pizza",
    imgSrc: pizza2,
    name: "Peppy Paneer",
    ratings: 5,
    price: 12,
  },
  {
    id: 9,
    itemId: "pizza",
    imgSrc: pizza3,
    name: "Double Cheese",
    ratings: 5,
    price: 12,
  },
  {
    id: 10,
    itemId: "pizza",
    imgSrc: pizza4,
    name: "Farm House",
    ratings: 4,
    price: 12,
  },
  {
    id: 11,
    itemId: "pizza",
    imgSrc: pizza5,
    name: "Veg Extrava",
    ratings: 4,
    price: 12,
  },
  {
    id: 12,
    itemId: "pizza",
    imgSrc: pizza6,
    name: "Deluxe Veggie",
    ratings: 4,
    price: 12,
  },
  {
    id: 13,
    itemId: "hotdog",
    imgSrc: hotdog1,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 14,
    itemId: "hotdog",
    imgSrc: hotdog2,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 15,
    itemId: "hotdog",
    imgSrc: hotdog3,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 16,
    itemId: "hotdog",
    imgSrc: hotdog4,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 17,
    itemId: "hotdog",
    imgSrc: hotdog5,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 18,
    itemId: "hotdog",
    imgSrc: hotdog6,
    name: "Hot Dog",
    ratings: 3,
    price: 12,
  },
  {
    id: 19,
    itemId: "taco",
    imgSrc: taco1,
    name: "Taco",
    ratings: 3,
    price: 7.5,
  },
  {
    id: 20,
    itemId: "taco",
    imgSrc: taco2,
    name: "Taco",
    ratings: 3,
    price: 7.5,
  },
  {
    id: 21,
    itemId: "taco",
    imgSrc: taco3,
    name: "Taco",
    ratings: 3,
    price: 7.5,
  },
  {
    id: 22,
    itemId: "taco",
    imgSrc: taco4,
    name: "Taco",
    ratings: 3,
    price: 9,
  },
  {
    id: 23,
    itemId: "taco",
    imgSrc: taco5,
    name: "Taco",
    ratings: 3,
    price: 9,
  },
  {
    id: 24,
    itemId: "taco",
    imgSrc: taco6,
    name: "Taco",
    ratings: 3,
    price: 9,
  },
  {
    id: 25,
    itemId: "snack",
    imgSrc: snack1,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 26,
    itemId: "snack",
    imgSrc: snack2,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 27,
    itemId: "snack",
    imgSrc: snack3,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 28,
    itemId: "snack",
    imgSrc: snack4,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 29,
    itemId: "snack",
    imgSrc: snack5,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 30,
    itemId: "snack",
    imgSrc: snack6,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 31,
    itemId: "drink",
    imgSrc: drink1,
    name: "Red Bull",
    ratings: 4,
    price: 9,
  },
  {
    id: 32,
    itemId: "drink",
    imgSrc: drink2,
    name: "Pepsi",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 33,
    itemId: "drink",
    imgSrc: drink3,
    name: "Monster Energy",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 34,
    itemId: "drink",
    imgSrc: drink4,
    name: "Soft Drinks",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 35,
    itemId: "drink",
    imgSrc: drink5,
    name: "Sprite",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 36,
    itemId: "drink",
    imgSrc: drink6,
    name: "Fanta",
    ratings: 4,
    price: 7.5,
  },

  {
    id: 41,
    itemId: "burger",
    imgSrc: burger1,
    name: "Burger Bistro",
    ratings: 5,
    price: 7.5,
  },
  {
    id: 42,
    itemId: "burger",
    imgSrc: burger2,
    name: "Smokin' Burger",
    ratings: 5,
    price: 12,
  },
  {
    id: 43,
    itemId: "burger",
    imgSrc: burger3,
    name: "Euphoria Burger",
    ratings: 5,
    price: 12,
  },
  {
    id: 44,
    itemId: "burger",
    imgSrc: burger4,
    name: "Sassy Burger",
    ratings: 5,
    price: 12,
  },
  {
    id: 45,
    itemId: "burger",
    imgSrc: burger5,
    name: "Jazz Burger",
    ratings: 5,
    price: 12,
  },
  {
    id: 46,
    itemId: "burger",
    imgSrc: burger6,
    name: "Healthy Buns",
    ratings: 5,
    price: 12,
  },
  {
    id: 47,
    itemId: "pizza",
    imgSrc: pizza1,
    name: "Margherita",
    ratings: 5,
    price: 12,
  },
  {
    id: 48,
    itemId: "pizza",
    imgSrc: pizza2,
    name: "Peppy Paneer",
    ratings: 5,
    price: 12,
  },
  {
    id: 49,
    itemId: "pizza",
    imgSrc: pizza3,
    name: "Double Cheese",
    ratings: 5,
    price: 12,
  },
  {
    id: 50,
    itemId: "pizza",
    imgSrc: pizza4,
    name: "Farm House",
    ratings: 4,
    price: 12,
  },
  {
    id: 51,
    itemId: "pizza",
    imgSrc: pizza5,
    name: "Veg Extrava",
    ratings: 4,
    price: 12,
  },
  {
    id: 52,
    itemId: "pizza",
    imgSrc: pizza6,
    name: "Deluxe Veggie",
    ratings: 4,
    price: 12,
  },
  {
    id: 53,
    itemId: "hotdog",
    imgSrc: hotdog1,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 54,
    itemId: "hotdog",
    imgSrc: hotdog2,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 55,
    itemId: "hotdog",
    imgSrc: hotdog3,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 56,
    itemId: "hotdog",
    imgSrc: hotdog4,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 57,
    itemId: "hotdog",
    imgSrc: hotdog5,
    name: "Hot Dog",
    ratings: 4,
    price: 12,
  },
  {
    id: 58,
    itemId: "hotdog",
    imgSrc: hotdog6,
    name: "Hot Dog",
    ratings: 3,
    price: 12,
  },
  {
    id: 59,
    itemId: "taco",
    imgSrc: taco1,
    name: "Taco",
    ratings: 3,
    price: 7.5,
  },
  {
    id: 60,
    itemId: "taco",
    imgSrc: taco2,
    name: "Taco",
    ratings: 3,
    price: 7.5,
  },
  {
    id: 61,
    itemId: "taco",
    imgSrc: taco3,
    name: "Taco",
    ratings: 3,
    price: 7.5,
  },
  {
    id: 62,
    itemId: "taco",
    imgSrc: taco4,
    name: "Taco",
    ratings: 3,
    price: 9,
  },
  {
    id: 63,
    itemId: "taco",
    imgSrc: taco5,
    name: "Taco",
    ratings: 3,
    price: 9,
  },
  {
    id: 64,
    itemId: "taco",
    imgSrc: taco6,
    name: "Taco",
    ratings: 3,
    price: 9,
  },
  {
    id: 65,
    itemId: "snack",
    imgSrc: snack1,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 66,
    itemId: "snack",
    imgSrc: snack2,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 67,
    itemId: "snack",
    imgSrc: snack3,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 68,
    itemId: "snack",
    imgSrc: snack4,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 69,
    itemId: "snack",
    imgSrc: snack5,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 70,
    itemId: "snack",
    imgSrc: snack6,
    name: "Snack",
    ratings: 4,
    price: 9,
  },
  {
    id: 71,
    itemId: "drink",
    imgSrc: drink1,
    name: "Soft Drinks",
    ratings: 4,
    price: 9,
  },
  {
    id: 72,
    itemId: "drink",
    imgSrc: drink2,
    name: "Soft Drinks",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 73,
    itemId: "drink",
    imgSrc: drink3,
    name: "Soft Drinks",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 74,
    itemId: "drink",
    imgSrc: drink4,
    name: "Soft Drinks",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 75,
    itemId: "drink",
    imgSrc: drink5,
    name: "Soft Drinks",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 76,
    itemId: "drink",
    imgSrc: drink6,
    name: "Soft Drinks",
    ratings: 4,
    price: 7.5,
  },
  {
    id: 77,
    itemId: "chicken",
    imgSrc: chicken1,
    name: "Fried Chicken",
    ratings: 3,
    price: 10,
  },
  {
    id: 78,
    itemId: "chicken",
    imgSrc: chicken2,
    name: "Smoked Chicken",
    ratings: 5,
    price: 15,
  },
  {
    id: 79,
    itemId: "chicken",
    imgSrc: chicken3,
    name: "Chicken",
    ratings: 4,
    price: 4,
  },
  {
    id: 80,
    itemId: "chicken",
    imgSrc: chicken4,
    name: "Fried Chicken",
    ratings: 2,
    price: 12,
  },
  {
    id: 81,
    itemId: "chicken",
    imgSrc: chicken5,
    name: "Chicken",
    ratings: 5,
    price: 8,
  },
  {
    id: 82,
    itemId: "chicken",
    imgSrc: chicken6,
    name: "Fried Chicken",
    ratings: 4,
    price: 7,
  },
  {
    id: 83,
    itemId: "drink",
    imgSrc: drink7,
    name: "Chilled Juice",
    ratings: 3,
    price: 10,
  },
  {
    id: 84,
    itemId: "drink",
    imgSrc: drink8,
    name: "Coca-Cola",
    ratings: 5,
    price: 11,
  },
  {
    id: 85,
    itemId: "fish",
    imgSrc: fish1,
    name: "Fried Fish",
    ratings: 4,
    price: 5,
  },
  {
    id: 86,
    itemId: "fish",
    imgSrc: fish2,
    name: "Grilled Fish",
    ratings: 3,
    price: 7,
  },
  {
    id: 87,
    itemId: "fish",
    imgSrc: fish3,
    name: "Fried Fish",
    ratings: 5,
    price: 6,
  },
  {
    id: 88,
    itemId: "fish",
    imgSrc: fish4,
    name: "Fish",
    ratings: 2,
    price: 4,
  },
  {
    id: 89,
    itemId: "fruit",
    imgSrc: fruit1,
    name: "Strawberry",
    ratings: 4,
    price: 8,
  },
  {
    id: 90,
    itemId: "fruit",
    imgSrc: fruit2,
    name: "Pineapple",
    ratings: 4,
    price: 9,
  },
  {
    id: 91,
    itemId: "fruit",
    imgSrc: fruit3,
    name: "Blackberry",
    ratings: 5,
    price: 10,
  },
  {
    id: 92,
    itemId: "fruit",
    imgSrc: fruit4,
    name: "Grape",
    ratings: 3,
    price: 7,
  },
  {
    id: 93,
    itemId: "fruit",
    imgSrc: fruit5,
    name: "Strawberry",
    ratings: 4,
    price: 10,
  },
  {
    id: 84,
    itemId: "fruit",
    imgSrc: fruit6,
    name: "Raspberry",
    ratings: 4,
    price: 10,
  },
  {
    id: 85,
    itemId: "fruit",
    imgSrc: fruit7,
    name: "Strawberry",
    ratings: 5,
    price: 7,
  },
  {
    id: 86,
    itemId: "fruit",
    imgSrc: fruit8,
    name: "Cherry",
    ratings: 3,
    price: 3,
  },
  {
    id: 87,
    itemId: "fruit",
    imgSrc: fruit9,
    name: "Banana",
    ratings: 3,
    price: 5,
  },
  {
    id: 88,
    itemId: "fruit",
    imgSrc: fruit10,
    name: "Watermelon",
    ratings: 4,
    price: 9,
  },
  {
    id: 89,
    itemId: "fruit",
    imgSrc: fruit11,
    name: "Mixed Fruits",
    ratings: 3,
    price: 20,
  },
  {
    id: 90,
    itemId: "rice",
    imgSrc: rice1,
    name: "White Rice",
    ratings: 4,
    price: 9,
  },
  {
    id: 91,
    itemId: "rice",
    imgSrc: rice2,
    name: "Rice & Chicken",
    ratings: 5,
    price: 7,
  },
  {
    id: 92,
    itemId: "rice",
    imgSrc: rice3,
    name: "Jollof Rice",
    ratings: 5,
    price: 11,
  },
  {
    id: 93,
    itemId: "rice",
    imgSrc: rice4,
    name: "White Rice",
    ratings: 5,
    price: 11,
  },
  {
    id: 94,
    itemId: "rice",
    imgSrc: rice5,
    name: "White Rice",
    ratings: 4,
    price: 10,
  },
  {
    id: 95,
    itemId: "snack",
    imgSrc: snack7,
    name: "Jelato",
    ratings: 4,
    price: 8,
  },
  {
    id: 96,
    itemId: "soup",
    imgSrc: soup1,
    name: "Soup",
    ratings: 2,
    price: 6.2,
  },
  {
    id: 97,
    itemId: "soup",
    imgSrc: soup2,
    name: "Soup",
    ratings: 3,
    price: 7,
  },
  {
    id: 98,
    itemId: "soup",
    imgSrc: soup3,
    name: "Soup",
    ratings: 5,
    price: 6,
  },
  {
    id: 99,
    itemId: "soup",
    imgSrc: soup4,
    name: "Soup",
    ratings: 3,
    price: 4.6,
  },
  {
    id: 100,
    itemId: "soup",
    imgSrc: soup5,
    name: "Soup",
    ratings: 2,
    price: 10,
  },
  {
    id: 101,
    itemId: "soup",
    imgSrc: soup6,
    name: "Soup",
    ratings: 4,
    price: 6,
  },
];

export { MenuItems, Items };
