//Hypotenuse Calculator
let a,b,c;

document.getElementById("Vsubmit").onclick=function(){
    a = document.getElementById("sideA").value;
    b = document.getElementById("sideB").value;
    c = Math.sqrt(Math.pow(Number(a),2) +  Math.pow(Number(b),2));

    document.getElementById("ans").innerHTML="The Hypotenuse is : " + c;
}


//Number Counter
let d = 0;

document.getElementById("increase").onclick=function(){
    d += 1;
    document.getElementById("count").innerHTML= d;
}

document.getElementById("decrease").onclick=function(){
    d -= 1;
    document.getElementById("count").innerHTML= d;
}

document.getElementById("reset").onclick=function(){
    d = 0;
    document.getElementById("count").innerHTML= d;
}

//Dice Roll
let e;
document.getElementById("roll").onclick=function(){
    e = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dicenumber").innerHTML= e;
}

//Recatangle printer
document.getElementById("Rsubmit").onclick=function(){
    const row=document.getElementById("rows").value;
    const column=document.getElementById("columns").value;
    const symbol=document.getElementById("symbol").value;
    const rect=document.getElementById("rectangle");

    for(let i =0;i < row;i++){
        for(let j=0;j < column;j++){
            rect.innerHTML += symbol;
        }
        rect.innerHTML += "<br>";
    }
}

//Number Guessing Game
let number = Math.floor(Math.random()*20 + 1);
let tries = 0;

document.getElementById("submit").onclick=function(){
    const show = document.getElementById("board");
    let guess = document.getElementById("guess").value;
    tries++;

    if(guess < number){
        show.innerHTML = `${guess} is less than the Original Number`;
    }
    else if(guess > number){
        show.innerHTML = `${guess} is greater than the Original Number`;
    }
    else if(guess == number){
        show.innerHTML = `<b>Yay! You found it</b> <br> ${number} is the Original Number <br> It took you ${tries} guesses. <br> <b>Refresh the page to start new</b>`;
        number = Math.floor(Math.random()*20 + 1);
        tries = 0; 
    }

}

//Temperature Converter
document.getElementById("Tsubmit").onclick=function(){
    let temp =document.getElementById("temp").value;
    temp =Number(temp);
    const celsius = document.getElementById("C");
    const fahrenheit = document.getElementById("F");
    const convert=document.getElementById("convert");

    if(celsius.checked){
        temp = (temp-32)*(5/9);
        convert.innerHTML=temp.toLocaleString(undefined,{style:"unit", unit:"celsius"});
    }
    else if(fahrenheit.checked){
        temp = (temp * (9/5)) + 32;
        convert.innerHTML=temp.toLocaleString(undefined,{style:"unit", unit:"fahrenheit"});
    }
    else{
        convert.innerHTML="Select Unit !!";
    }
}



let na = 123456.789;
console.log(na.toLocaleString(undefined,{style:"unit", unit:"fahrenheit"}));






