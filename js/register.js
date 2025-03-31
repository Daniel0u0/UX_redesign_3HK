function validateForm() {
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const phonePattern = /^\d{8}$/; // Hong Kong phone numbers are 8 digits
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let isValid = true;
  
    if (!phonePattern.test(phone)) {
      phoneError.textContent = 'Phone number must be 8 digits';
      isValid = false;
    } else {
      phoneError.textContent = '';
    }
  
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    return isValid; // Prevent submission if invalid
  }