function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Invalid email format';
    } else {
      emailError.textContent = '';
    }
  }
  
  function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
    } else {
      passwordError.textContent = '';
    }
  }