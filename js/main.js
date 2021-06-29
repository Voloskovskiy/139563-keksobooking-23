let generateRandomNumber = function(from, to){
  from = Math.abs(from);
  to = Math.abs(to);
  if (from>=to) {
    const tmp = to;
    to = from;
    from = tmp;
  }
  return Math.floor(Math.random() * (to - from + 1) ) + from;
}
generateRandomNumber(-12, 7);
let generateRandomFloorNumber = function(from, to, afterComma){
  from = Math.abs(from)*(10*afterComma);
  to = Math.abs(to)*(10*afterComma);
  if (from>=to) {
    const tmp = to;
    to = from;
    from = tmp;
  }
  return +((Math.floor(Math.random() * (to - from + 1) ) + from)/(10*afterComma)).toFixed(afterComma);
}
generateRandomFloorNumber(18, 11, 3);