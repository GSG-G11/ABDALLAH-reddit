const signUpBtn = document.querySelector('.signup');
const closeSignUp = document.querySelector('.close');
const signupForm = document.querySelector('.signup-form');

const signUpContainer = document.querySelector('.signup-container');
signUpBtn.addEventListener('click', () => {
  signUpContainer.style.display = 'flex';
});
closeSignUp.addEventListener('click', () => {
  signUpContainer.style.display = 'none';
});

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
