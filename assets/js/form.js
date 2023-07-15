const closeForm = document.getElementById('closeForm');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
const signButton = document.getElementById('signButton');
const LoginForm = document.getElementById('loginForm');
const signForm = document.getElementById('signForm');

closeForm.addEventListener('click',() =>{
    signup.style.display = 'none';
    login.style.display = 'none';
})

signButton.addEventListener('click',() =>{
    signup.style.display = 'block';
})

LoginForm.addEventListener('click',() =>{
    signup.style.display = 'none';
    login.style.display = 'block';
})

signForm.addEventListener('click',() =>{
    login.style.display = 'none';
    signup.style.display = 'block';
})