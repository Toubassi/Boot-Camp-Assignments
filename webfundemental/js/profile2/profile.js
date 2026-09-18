function removeRequest(element) {
  element.closest(".conPeople").remove();
}

function editProfile() {
  var newName = prompt("Enter your new name:");
  document.getElementById("userName").textContent = newName;
}
