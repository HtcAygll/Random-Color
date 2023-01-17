const colorList = [
  "red",
  "yellow",
  "pink",
  "brown",
  "aqua",
  "magenta",
  "tomato",
  "green",
  "mediumseagreen",
  "skyblue",
  "salmon",
  "silver",
];

const p = document.querySelector("p");

const button = document
  .getElementsByTagName("button")[0]
  .addEventListener("click", () => {
    
    const color = colorList[Math.trunc(Math.random() * colorList.length)];

    document.getElementsByTagName("body")[0].style.backgroundColor = color;

    p.textContent = `The Color Is ${color.toUpperCase()}`;
  });

button.addEventListener("keydown", (event) => {
  if (event.code === "Enter") button.click();
});
