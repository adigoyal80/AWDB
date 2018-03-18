function countDown(time) {
  var count = time;
  setInterval(function() {
    if(count != 0){
      console.log('Timer: ' + count)
      count--
    } else {
      console.log('Ring Ring Ring!!!')
      clearInterval(this)
    }
  }, 1000)
}

countDown(3)