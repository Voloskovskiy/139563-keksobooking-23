let generateRandomNumber = function(from, to){
    return Math.floor(Math.random( ) * (to - from + 1)) + from;
}
generateRandomNumber(12, 7);
let generateRandomFloorNumber = function(from, to, afterComma){
    return (Math.random( ) * (to - from + 1) + from).toFixed(afterComma);
}
generateRandomFloorNumber(18, 11, 3);