import { generateRandomNumber, celciusToFahreneit } from "./utils.js";
import { getPostsLength } from "./postController.js";

let _num = generateRandomNumber();
let celcius = celciusToFahreneit(12);
let postsLength = getPostsLength();

console.log(_num, celcius, postsLength);
