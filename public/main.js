function test() {
  console.log("checkbox");
}

function check(id) {
  const checkboxLabel = document.getElementById(`item${id}`);
  const checkbox = document.getElementById(id);
  if (checkbox.checked) {
    checkboxLabel.classList.add("item-completed");
  } else {
    checkboxLabel.classList.remove("item-completed");
  }
}
