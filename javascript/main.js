// Get the input value
document.querySelector("#form").addEventListener('submit',function(e){
  var input = document.querySelector("input").value;
  // pushToDOM(input);
  
  e.preventDefault();
// Process the data 
  var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";

  // AJAX request
	var AJAXGiphyCall = new XMLHttpRequest();

	AJAXGiphyCall.open( 'GET', url );
	AJAXGiphyCall.send();

	AJAXGiphyCall.addEventListener('load', function(e){
		 var data = e.target.response;
		 pushToDOM(data);

	});

});

// Display the input
function pushToDOM(input) {

	// Cleans up data into objects
	var response = JSON.parse(input);

	var imageURLs = response.data; 
	var container = document.querySelector(".js-container");

	imageURLs.forEach(function(image){

		var src = image.images.fixed_width.url;
		
  		container.innerHTML += "<img src='" + src + "'class='container-image'>";

	});

	
}
