// Traffic Light System
// Light Colors: Red, Yellow, Green
// Red = Stop
// Yellow = Get Ready
// Green = Go
// Other = Invalid Color

var input = prompt("Please Enter Any Traffic Light Color In Lower Case")

if(input == "red"){
    alert("Stop")
}
else if(input == "yellow"){
    alert("Get Ready")
}
else if(input == "green"){
    alert("Go")
}
else{
    alert("Invalid Color")
}

// Shopping Discount
// Shopping Amount
// upto 4999 --- 10%
// 5000 - 9999 --- 25%
// 10000 - above --- 50%

var amount = +prompt("Enter Shopping Amount")

if(amount <= 4999){
    alert("10% Discount Applies")
}
else if(amount <= 9999){
    alert("25% Discount Applies")
}
else if(amount >= 10000){
    alert("50% Discount Applies")
}
