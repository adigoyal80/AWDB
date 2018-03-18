var url = "http://aws.random.cat/meow";

var btn = $('button');
var img = $('img');



btn.click(function(){
  $.getJSON(url)
  .done(function(data){
    console.log(data);
    img.attr('src', data.file)
  })
  .fail(function(){
    console.log("PROBLEM!");
  })
});