

window.onload = function () {
    // TODO:: Do your initialization job
    var contents = document.querySelector('#contents');
	var stats = document.querySelector("#stats");
    var percentage = document.querySelector("#percentage");
    var makeButton = document.querySelector('#makebutton');
    var missButton = document.querySelector('#missbutton');
    var editButton = document.querySelector('#editbutton');
    var resetButton = document.querySelector('#resetbutton');
    
    var incrementor = 1;
    
	var numMakes = 0;
	var numMisses = 0;
	
	var updateText = function () {
		var numTotal = numMakes + numMisses;
		//numTotal = numTotal == 0? 1 : numTotal;
		var numPercentage = (numMakes / (numTotal == 0? 1 : numTotal)) * 100
		var numPercentageTrim = numPercentage.toFixed(2);
		
		stats.innerHTML = numMakes + "/" + numTotal;
		percentage.innerHTML = numPercentageTrim + "%";
	}	
	
	var enterEditMode = function () {
		editButton.classList.remove("btn-warning");
		editButton.classList.add("btn-primary");
		
		editButton.innerHTML = "Save";
		makeButton.innerHTML = "Make -1";
		missButton.innerHTML = "Miss -1";

		incrementor = -1;
	}
	
	var exitEditMode = function () {
		editButton.classList.remove("btn-primary");
		editButton.classList.add("btn-warning");
		
		editButton.innerHTML = "Edit";
		makeButton.innerHTML = "Make";
		missButton.innerHTML = "Miss";
		
		incrementor = 1;
	}

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back") {
        	try {
        		tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
        }
    });

	contents.addEventListener("click", function(){
		updateText();
	})
    
    makeButton.addEventListener("click", function(){
    	numMakes += incrementor;
    	numMakes = numMakes < 0? 0 : numMakes;
    });
    
    missButton.addEventListener("click", function(){
    	numMisses += incrementor;
    	numMisses = numMisses < 0? 0 : numMisses;
    });
    
    editButton.addEventListener("click", function(){
    	if(editButton.innerHTML == "Edit") {
    		enterEditMode();
    	} else {
    		exitEditMode();
    	}
    });
    
    resetButton.addEventListener("click", function() {
    	if(editButton.innerHTML == "Save") {
    		exitEditMode();
    	}
    	
    	numMakes = 0;
    	numMisses = 0;
    });
};


