// index1
// -------------------------------------------------------
// indexpage2
function validateForm(e) {
  e.preventDefault();
  var email = document.loginForm.email.value;
  var password = document.loginForm.password.value;
  if (email.length == 0) return alert(`email is required`);
  if (password.length < 5) return alert(`password length should more than 5`);
  //   if (email.length == 0 && password.length < 5) return alert(`hello`);
}
// document.getElementsByClassName("signin2bt").onclick= function
//  document.getElementById("myButton").onclick = function () {
//         location.href = "www.yoursite.com";
//     };
