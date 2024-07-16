// settimeout

// console.log("this is settimeout")
// setTimeout(function(){
//     console.log("excute after feow seconds")
// },2000)
// console.log("end")

//set interval
let count=0;
const intervalId=setInterval(function(){
    count++
    console.log(count)

    if(count>=5){
    clearInterval(intervalId)
    }

},1000)