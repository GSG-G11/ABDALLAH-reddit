const signUpBtn = document.querySelector('.signup');
const closeSignUp = document.querySelector('#close-signup');
const signupForm = document.querySelector('#signup-form');

const signUpContainer = document.querySelector('#signup-container');

/// /////////////////////////////////////////////////////////////////
const signInBtn = document.querySelector('.login');
const closeSignIn = document.querySelector('#close-signin');
const signinForm = document.querySelector('#signin-form');

const signInContainer = document.querySelector('#signin-container');
/// /////////////////////////////////////////////////////////////////
signUpBtn.addEventListener('click', () => {
  signUpContainer.style.display = 'flex';
  signInContainer.style.display = 'none';
});
closeSignUp.addEventListener('click', () => {
  signUpContainer.style.display = 'none';
});

/// ////////////////////////////////////////////
signInBtn.addEventListener('click', () => {
  signInContainer.style.display = 'flex';
  signUpContainer.style.display = 'none';
});
closeSignIn.addEventListener('click', () => {
  signInContainer.style.display = 'none';
});
/// ////////////////////////////////////////////
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signUpData = {
    userName: e.target.userName.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };
  const reqDetails = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpData),
  };
  fetch('/signup', reqDetails)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
/// //////////////////////////////////////
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signInData = {
    userName: e.target.userName.value,
    password: e.target.password.value,
  };
  const reqDetails = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signInData),
  };
  fetch('/signin', reqDetails)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

fetch('/posts')
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
