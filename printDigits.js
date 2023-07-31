function printDigits(num){
    while(num > 0){// while we have nums 
        let print = num % 10 // select  the rightmost digit
        console.log(print) // print the right most digit
        num = Math.floor(num / 10) // remove the right most digit 
    }
}
printDigits(987654321)// logged for testing