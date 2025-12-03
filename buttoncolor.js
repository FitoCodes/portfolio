const btn = document.getElementById("colorbutton");

btn.addEventListener("click",() => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  btn.style.backgroundColor = randomColor;
});

