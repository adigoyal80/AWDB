function some(arr, callback){
  for(let i = 0; i < arr.length; i++){
    if (callback(arr[i], i, arr)){
      return true;
    }
  }
  return false;
}

function cb(el, index, array){
  if (el === 1){
    return true
  } else{
    return false
  }
}

let test = [0,2,3,4]
console.log(some(test, cb))