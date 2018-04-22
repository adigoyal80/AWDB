
// var arr = [1,2,3,4,5]

// let res = arr.reduce(function(acc, nv){
//   console.log(acc, nv)
//   return acc += '' + nv;
// }, 'the numbers are: ')



var arr = [5,4,1,4,5];

let res = arr.reduce(function(accumulator, nextValue){
  if(nextValue in accumulator){
    accumulator[nextValue]++;
  } else {
    accumulator[nextValue] = 1;
  }
  return accumulator;
},{})

console.log(res)