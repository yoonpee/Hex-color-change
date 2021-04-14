
const btn =document.querySelector('.btn');
const hex = document.querySelector('span');
const body = document.querySelector('body');

btn.addEventListener('click', ()=>{
   
    let hexRandom = Math.floor(Math.random() * 23123334).toString(16)
    hex.innerText = '#' + hexRandom;
    body.style.backgroundColor = hex.innerText;
    
});