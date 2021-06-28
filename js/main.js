//Первоисточник
let generateRandomNumber = function(from, to){
    from = Math.abs(from);
    to = Math.abs(to);
    if(from>=to){
        let tmp = to;
        to = from;
        from = tmp;
    }
    return Math.floor(from + Math.random() * (to + 1 - from));
}
console.log(generateRandomNumber(-12, 7));
let generateRandomFloorNumber = function(from, to, afterComma){
    from = Math.abs(from);
    to = Math.abs(to);
    if(from>=to){
        let tmp = to;
        to = from;
        from = tmp;
    }
    return (from + Math.random() * (to + 1 - from)).toFixed(afterComma);
}
generateRandomFloorNumber(18, 11, 3);