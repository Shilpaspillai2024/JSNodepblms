const arr=['apple','mango','car','grape']

// const array=arr.map((item)=>{
//     return item[0].toUpperCase()+item.slice(1)
// })
// console.log(array)

const array2=[]
for(let item of arr){
   array2.push(item[0].toUpperCase()+item.slice(1))
}
console.log(array2)