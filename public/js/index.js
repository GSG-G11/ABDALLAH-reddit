const signUp = document.querySelector('.signup');
const closeSignUp = document.querySelector('.close');
const signUpContainer = document.querySelector('.signup-container');
signUp.addEventListener('click', () => {
  signUpContainer.style.display = 'flex';
});
closeSignUp.addEventListener('click', () => {
  signUpContainer.style.display = 'none';
});
