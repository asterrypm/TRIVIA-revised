// //<!DOCTYPE html>

// <html lang="en-us">

//   <head>

//     <meta charset="UTF-8">
//     <title>Document</title>

//   </head>

//   <body>

//     <div id="show-number"></div>

//     <br>

//     <button id="stop">Stop</button>
//     <button id="resume">Resume</button>

//     <!-- jQuery -->
//     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

//     <!-- Script -->
//     <script type="text/javascript">

//     //  Interval Demonstration
//     //  Set our number counter to 100.
//     var number = 100;

//     //  Variable that will hold our interval ID when we execute
//     //  the "run" function
//     var intervalId;

//     //  When the stop button gets clicked, run the stop function.
//     $("#stop").on("click", stop);

//     //  When the resume button gets clicked, execute the run function.
//     $("#resume").on("click", run);

//     //  The run function sets an interval
//     //  that runs the decrement function once a second.
//     //  *****BUG FIX******** 
//     //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
//     function run() {
//       clearInterval(intervalId);
//       intervalId = setInterval(decrement, 1000);
//     }

//     //  The decrement function.
//     function decrement() {

//       //  Decrease number by one.
//       number--;

//       //  Show the number in the #show-number tag.
//       $("#show-number").html("<h2>" + number + "</h2>");


//       //  Once number hits zero...
//       if (number === 0) {

//         //  ...run the stop function.
//         stop();

//         //  Alert the user that time is up.
//         alert("Time Up!");
//       }
//     }

//     //  The stop function
//     function stop() {

//       //  Clears our intervalId
//       //  We just pass the name of the interval
//       //  to the clearInterval function.
//       clearInterval(intervalId);
//     }

//     //  Execute the run function.
//     run();

//     </script>

//   </body>

// </html>
