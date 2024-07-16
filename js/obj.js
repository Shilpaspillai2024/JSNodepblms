// const obj={ab:[1,2,3],bc:[3,4,5],cd:[5,6,3]}
// let sum=0;
// for(let key in obj){
//     sum+=obj[key].reduce((acc,cu)=>acc+cu,0)
// }
// console.log(sum)

// //avg

// let s=0
// let c=0


// for(let k in obj){
//     s+=obj[k].reduce((acc,cu)=>acc+cu,0)
//     c=obj[k].length
// }
// let avg=Math.round(s/c)
// console.log(avg)



// const arr=[{ab:5},{ab:6},{ab:9}]
// const sum=arr.reduce((acc,cu)=> acc+cu.ab,0)
// console.log(sum)

const arr=[{ab:5},{db:4,ac:9},{dc:7,ad:8}]

const sum=arr.reduce((total,obj)=>{
    return total+ Object.values(obj).reduce((acc,cu)=>acc+cu,0)
},0)
console.log(sum)