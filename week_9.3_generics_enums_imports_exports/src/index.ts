
enum Direction{
    up,
    down,
    left,
    right
}

let move=Direction.up;
console.log(move)
console.log(Direction)
console.log(Direction.down)



enum Direction1{
    up="up",
    down="down",
    left="leftVal",
    right="right val"
}

console.log(Direction1.left)
console.log(Direction1)


enum ResponseStatus{
    Success=200,
    NotFound=404,
    Error=500
}

console.log(ResponseStatus.NotFound)

// Generics

function identity<T>(arg:T):T{
    return arg;
}

let output=identity<string>("hello");
let output1=identity<number>(45);

function solve2<T>(arr:T[]):T{
    return arr[0];
}

let ele=solve2<string>(["hello","lock"])
let ele2=solve2([23.45,56.43 ])
console.log(ele.toLowerCase());

export const a=45;
const v=56;
export default v;