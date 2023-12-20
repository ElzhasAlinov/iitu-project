window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
function clearForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("cityBirth").value = "";
    document.getElementById("region").value = "";
    document.getElementById("country").value = "";
    document.getElementById("homeAddress").value = "";
    document.getElementById("phoneNumber").value = "";
}
let registeredUsers = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let userData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value
    };

    registeredUsers.push(userData);
    console.log('User Registered:', userData);
    document.getElementById('registrationForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let userLoginData = {
        email: document.getElementById('loginEmail').value,
        password: document.getElementById('loginPassword').value
    };

    let userExists = registeredUsers.some(function(user) {
        return user.email === userLoginData.email && user.password === userLoginData.password;
    });

    if (userExists) {
        alert('You have successfully logged in!');
    } else {
        alert('Incorrect email or password. Please try again.');
    }
    document.getElementById('loginForm').reset();
});

document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert('You have been logged out.');
});
