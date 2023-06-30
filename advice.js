
let advice=document.getElementById('advice')
let quote=document.getElementById('quote')
let btn =document.getElementById('btn')

let getQuote=()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((data)=>{
        return data.json()
    }).then((quotes)=>{
        advice.innerHTML=`ADVICE  #${quotes.slip.id}`
        quote.innerHTML=`${quotes.slip.advice}`
       
       
    })
    console.log('trigger');
}

setInterval(() => {
    getQuote()
}, 5000);

