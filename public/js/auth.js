// Check if user is already logged in
if(localStorage.getItem('currentUser')) {
    window.location.href = '/index.html';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showError('Please enter both username and password');
        return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Store current user
        localStorage.setItem('currentUser', username);
        window.location.href = '/index.html';
    } else {
        showError('Invalid username or password');
    }
}

function showRegister() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showError('Please enter both username and password to register');
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username already exists
    if (users.some(u => u.username === username)) {
        showError('Username already exists');
        return;
    }

    // Add new user
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    // Create user's transaction array
    localStorage.setItem(`transactions_${username}`, JSON.stringify([]));
    
    // Log in the new user
    localStorage.setItem('currentUser', username);
    window.location.href = '/index.html';
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.style.display = 'block';
    errorDiv.textContent = message;
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
}
