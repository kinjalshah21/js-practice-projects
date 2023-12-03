const randomColor = function(){
    const hex = "0123456789ABCDE"
    let color = "#"

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
};
let startChange

const startChangingBgColor = function(){

   let changeColor = function(){
    document.body.style.backgroundColor = randomColor()
   }
   if(!startChange) startChange = setInterval(changeColor,1000)
};
const stopChangingBgColor = function(){
  clearInterval(startChange);
  startChange = null;
};
//start functionality
document.getElementById('start').addEventListener('click',startChangingBgColor)

//stop functionality
document.getElementById('stop').addEventListener('click',stopChangingBgColor)

// console.log(randomColor())