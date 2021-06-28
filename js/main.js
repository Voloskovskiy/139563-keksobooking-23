//Первоисточник
let generateRandomNumber = function(from, to){
    return Math.floor(+from + Math.random() * (+to + 1 - (+from)));
}
console.log(generateRandomNumber(-12, 7));
let generateRandomFloorNumber = function(from, to, afterComma){
    return (from + Math.random() * (to + 1 - from)).toFixed(afterComma);
}
generateRandomFloorNumber(18, 11, 3);