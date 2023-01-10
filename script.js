var screen=document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');


/* to take value of button we are using a for loop */
for(i of  btn){
    i.addEventListener('click', (e)=>{
     
        btnval=e.target.innerText;
        screen.value+=btnval;
    });

let history = document.getElementById("history");
    function calculation(y){
        /* we created p element*/
       val=document.createElement('p');
       data=y+"="+eval(y);
       val.innerText=data;
       history.appendChild(val);
       return eval(y);
}
}
