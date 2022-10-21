const player = document.getElementById('player');
const ground = document.getElementById('ground');

let dx = 0;
let dy = 0;
let acceleration = 0.4;
let index = 1;

addEventListener('keyup',({key}) =>{

    if(key === 'ArrowLeft' || key === 'ArrowRight'){
        dx = 0;
    }
  
  
  

});

addEventListener('keydown',({key})=>{
    if(key === 'ArrowRight'){
        dx = 10; 
        player.classList.remove('turn');
    } else if (key === 'ArrowLeft'){
        dx = -10;
        player.classList.add('turn');
    } else if(key === 'ArrowUp'){
        dy = -12;
        acceleration = 0.3;    }
});



// setInterval(() =>{
//     if(player.offsetWidth + player.offsetLeft + dx >= innerWidth){
//         dx = 0;
//         player.style.left = `${innerWidth-player.offsetWidth}px`;
//     } else if(player.offsetLeft < 0){
//         dx = 0;
//         player.style.left = 0;
        
//     }  

//    if(dy < -30)  dy = -12;

//     dy += acceleration;


    
//     if(player.offsetTop + player.offsetHeight > ground.offsetTop){
//         dy =0;
//         player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
//         acceleration = 0;
//     }

//     if(player.offsetTop < 0){
//         dy = 1;
//     }
//     player.style.left = `${player.offsetLeft + dx}px`;
//     player.style.top = `${player.offsetTop  + dy}px`;
// },20);




const draw = () => {
    if(dx !== 0){
        player.style.backgroundImage = `url('img/Run${index++}.png')`;
    }else if(dy !== 0){
        player.style.backgroundImage = `url('img/Jump${index}.png')`
        }
    else{
        player.style.backgroundImage = `url('img/Idle1.png')`;
    }


    if(index > 10){
        index = 1;
    }

    requestAnimationFrame(draw);
}






const animate = () => {
    if(player.offsetWidth + player.offsetLeft + dx >= innerWidth){
        dx = 0;
        player.style.left = `${innerWidth-player.offsetWidth}px`;
    } else if(player.offsetLeft < 0){
        dx = 0;
        player.style.left = 0;
        
    }  

   if(dy < -30)  dy = -12;

    dy += acceleration;


    
    if(player.offsetTop + player.offsetHeight > ground.offsetTop){
        dy =0;
        player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
        acceleration = 0;
    }

    if(player.offsetTop < 0){
        dy = 1;
    }
    player.style.left = `${player.offsetLeft + dx}px`;
    player.style.top = `${player.offsetTop  + dy}px`;
    
    requestAnimationFrame(animate);

}


requestAnimationFrame(draw);
requestAnimationFrame(animate);






