window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const signUpLink = document.getElementById('signUp');
    const logOutLink = document.getElementById('logOut');
  
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const email = emailInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;
  
      
    console.log('Login submitted:');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
});
  

forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault(); 
  
      
    console.log('Forgot password link clicked');
});
  

signUpLink.addEventListener('click', function(event) {
    event.preventDefault(); 
  
     
    console.log('Sign Up link clicked');
});
  

logOutLink.addEventListener('click', function(event) {
    event.preventDefault(); 
  

    console.log('Log Out link clicked');
});
  

});
  