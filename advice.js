
let advice=document.getElementById('advice')
let quote=document.getElementById('quote')
let btn =document.getElementById('btn')
let timer =document.querySelector('.timer')
let dec=5;


let getQuote=()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((data)=>{
        return data.json()
    }).then((quotes)=>{
        advice.innerHTML=`ADVICE  #${quotes.slip.id}`
        quote.innerHTML=`${quotes.slip.advice}`
       
       
    })
}

let stop = setInterval(() => {
  getQuote()
}, 5000);


setInterval(() => {
    if (dec==0) {
        dec=5;
    }
    // decrementfun()
    timer.innerHTML=dec;
    dec--;
}, 1000);

btn.addEventListener('click',()=>{
    clearInterval(stop);
})

