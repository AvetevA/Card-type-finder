"use strict"



let inputnumber = document.getElementById("card-number");
let cvv = document.getElementById("card-cvv");
let date = document.getElementById("card-date");
let form = document.querySelector("form");
let sometext = document.querySelector("p");
let i = document.querySelector(".typeofcard");
let button = document.querySelector("button");
function reset(){
    form.className = "";
    form.classList.add("standard");
    i.style.backgroundImage = "";
}

inputnumber.addEventListener("input", (event) => {
    if (event.target.value.length >= 1 && event.target.value[0] === "4") {
        form.className = "";
        form.classList.add("visa");
        console.log(i);
        i.style.backgroundImage = "url('../Assets/icons8-visa-144.png')";
    }
    else if (event.target.value >= 2 && event.target.value[0] === "5") {

        if (parseInt(event.target.value[1]) > 0 && event.target.value[1] < 6) {
            form.className = "";
            form.classList.add("mastercard");
            i.style.backgroundImage = "url('../Assets/icons8-mastercard-120.png')";
        }
        else if (parseInt(event.target.value[1]) === 0 || (parseInt(event.target.value[1]) > 5 && parseInt(event.target.value[1]) < 10)) {
            form.className = "";
            form.classList.add("maestro");
            i.style.backgroundImage = "url('../Assets/icons8-maestro-card-96.png')";
        }
        else {

            reset();
        }
    }
    else if (event.target.value >= 2 && event.target.value[0] === "2") {
        if (parseInt(event.target.value[1]) > 1 && event.target.value[1] < 8) {
            form.className = "";
            form.classList.add("mastercard");
            i.style.backgroundImage = "url('../Assets/icons8-mastercard-120.png')";
        }
        else if (parseInt(event.target.value[1]) === 1) {
            form.className = "";
            form.classList.add("jcb");
            i.style.backgroundImage = "url('../Assets/icons8-jcb-48.png')";
        }
        else {

            reset();
        }
    }
    else if(event.target.value[0] === "3"){
        if(event.target.value.length>=2){
            if(event.target.value[1]==="4" || event.target.value[1]==="7"){
                form.className = "";
                form.classList.add("usa");
                i.style.backgroundImage = "url('../Assets/icons8-american-express-card-96.png')";
            }
            else if(event.target.value[1] === "6"  || event.target.value[1] === "8"){
                form.className = "";
                form.classList.add("jcb"); //dinners club
                i.style.backgroundImage = "url('../Assets/icons8-diners-club-64.png')";
            }
            else if(event.target.value[1]==="0"){
                if(parseInt(event.target.value[2])>=0 && parseInt(event.target.value[2])<=5){
                    form.className = "";
                    form.classList.add("jcb"); //dinners club
                    i.style.backgroundImage = "url('../Assets/icons8-diners-club-64.png')";
                }
                else{
                    reset();
                }
            }
            else if(event.target.value[1]==="5"){
                let string = "";
                string+=event.target.value[2];
                string+=event.target.value[3];
                if(parseInt(string)>=28 && parseInt(string)<=89){
                    form.className = "";
                    form.classList.add("jcb");
                    i.style.backgroundImage = "url('../Assets/icons8-jcb-48.png')";
                }
                else{
                    reset();
                }
            }
            else{
                reset();
            }
            
        }
        else{

            reset();

        }
    }
    else if(event.target.value[0]>="6"){
  
    if(event.target.value.length<6){
        let string = "";
        for(let i = 0;i<4;i++){
            string+=event.target.value[i];
        }
        
        if(string==="6011"  || string[1]==="5" || (string[1]==="4" && (parseInt(string[2])>=4 && parseInt(string[2])<=9 ))){
            form.className = "";
            form.classList.add("discover");
            i.style.backgroundImage = "url('../Assets/icons8-discover-card-80.png')";
        }
        
        else{
            
            reset();

        }
    }
    else {
        let string = "";
        for(let i =0;i<7;i++){
            string+=event.target.value[i];
        }
        string = parseInt(string);
        if(string>=622126 && string<=622925){
            form.className = "";
            form.classList.add("discover");
            i.style.backgroundImage = "url('../Assets/icons8-discover-card-80.png')";
        }
        else {
            
            reset();
        }
    }
    }
    else {
        
        reset();
    }
});



button.addEventListener("click",(event)=>{

    event.preventDefault();
   if(inputnumber.value==="" || cvv.value==="" || date.value===""){
    alert("Check form!");
   }
   else{

    //do backend

   }

});