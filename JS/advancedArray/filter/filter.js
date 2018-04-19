function filter(array, callback){
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(!!callback(array[i], i, array)){
      newArr.push(array[i]);
    }
  }
  return (newArr.length === 0 ? undefined : newArr)
}

