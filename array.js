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
    if(func(arr[i]) === false) return false;
   }
  return true;
}

function some(func, arr){
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i]) === true) return true;
  }
  return false;
}

function first(arr){
  return arr[0]
}

function last(arr){
  return arr[arr.length - 1]
}

function rest(arr){
  var result = [];
  for(var i = 1; i < arr.length; i++){
    result[i-1] = arr[i];
  }
  return result;
}

module.exports = {
  forEach: forEach,
  map: map,
  every: every,
  some: some,
  first: first,
  last: last,
  rest: rest
}


