// findindex returns the index of the first element in the array for which the callback returns a truthy value

function findIndex(arr, callback) {
  for( var i = 0; i < arr.length; i++){
    if(callback(arr[i], i , arr)){
      return i;
    }
  }
  return -1;
}

var array = [1,2,3,4]

var index = findIndex(array, function (el){
  return el === 5;
})

console.log(index)