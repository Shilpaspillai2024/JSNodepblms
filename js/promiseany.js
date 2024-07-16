const p1=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'promise 1resolved')
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(resolve,200,"promise2 resolved")
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("promise 3 rejected")
        
    }, 300);
})

    // Promise.any([p1,p2,p3])
    // Promise.all([p1,p2,p3])
    Promise.race([p1,p2,p3])
    // Promise.allSettled([p1,p2,p3])
    .then((value)=>{
        console.log(value)
    }).catch((error)=>{
        console.error(error)
    })