let number = 26;
let isPrime = true;

if(number === 1){
    console.log(`1 is neither Prime nor composite`);
}

else if(number > 1){
    for(let i =2; i <= number/2; i++){
        if(number % i ==0){
            isPrime == false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} Prime number`);
    } else {
        console.log(`Not a Prime number`);
    }
}

else{
    console.log(`Number should be grater than 1`);
}