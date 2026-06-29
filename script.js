//your JS code here. If required.
const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Show existing user button if credentials exist
function checkExistingUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
}

checkExistingUser();

// Submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkExistingUser();

  alert(`Logged in as ${user}`);
});

// Existing user login
existingBtn.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});
