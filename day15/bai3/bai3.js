const number1 = 10;
const number2 = 15;
const number3 = 5;
let largest;

if(number1 >= number2 && number1 >= number3){
    largest = number1;
}else if(number2 >= number1 && number2 >= number3){
    largest = number2;
}else{
    largest = number3;
}

console.log(`Số lớn nhất trong 3 số là: ${largest}`);