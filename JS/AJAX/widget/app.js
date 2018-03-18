
var button = document.querySelector("#btn");
var price =  document.querySelector("#price");
var currency = "USD";


function updatePrice () {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200){
      res = JSON.parse(XHR.responseText);
      price.innerText = res.bpi[currency].rate + ' ' + currency;
    }
  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
}

button.onclick = function(){
  updatePrice();
}

window.onload = function(){
  updatePrice();
}