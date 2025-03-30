console.log("hello world");
// Partial execution takes place -> only "hello world" will be printed
// console.log(a);

// const value does not change
const a=34;
// a=45;

let firstName="sudhanshu";
let lastName="pandey"

console.log("the firstName is "+firstName+" and lastName is "+lastName);

let gender="male";

if(gender=="male")console.log("you are a male");
else console.log("you are a female");

let sum=0;
for(let i=0; i<=1000; i++){
    sum+=i;
}
console.log(sum);

// cannot change value of const
const num=34;
// num=45;

let arr=[33,23,4,5,67,5,4,3,2,3,4,3,56];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0)
    console.log(arr[i]);
}

let maxi=Number.MIN_VALUE;
console.log(maxi);
for(let i=0; i<arr.length; i++){
    maxi=Math.max(maxi,arr[i]);
}
console.log(maxi);

let obj=[
    {
        firstName:"sudhanshu",
        lastName:"pandey",
        gender:"male",
        hobbies:[
            {
                game:"badminton",
                level:"senior"
            },
            {
                game:"cricket",
                level:"beginner"
            }
        ]
    },
    {
        firstName:"amisha",
        lastName:"kumar",
        gender:"female",
        hobbies:[
            {
                game:"tennis",
                level:"senior"
            },
            {
                game:"cricket",
                level:"beginner"
            }
        ]
    },{
        firstName:"naman",
        lastName:"das",
        gender:"male",
        hobbies:[
            {
                game:"basketball",
                level:"senior"
            },
            {
                game:"tennis",
                level:"junior"
            }
        ]
    }
]

for(let  i=0; i<obj.length; i++){
    if(obj[i].gender==="male"){
        console.log(obj[i].firstName)
        for(let j=0; j<obj[i].hobbies.length; j++){
            if(obj[i].hobbies[j].level==="senior")console.log(obj[i].hobbies[j].game);
        }
    }
}


let start=0;
let end=arr.length-1;
while(start<end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr);


function sumValue(a,b){
    return a+b; 
}

function displayResult(result){
    console.log("the result is "+result);
}

function printSumInPassiveFormat(a,b,fnTOCall){
    console.log("the sum is "+fnTOCall(a,b));
}

// callbacks-> passsing function as an argument
printSumInPassiveFormat(34,56,sumValue);

// let counter=30;
// let counterApp=setInterval(()=>{
//     console.log(counter);
//     counter--;
//     if(counter<0)clearInterval(counterApp)
// },10)

let initialTime=new Date();

setTimeout(()=>{
    let finalTime=new Date();
    console.log(finalTime.getTime());
    console.log(initialTime.getTime());
    let difference=finalTime.getTime()-initialTime.getTime();
    console.log("the difference is "+difference);
},1000)