// WEBSOCKET (SOCKET IO)
const socket = io();

socket.on('server', () => {
    console.log('I have recieved the servers message.')
})

//REST OF THE CODE!
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const headerShowCase = document.querySelector('#header-showcase');
let imgList = [];
let i = 0;
let interval = 5000;
let runSlide;

function homeEngine(){
    return{

        slide(direction){
            if(direction == 'forward'){
                if(i < imgList.length - 1){
                    i++;
                } 
            } else if(direction == 'backward'){
                if(i == 0){
                    i = imgLis.lenght - 1;
                } else{
                   
                    i--;
                    console.log(i)
                }
            }

            if(i == imgList.length - 1){
                i = 0;
            }
           
            headerShowCase.style.backgroundImage = `url(./images/${imgList[i]})`;
            
            
        },

    }
} const eng = new homeEngine();

window.addEventListener('DOMContentLoaded', async () =>{
    await fetch('/images').then(res => res.json()).then(data => {
        imgList = [...data];
        console.log(imgList);
    });

    runSlide = setInterval("eng.slide('forward')", 5000);

});

right.addEventListener('click', () =>{
    clearInterval(runSlide);
    eng.slide('forward');
    runSlide = setInterval("eng.slide('forward')", 5000);
});

left.addEventListener('click', ()=>{
    clearInterval(runSlide);
    eng.slide('backward');
    runSlide = setInterval("eng.slide('forward')", 5000);
});



