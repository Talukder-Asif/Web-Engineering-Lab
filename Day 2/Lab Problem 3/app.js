// RGB
const Red = document.getElementById("Red");
const Green = document.getElementById("Green");
const Blue = document.getElementById("Blue");
const RGBColorBox = document.querySelector(".RGBcolorBox");
const rgbValue = document.querySelector(".rgbValue");

Red.addEventListener("input", () => {
  const redValue = Red.value;
  RGBColorBox.style.backgroundColor = `rgb(${redValue}, ${Green.value}, ${Blue.value})`;
  rgbValue.innerHTML = `rgb(${redValue}, ${Green.value}, ${Blue.value})`;
});
Green.addEventListener("input", () => {
  const GreenValue = Green.value;
  RGBColorBox.style.backgroundColor = `rgb(${Red.value}, ${GreenValue}, ${Blue.value})`;
  rgbValue.innerHTML = `rgb(${Red.value}, ${GreenValue}, ${Blue.value})`;
});
Blue.addEventListener("input", () => {
  const BlueValue = Blue.value;
  RGBColorBox.style.backgroundColor = `rgb(${Red.value}, ${Green.value}, ${BlueValue})`;
  rgbValue.innerHTML = `rgb(${Red.value}, ${Green.value}, ${BlueValue})`;
});

// Hex
const hexRed = document.getElementById("hexRed");
const hexGreen = document.getElementById("hexGreen");
const hexBlue = document.getElementById("hexBlue");
const HEXColorBox = document.querySelector(".HEXcolorBox");
const hexValue = document.querySelector(".hexValue");

hexRed.addEventListener("input", () => {
  const redHex = parseInt(hexRed.value).toString(16).padStart(2, "0");
  const greenHex = parseInt(hexGreen.value).toString(16).padStart(2, "0");
  const blueHex = parseInt(hexBlue.value).toString(16).padStart(2, "0");

  const hexColor = `#${redHex}${greenHex}${blueHex}`;
  HEXColorBox.style.backgroundColor = hexColor;
  hexValue.innerHTML = hexColor;
});
hexGreen.addEventListener("input", () => {
  const redHex = parseInt(hexRed.value).toString(16).padStart(2, "0");
  const greenHex = parseInt(hexGreen.value).toString(16).padStart(2, "0");
  const blueHex = parseInt(hexBlue.value).toString(16).padStart(2, "0");

  const hexColor = `#${redHex}${greenHex}${blueHex}`;
  HEXColorBox.style.backgroundColor = hexColor;
  hexValue.innerHTML = hexColor;
});
hexBlue.addEventListener("input", () => {
  const redHex = parseInt(hexRed.value).toString(16).padStart(2, "0");
  const greenHex = parseInt(hexGreen.value).toString(16).padStart(2, "0");
  const blueHex = parseInt(hexBlue.value).toString(16).padStart(2, "0");

  const hexColor = `#${redHex}${greenHex}${blueHex}`;
  HEXColorBox.style.backgroundColor = hexColor;
  hexValue.innerHTML = hexColor;
});
