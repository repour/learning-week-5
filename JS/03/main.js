import './style.css'
let redCol = +prompt("please enter red section in rgb color");
let greenCol = +prompt("please enter green section in rgb color");
let blueCol = +prompt("please enter blue section in rgb color");

redCol > 255 ? redCol = 255 : redCol;
greenCol > 255 ? greenCol = 255 : greenCol;
blueCol > 255 ? blueCol = 255 : blueCol;

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(redCol, greenCol, blueCol));