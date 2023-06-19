// let num = 1
// while (num <= 100) {
//     if ((num % 3 == 0) && (num % 5 == 0)) {
//         console.log ("FizzBuzz")   
//         //อันนี้ไม่แสดงผล
//     }
    
//     else if ((num % 3) == 0) {
//         console.log ("Fizz")
//     }
//     else if ((num % 5) == 0) {
//         console.log ("Buzz")
//     }
    
//     else console.log(num);
//     num = num + 1 ;
// }


// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

let num = 1
while (num <= 100) {
    let sum=""
    if (num%3 ==0 ){
        sum += "fizz"
    }
    if (num%5 ==0 ){
        sum += "buzz"

    }
    console.log(sum || num) 
    num ++ 
}




