var screen=document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/* to take value of button we are using a for loop */
for(i of  btn){
    i.addEventListener('click', (e)=>{
     
        btnval=e.target.innerText;
        screen.value+=btnval;
    });
}