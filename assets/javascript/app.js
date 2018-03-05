//how to store questions, answer choices and correct answers (array of objects)



//Create a for loop to loop through array and jquery to create corresponding elements in the browser for corresponding questions and answers




//Score the quiz using jQuery selector

//display on scrore correct or incorrect for the user\

//countdown timers
var timeleft = 60;

function setup() {

	var timer = select ('#timer');
	timer.html(timeleft - counter);

	function timeIt () {
		counter ++;
		timer.html(timeleft - counter);
	}

	setInterval(timeIt, 1000);
}

