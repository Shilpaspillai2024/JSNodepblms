const str=["apple","orange","grape","pineapple"]
const strlen=str.reduce((acc,cu)=>{
    return cu.length>acc.length?cu:acc
},"")
console.log(strlen)