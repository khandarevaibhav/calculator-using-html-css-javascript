var screen=document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');


/* to take value of button we are using a for loop */
for(i of  btn){
    i.addEventListener('click', (e)=>{
     
        btnval=e.target.innerText;
        screen.value+=btnval;
    });
function sin(){
    screen.value=Math.sin(screen.value);
    }
function cos(){
    screen.value=Math.cos(screen.value);
}
function tan(){
    screen.value=Math.tan(screen.value);
}
function pow(){
    screen.value=Math.pow(screen.value, 2);
}
function pi(){
    screen.value=3.14159265359;
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
function log(){
    screen.value=Math.log(screen.value);
}
function e(){
    screen.value=2.7182818284679;
}
function fact(){
    var j, num, m;
    m=1;
    num=screen.value;
    if(num<0){
        console.log("factorial does not exit");

    }
    else if(num==0){
        console.log("1");
    }
    else{
        for(j=1; j<=num; j++){
            m=m*j;
        }

        screen.value=m;

    }

}
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
}
