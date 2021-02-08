

function fullName() {
  var firstName = window.prompt("Please enter your first name: ");
  var lastName = window.prompt("please enter your last name: ");
  return("First Name: "+ firstName + ", " + "Last Name: " + lastName);
}

document.writeln(fullName(),"</br>");
