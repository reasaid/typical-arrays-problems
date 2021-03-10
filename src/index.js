
exports.min = function min (array) {
  if (Array.isArray(array)){
    if(array.length !==0){
   array.sort((a,b)=>a-b);
   return array[0];
  } }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array)){
    if(array.length !==0){
    array.sort((a,b)=>a-b);
    return array[(array.length-1)];
  } }
  return 0;
}


exports.avg = function avg (array) {
  if (Array.isArray(array)){
    if(array.length !==0){
   return (array.reduce((acc,item)=>acc + item)) / (array.length);
  } }
  return 0;
}

