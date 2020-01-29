
// Get the input value

document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  pushToDOM(input);

  
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

   var input = document.querySelector("input").value;

  // Push to DOM if the key ENTER is pressed
  if(e.which === 13) {
    pushToDOM(input);
  }

});


// Display the input

function pushToDOM(input) {

	var container = document.querySelector(".js-container");
  	container.innerHTML = input;


}
