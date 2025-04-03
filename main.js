let email, password, login;

document.getElementById("Login").onclick = function() {
    email = document.getElementById("Email").value;
    password = document.getElementById("Password").value;
    if (email && password) {
        alert("You're logged in");
    } else if (!email && password) {
        alert('Please enter email');
    } else if (email && !password) {
        alert('Please enter password')
    } else {
        alert('Please enter your email and password')
    }
} 