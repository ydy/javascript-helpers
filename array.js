function forEach(func, arr){
  for(var i=0; i<arr.length; i++){
    func(arr[i], i, arr);
  }
  return arr;
}

function map(func, arr){
  var result = [];
  for (var i = 0; i < arr.length; i++){
    result[i] = func(arr[i], i, arr)
  }
  return result;
}

function every(func, arr){
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])===false) return false;
   }
  return true;
}



module.exports = {
  forEach: forEach,
  map: map,
  every: every
}


