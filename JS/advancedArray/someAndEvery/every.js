function every(arr, cb){
  for(var i = 0; i < arr.length; i++){
    if(!cb(arr[i], i, arr)){
      return false
    }
  }
  return true
}

function callback(el, index, array){
  if (el === 1){
    return true
  } else{
    return false
  }
}

let test = [1,1,1,1]
console.log(every(test, callback))