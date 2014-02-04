function forEach(func, arr){
  for(var i=0; i<arr.length; i++){
    func(arr[i], i, arr);
  }
  return arr;
}


