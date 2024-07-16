const array=[2,8,5,4,6,2,5,3,9]
//filter out even numbers
const even=array.filter((item)=>item%2==0)
console.log(even)

//find odd sum

// const sum=array.filter((item)=>item%2!==0).reduce((acc,cu)=>acc+cu,0)
// console.log(sum)

//odd sum using reduce only
const oddsum=array.reduce((acc,cu)=>cu%2!==0?acc+cu:acc,0)
console.log(oddsum)

console.log(3 + +'3')