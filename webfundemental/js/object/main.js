function changeWord(here) {
  if (here.innerText === "Logout") here.innerText = "Login";
  else here.innerText = "Logout";
}

function remove(word) {
  word.remove();
}
