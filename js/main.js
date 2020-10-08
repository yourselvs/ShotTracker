
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    // Sample code
    var textbox = document.querySelector('#textbox');
    textbox.addEventListener("click", function(){
    	textbox.innerHTML = textbox.innerHTML == "Basic" ? "Sample" : "Basic";
    });
    
    var missbox = document.querySelector('#missbox');
    missbox.addEventListener("click", function(){
    	missbox.innerHTML = missbox.innerHTML == "Miss" ? "Make" : "Miss";
    });
};
