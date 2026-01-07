



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
    //let angle = 45;
    //line.style.transform = `rotate(${angle}deg)`;
    //line.style.transform-origin; `${mouseX}px`, `${mouseY}px`;
    


    //width: 200px; 
  //height: 2px; 
  //background-color: black;
  //
  //transform-origin: 90 90;
  //https://docs.google.com/document/d/1llzGkr5lx1DYxMe79SJiWSkW06vHChdWhp7CrgcdnJM/edit?tab=t.0


  
    })
})







