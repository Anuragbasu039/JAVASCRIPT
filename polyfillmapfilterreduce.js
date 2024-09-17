//map, filter, reduce
//polyfill for map?

//Array.map((num,i,arr) => { })

// Array.prototype.Mymap=function(cb){
//     let temp = []
//     for (let i = 0; i < this.length; i++) {
//        temp.push(cb(this[i],i,this))
//     }
//     return temp
// }

// const nums = [1,2,3,4]
// const multiplythree = nums.Mymap((num, i, arr) => {
//     return num * 3;
// })
// console.log(multiplythree);

//output => [3,6,9,12]


//polyfill for filter?

//Array.filter((num) => { })

// Array.prototype.Myfilter = function (cb) {
//     let temp =[]
//     for (let i = 0; i < this.length; i++) {
//       if(cb(this[i],i,this)){
//         temp.push(this[i])
//       } 
//     }
//     return temp
// }

// const nums = [1,2,3,4]
// const morethantwo = nums.Myfilter((num) => {
//     return num >2
// })
// console.log(morethantwo);

//output => [3,4]


//polyfill for reduce?

//Array.reduce((acc, curr, i, arr) => { })

    Array.prototype.Myreduce= function(cb, initialvalue){
        let acc = initialvalue
        for (let i = 0; i < this.length; i++) {
            acc = acc? cb(acc,this[i], i,this): this[i]
            
        }
        return acc;
    }
    const nums = [1,2,3,4]

const sum = nums.Myreduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)
console.log(sum);

//output => 10