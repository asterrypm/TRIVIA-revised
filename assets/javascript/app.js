	var timeLeft = 180;	
	var startToggle = 0;
	var questions =  [{
		question: "Where can the most active volcano in the world be found?",
        choices: ["Kilauea Volcano - United States", "Etna Volcano - Italy", "Ambrym Volcano - Vanuatu", "Eyjafjallajokull Volcano - Iceland"],
        correct: 0
        
    }, {
        question: "Where can you see the painting: 'Guernica'?",
        choices: ["Colombia", "Brazil", "Mexico", "Spain"],
        correct: 3
        
    }, {
        question: "Where can you find the tallest waterfall?",
        choices: ["Gullfoss - Iceland", "Yosemite Falls - United States", "Angel Falls - Venezuela", "Iguazu Falls - Brazil"],
        correct: 2

    }, {
        question: "What country has the largest population of Portuguese speakers?",
        choices: ["Brazil", "Portugal", "Argentina", "Spain"],
        correct: 0

    }, {
        question: "What country has the most deadly animals?",
        choices: ["Namibia", "Panama", "Australia", "Honduras"],
        correct: 2

    }, {
        question: "Ranked as one of the best dives in the entire world, where can you go scuba diving with Manta Rays?",
        choices: ["Palau - Micronesia", "Great Barrier Reef- Australia", "Jaco Beach - Costa Rica", "Big Island - United States"],
        correct: 3

    }, {
        question: "In what country would you find the ancient structure of Machu Picchu?",
        choices: ["Peru", "Chile", "Mexico", "Cuba"],
        correct: 0

    }, {
        question: "Fried Tarantulas are considered a delicacy in which country?",
        choices: ["Vietnam", "China", "North Korea", "Cambodia"],
        correct: 3

    }, {
        question: "What country has the most liberal recreational drug policy?",
        choices: ["Netherlands", "Portugal", "Switzerland", "Czech Republic"],
        correct: 1

    },  {
        question: "What country produces the most oil?",
        choices: ["Russia", "United States", "Iran", "Saudi Arabia"],
        correct: 3

    },  {
        question: "What country is ranked as the healthiest overall based on factors like health risks, life expectancy, and causes of death?",
        choices: ["Singapore", "Chile", "Italy", "Australia"],
        correct: 2

    },  {
        question: "In what city is this underwater hotel found?",
        choices: ["Dubai", "Cairns", "Orlando", "Papeete"],
        correct: 0

    },  {
        question: "Where can you find Christ the Redeemer statue?",
        choices: ["Spain", "Brazil", "Mexico", "Italy"],
        correct: 1

    },  {
        question: "Which country produces the most coffee?",
        choices: ["United States", "South Africa", "Mexico", "Brazil"],
        correct: 3

    },  {
        question: "In what country is the exotic drink of Scorpion Vodka famous?",
        choices: ["Finland", "Russia", "England", "Netherlands"],
        correct: 2

    },  {
        question: "In what country are the most languages spoken?",
        choices: ["India", "China", "France", "Papau New Guinea"],
        correct: 3

    },  {
        question: "Which country is the largest consumer of coffee?",
        choices: ["Serbia", "Finland", "Colombia", "China"],
        correct: 1

    },  {
        question: "Where is the tallest (highest altitude) mountain?",
        choices: ["Mauna Kea - Hawaii, US", "Chimborazo - Ecuador", "K2 - China/Pakistan border", "Mt. Everest - China/Nepal border"],
        correct: 3

    },  {
        question: "According to the latest 'World Happiness Report' released in 2017, which measures how satisfied adults are with their lives, which country ranks higest?",
        choices: ["Norway", "Switzerland", "New Zealand", "Denmark"],
        correct: 0

    },  {
        question: "Which country has had the honor of hosting the most Olympic Games?",
        choices: ["France", "United States", "Russia", "Japan"],
        correct: 1

	}];

	var counter = {
		correct: 0,
		incorrect: 0
	}


            for (var i = 0; i < questions.length; i++) {
            	var question = $('<div>');
            	question.text(questions[i].question);
            	var wrapper = $('<p>');
            	question.append(wrapper);
            	for (var j = 0; j < questions[i].choices.length; j++){
            		var radio = $('<input type="radio">');  
            		radio.attr("name","question" + i);  
            		radio.attr("value", questions[i].choices[j]);  		
            		wrapper.append(radio);
            		var label = $('<label>');
            		label.text(questions[i].choices[j]);
            		wrapper.append(label);

            	}
            	
                $("#question_div").append(question);
               
            }

            $("#submit_button").click(score);
            $("#start").click(run);
            function score(){
            	console.log('trigger');
				var selected = $('input[type="radio"]:checked');
            	for (var i = 0; i<selected.length; i++){
            		console.log ($(selected[i]).attr("value"));
            		var response = $(selected[i]).attr("value");
            		var questionID = $(selected[i]).attr("name");
            		questionID = questionID.replace("question","");
            		console.log (questions[questionID]);
            		var choices = questions[questionID].choices
            		var answerIndex = questions[questionID].correct
            		var cAnswer = choices[answerIndex]
            		console.log(cAnswer);

            		//Comparision between response and cAnswer
            		if (response === cAnswer) {
            			counter.correct++;
            		} else {
            		 	counter.incorrect++;
            		 	} 

            //Increment the counter (if then else to increment appropriately)

            	}
            	$(".correct").html("Correct:" + " " + counter.correct);
            	$(".incorrect").html("Incorrect:" + " " + counter.incorrect);
    		}

	    		$("#slideshow > div:gt(0)").hide();

				setInterval(function() { 
				  $('#slideshow > div:first')
				    .fadeOut(1000)
				    .next()
				    .fadeIn(1000)
				    .end()
				    .appendTo('#slideshow');
				},	3000);
				
    		//countdown timer

			 
    		//how to convert the format of seconds to minutes and seconds MM:SS
			 function convertSeconds(s) {
			 	s = timeLeft
				var min = Math.floor (s/60);
				var sec = s % 60;
				return ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
			 }

			 //how do I add the word Timer when the timer starts?
			    function decrement() {
			      timeLeft--;
			      $("#timer").html("<p>" + timeLeft + "</p>");
			      if (timeLeft === 0) {
			        clearInterval(decrement);
			        score();
			      }
			    };
			    
			    //this function prevents the Start button resetting the interval by adding a boolean.
			    function run() {
			       if(startToggle == 0) {
			       	  setInterval(decrement, 1000);
			       	  startToggle++;
			       }
			    };






