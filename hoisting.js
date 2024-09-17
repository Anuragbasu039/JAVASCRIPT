// Hoisting

// console.log(count);
// var count = 1;

//output
//undefined

// function abc() {
//     console.log(a);
//     var a = 10;
// }
// abc();
//output => undefined

function abc() {
    console.log(a, b, c);
    
    const c = 30;
    let b = 20;
    var a = 10;
}
abc();