let str="SudhanshU pandey pandey  ";

console.log(str.length);

console.log(str.indexOf("pandey"))

console.log(str.lastIndexOf("pandey"))

// slice -> index1 to index2-1
console.log(str.slice(2,4));

// substr ->index to (index+len-1)
//  index , len
console.log(str.substr(2,3));

console.log(str.replace("pandey","nahi"))

console.log(str.split(' '))

console.log(str.trim())

console.log(str.toLowerCase());

console.log(str.toUpperCase());

console.log(parseInt(34.56))
console.log(parseInt("42"));
console.log(parseInt("42px"))
console.log(parseInt("3.14"))
console.log(parseInt("43r45"))

console.log(parseFloat(34.56))
console.log(parseFloat("42"));
console.log(parseFloat("42px"))
console.log(parseFloat("3.14"))
console.log(parseFloat("43r45"))

let arr=[3,4,56,34,456,34];

arr.push(45);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(34);
console.log(arr)

let arr2=[45,3,4,34];
console.log(arr.concat(arr2))

arr.forEach((val)=>{
    console.log(val)
})

class Animal{
    constructor(name,legCount,speaks){
        this.name=name
        this.legCount=legCount
        this.speaks=speaks
    }
    describe(){
        console.log("the name is "+this.name+" and legs is "+this.legCount)
    }
    speakAn(){
        console.log("the animal speaks "+this.speaks)
    }
    static info(){
        console.log("this is the class of animals"

        )
    }
}

const dog=new Animal("sheru",4,"bhow bhow");
dog.describe()
dog.speakAn();
console.log(dog.name)
Animal.info()

let initalDate=new Date();
console.log(initalDate.getMonth());
console.log(initalDate.getFullYear())
console.log(initalDate.getSeconds())


let users={
    name:"sudhanshu",
    age:34
}

console.log(JSON.stringify(users))
let data=JSON.stringify(users);
console.log(JSON.parse(data))

console.log(Math.random())