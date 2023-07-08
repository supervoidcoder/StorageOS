const submit = document.getElementById("submit");
const uname = document.getElementById("username");
const pword = document.getElementById("password");

document.addEventListener("load", function() {
  alert("JavaScript is working!");
});

submit.addEventListener("click", function() {
  alert(`Username: ${uname.value}\nPassword: ${pword.value}`);
});
