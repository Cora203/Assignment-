


function myFunction() {
  //This variable calles the id of the message
  var message = document.getElementById("message");
  
  //This will show the message
  message.className = "show";

  //When the message is shown it will be diseppear after 1 sec
  setTimeout(function(){ message.className = message.className.replace("show", ""); }, 1000);
  
  
  
}

