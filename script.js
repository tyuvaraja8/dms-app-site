const correctPassword = "mysecurepass"; // Replace with your password or hash logic

document.getElementById("auth-form").addEventListener("submit", function (e) {
e.preventDefault();
const entered = document.getElementById("password").value;
const errorMsg = document.getElementById("error-msg");

if (entered === correctPassword) {
document.getElementById("auth-form").style.display = "none";
document.getElementById("download-section").style.display = "block";
errorMsg.style.display = "none";
} else {
errorMsg.style.display = "block";
}
});