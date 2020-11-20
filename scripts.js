const divs = document.querySelectorAll('div');

function logText(e){
   console.log(this.classList.value);
   //e.stopPropogation();// stop the bubbling
}

divs.forEach(div=>div.addEventListener('click', logText,{
    capture:false, //default
    once:true //eventListener will run only once
}));
//capture ripples down, bubbling goes up