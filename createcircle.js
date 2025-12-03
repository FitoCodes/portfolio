



document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.getElementById('interactive-background');
    


    window.addEventListener('click', (event) => {

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);


    const mouseX = event.clientX -50;
    const mouseY = event.clientY -50;
    const size = document.getElementById('input')

    const circle = document.createElement('div')
    circle.classList.add("circle");  
    circle.style.left = `${mouseX}px`;
    circle.style.top = `${mouseY}px`;
    circle.height = size
    circle.width = size,
    circle.style.backgroundColor = randomColor;
    backgroundContainer.appendChild(circle)

})

})





