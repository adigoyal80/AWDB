var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let xhrBtn    = document.querySelector('#xhr'),
    fetchBtn  = document.querySelector('#fetch'),
    jqueryBtn = $('#jquery'),
    axiosBtn  = document.querySelector('#axios',)
    quote     = document.querySelector('#quote')


  xhrBtn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
      if (XHR.readyState == 4 && XHR.status == 200) {
        var res = JSON.parse(XHR.responseText)
 
        updateQuote(res[0]);
      } 
      else {
        console.log("there was a problem", XHR.status)
      }
    }

    XHR.open("GET", url);
    XHR.send()
  })

  fetchBtn.addEventListener("click", function(){
    fetch(url)
    .then(errorHandle)
    .then(parseJson)
    .then(updateQuote)
    .catch(printError)
  })

  jqueryBtn.click(function(){
    $.getJSON(url)
    .done(function(data){
      updateQuote(data[0])
    })
    .fail(function(){
      console.log("Problem")
    })
  })

  axiosBtn.addEventListener("click", function(){
    axios.get(url)
    .then(function(res){
      updateQuote(res.data[0])
    })
    .catch(function(){
      console.log("ERR")
    })
  })

  function errorHandle(request){
    if (!request.ok){
      throw Error(request.status)
    }
    return request
  }

  function parseJson(data){
    return data.json().then(function(res){
      return res[0]
    })
  }

  function printError(error) {
    console.log(error)
  }

  function updateQuote(quoteText){
    console.log(quoteText)
    quote.innerText = quoteText
  }