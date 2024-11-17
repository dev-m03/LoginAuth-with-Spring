document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Fade-in effect for the signup form
    signupForm.style.opacity = '0';
    setTimeout(() => {
        signupForm.style.transition = 'opacity 1s ease-in-out';
        signupForm.style.opacity = '1';
    }, 200);

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission for validation

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            // Show an error message
            errorMessage.textContent = 'All fields are required!';
            signupForm.classList.add('shake');
            setTimeout(() => signupForm.classList.remove('shake'), 500);
        } else if (!validateEmail(email)) {
            // Email validation
            errorMessage.textContent = 'Invalid email address!';
            signupForm.classList.add('shake');
            setTimeout(() => signupForm.classList.remove('shake'), 500);
        } else if (password !== confirmPassword) {
            // Password match validation
            errorMessage.textContent = 'Passwords do not match!';
            signupForm.classList.add('shake');
            setTimeout(() => signupForm.classList.remove('shake'), 500);
        } else {
            // Clear error message and proceed
            errorMessage.textContent = '';
            signupForm.submit();
        }
    });

    function validateEmail(email) {
        // Regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
