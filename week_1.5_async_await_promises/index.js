
// console.log("before settimeout");

// let sum=0;
// for(let i=0; i<10000000000; i++){
//     sum+=i;
// }

// setTimeout(()=>{
//     console.log("inside settimeout");
// },1);

// console.log("after settimeout");

// const fs=require("fs");

// console.log("before reading file");
// fs.readFile("a.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
// console.log("after reading file");

const fs=require("fs");

console.log("before ");
function solve(){
    console.log("before promise");
   const pr=new Promise((resolve)=>{
    fs.readFile("a.txt","utf-8",(err,data)=>{
        console.log("inside promise");
        resolve(data);
        console.log("after promise");
   })
})
console.log("after pr");
return pr;
}


function onDone(data){
    
    console.log("the data is "+data);
}
// console.log("before solve");
// console.log(solve())
// solve().then(onDone);
// console.log("after solve");


// async await



async function main() {
    console.log("before main");
    const value=await solve();
    console.log("after main");
    console.log(value);
}

main();
console.log("end")