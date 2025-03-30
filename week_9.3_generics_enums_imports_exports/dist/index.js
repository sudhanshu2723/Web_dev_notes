"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
let move = Direction.up;
console.log(move);
console.log(Direction);
console.log(Direction.down);
var Direction1;
(function (Direction1) {
    Direction1["up"] = "up";
    Direction1["down"] = "down";
    Direction1["left"] = "leftVal";
    Direction1["right"] = "right val";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.left);
console.log(Direction1);
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
console.log(ResponseStatus.NotFound);
