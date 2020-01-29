
// Get the input value

document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  pushToDOM(input);

  
});


// Show the input

function pushToDOM(input) {

	var container = document.querySelector(".js-container");
  	container.innerHTML = input;


}
