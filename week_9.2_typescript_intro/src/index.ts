console.log("hello typescript");

const x:number=12;

function printUser(firstName:string):void{
    console.log("the firstName is "+firstName)
}


printUser("sudhanshu");

function sumValue(a:number,b:number):number{
    return a+b;
}

let val:number=sumValue(34,45);
console.log(val);

function isUserAdult(age:number):boolean{
    if(age>18)return true;
    else return false;
}

console.log(isUserAdult(56))

function result(a:number,b:number):number{
    return a*b;
}

function printResult(a:number,b:number,fnToCall:(a:number,b:number)=>number):void{
  setTimeout(():void=>{
    console.log("the result is "+fnToCall(a,b));
  },1000)
}

printResult(34,45,result);

interface User{
    firstName:String,
    lastName:string,
    email:string,
    age:number,
    isMarried?:boolean
}

let user:User={
    firstName:"sudhanshu",
    lastName:"pandey",
    email:"sudhanshu2723@gmail.com",
    age:34
}

interface Person{
    name:string,
    age:number,
    greet(phrase:string):void
}

class Employee implements Person{
    name:string;
    age:number;
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`)
    }
}

let obj1=new Employee("sudhanshu",34);
console.log(obj1.name);
console.log(obj1.name);
obj1.greet("hello ");

// interface can implement classes but types cannot implement classes
// types let you allow union and intersections but interfaces does not allow you to do so
//  TYPES

type User1={
    firstName: string;
    lastName:string,
    age:number 
}
// allows union of types 
type ID=number | string ;

let id1=23;
let id2="45";

// also allows intersection of types

type Employee1={
    name:string,
    startDate:Date 
}

type Manager={
    name:string,
    department:string 
}

type teamLead= Employee1 & Manager;

const tl1:teamLead={
    name:"sp",
    startDate:new Date(),
    department:"CSE"
}

// arrays
function maxValue(arr:number[]):number{
    let maxi=Number.MIN_VALUE;
    for(let i=0; i<arr.length; i++){
        maxi=Math.max(maxi,arr[i]);
    }
    return maxi;
}

// array definition is note possible in case of interfaces
type numberarr=number[];

let arr:number[]=[45,3,4,3,4,34,3,4];

console.log(maxValue(arr))