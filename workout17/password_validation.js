function checkPassword(password) {
    return password.length > 7 ? 
        /[A-Z]/.test(password) ? "Very Strong" : "Strong" : "Weak";
}