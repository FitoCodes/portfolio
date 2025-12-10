



document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.getElementById('interactive-background');
    


    window.addEventListener('click', (event) => {

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);


    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const size = document.getElementById("input").value


    const circle = document.createElement('div')
    circle.classList.add("circle");  
    circle.style.left = `${mouseX}px`;
    circle.style.top = `${mouseY}px`;
    circle.style.height = size
    circle.style.width = size
    circle.style.backgroundColor = randomColor;
    backgroundContainer.appendChild(circle)

    console.log(`X-coordinate: ${mouseX}, Y-coordinate: ${mouseY}`);

    const line = document.createElement('div')
    line.classList.add("diagonal-line");  
    line.style.height = 100
    line.style.width = 2
    line.style.transform


    //width: 200px; 
  //height: 2px; 
  //background-color: black;
  //transform: rotate(45deg);
  //transform-origin: 90 90;
  //https://docs.google.com/document/d/1ukq88CqcKbPi9wm9_I9oVzYtb-LRcbHuY_kyX6cKCcM/edit?tab=t.0


  
    })
})







