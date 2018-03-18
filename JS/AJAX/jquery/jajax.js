$('#btn').click(function(){
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: "json"
  })
  .done(function(data){
    addp(data);
  })
  .fail(function(){
    alert("Oh no it failed");
  })
});


function addp(data){
  $("p").text(data[0]);
}

