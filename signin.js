const submit = document.getElementById("submit");
const uname = document.getElementById("username");
const pword = document.getElementById("password");

submit.addEventListener("click", function() {
  //alert(`Username: ${uname.value}\nPassword: ${pword.value}`);
  const save_pass = prompt("Save username and password?");
  if (typeof save_pass !=== "null") {
    // selected 'OK'
    localStorage.setItem("user", [uname.value, pword.value]);
  } else {
    // selected 'Cancel' or closed page or reloaded page
  }
});

window.open("https://supervoidcoder.github.io/StorageOS/", "_self")
