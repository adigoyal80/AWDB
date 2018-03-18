/*
for each function
*/


//print array values doubled
var arr = [1,2,3,4,5,6];


//   function double(arr) {
//     for (var i = 0; i < arr.length; i++) {
//       console.log(arr[i] *2);
//     }
//   }

// double(arr);

forEach(arr, function(number) {
  console.log(number * 2);
})

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}



double(arr);