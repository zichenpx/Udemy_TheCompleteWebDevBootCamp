// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
// import animanls, {useAnimals} from "./data";
import cars from "./practice";

const [honda, tesla] = cars;
// console.log(honda);

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// destructuring
// const [cat, dog] = animanls;
// console.log(cat);

// use State
// console.log(useAnimals(cat));
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// const [c, d] = animanls;
// console.log(c);

// const { name, sound } = c;
// console.log(sound);
// const { name: catName, sound:catSound } = c;
// console.log(catName);

// How provide default value if they doesn't have the key
// const { name = "Fluffy", sound = "Purr"} = cat;
// console.log(name);

// complex data
// const {name, sound, feedingRequirement} = cat;
// console.log(feedingRequirement);
// console.log(feedingRequirement.food);
// const {
//   name,
//   sound,
//   feedingRequirement: { food, water }
// } = cat;
// console.log(food);
