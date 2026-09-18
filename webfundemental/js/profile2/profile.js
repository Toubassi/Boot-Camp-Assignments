function removeRequest(element) {
  element.closest(".conPeople").remove();
}

// document.getElementById("userName")

function editProfile(){
var newName = prompt("Enter your new name:");
document.getElementById("userName").textContent = newName;
}