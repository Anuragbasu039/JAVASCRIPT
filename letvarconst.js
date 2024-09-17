//scope
//var vs let vs const

//global scope
// var a = 5 
// {
//     var a=5;
// }
// console.log(a);


 // error a is not defined
// {
//     let a = 5;
// }                              

// console.log(a);


//block scope
// {
//     let a = 5 ;
//     console.log(a);  
// }
// {
//     const a = 5 ;
//     console.log(a);  
// }


//variable shadowing
// function test(){
//     let a = "hello";
//     if(true){
//         let a = "hii"
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

//output
// Hii
// hello


//inlegal shadowing
// function test(){
//     var a = "hello";
//     let a = "Bye";
//     if(true){
//         let a = "hii"
//         var b = "Goodbye"
//         console.log(a);
//         console.log(b);
//     }
// }
// test(); error


