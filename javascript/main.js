// Get the input value
document.querySelector("#form").addEventListener('submit',function(e){
  var input = document.querySelector("input").value;
  pushToDOM(input);
  
  e.preventDefault();
});

// Display the input
function pushToDOM(input) {
	var container = document.querySelector(".js-container");
  container.innerHTML = input;
}
