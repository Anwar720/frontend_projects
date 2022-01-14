const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation(){
    text.innerHTML = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(( )=> {
        text.innerText = 'HOLD';

        setTimeout(()=>{
            text.innerText = 'Breathe Out!';
            container.className = 'container shark';
        },holdTime);
    },breatheTime);
}

setInterval(breathAnimation, totalTime);