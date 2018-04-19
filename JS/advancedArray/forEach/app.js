

function forEach(array, callback){
  if(Array.isArray(array)){
    for(let i = 0; i< array.length; i ++){
      callback(i, array[i], array)
    }
  }
  return 'undefined'
}

function cb(index, el, array){
  console.log(index, el, array);
}

function halfValues(arr){
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val/2);
  })
  return newArr;
}

let test = [1,2,3,4];
console.log(halfValues([2,4,6]))
forEach(test, cb);