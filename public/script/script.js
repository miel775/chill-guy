const yearsArray = document.querySelectorAll('.years');
const bttnLeft = document.querySelector('.arrow-left');
const bttnRight = document.querySelector('.arrow-right');


bttnRight.addEventListener('click', (e) => {
    yearsArray.forEach(year => year.classList.add('right'));
});

bttnLeft.addEventListener('click', (e) => {
    yearsArray.forEach(year => year.classList.add('left'));
});

let newX = 0, newY = 0, startX = 0, startY = 0;

const years = document.getElementById('drag');

    years.addEventListener('mousedown', mouseDown)

    function mouseDown(e){
            startX = e.clientX
            startY = e.clientY

            document.addEventListener('mousemove', mouseMove)
            document.addEventListener('mouseup', mouseUp)
        }
    

function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    years.style.top = startY (years.offsetTop - newY) + 'px'
    years.style.left = startX (years.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove',mouseMove)
}