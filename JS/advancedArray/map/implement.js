

function map(array,callback) {
  let newArray = [];
  array.forEach(function(el){
    newArray.push(callback(el))
  })
  return newArray;
}


let test = [1,2,3];
let result = map(test, function(el){
  return el * 2
})

console.log(result)