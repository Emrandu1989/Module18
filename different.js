// odd numbers

// for(let i = 0; i <=20; i++){
//    if(i % 2 === !0){
//     console.log(i)
//    }
// }
// for(let i = 0; i <=20; i++){
//    if(i % 2 !== 0){
//     console.log(i)
//    }
// }
/* for(let i = 1; i <=20; i += 2){
  console.log(i)
} */

//give me the list numbers between 1 to 30 divisible by 5

// for(let i = 1; i<=30; i++){
//     if(i % 5 === 0){
//         console.log("The number is divisible by 5", i)
//     }
// }
// for(let i = 1; i<=30; i++){
//     if(i % 3 === 0){
//         console.log("The number is divisible by 3", i)
//     }
// }
// for(let i = 1; i<=30; i++){
//     if(i % 3 === 0 || i % 10 === 0 ){
//         console.log("The number is divisible by 3 and 10 ", i)
//     }
// }
// for(let i = 1; i<=100; i++){
//     if(i % 3 === 0 && i % 5 === 0 ){
//         console.log("The number is divisible by 3 and 5 ", i)
//     }
// }

// give me the sum of numbers that are divisible by 3; 
let sum = 0;
for(let i = 1; i<=50; i++){
    if(i % 3 === 0 ){
        console.log("The number is divisible by 3 and 5 ", i);
        sum = sum + i;
    }
    
}
console.log("Total of the sum : ",sum)