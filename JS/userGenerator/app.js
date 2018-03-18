//https://randomuser.me/api/

let url = "https://randomuser.me/api/",
 avatar = document.querySelector("#avatar"),
 fullName = document.querySelector("#fullname"),
 userName = document.querySelector("#username"),
 email = document.querySelector("#email"),
 city = document.querySelector("#city"),
 btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateUser)
  .catch(printError)
});

function updateUser(results){
  avatar.src = results.picture.large;
  fullName.innerText = results.name.first + ' ' + results.name.last;
  userName.innerText = results.login.username;
  email.innerText = results.email;
  city.innerText = results.location.city;
}

function parseJSON(res) {
  return res.json().then(function(parsedData){
    return parsedData.results[0];
  })
}

function handleErrors(request) {
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
}

function printError(error) {
  console.log(error);
}




