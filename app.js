// ========== ACCOUNT DATA ==========
const accountData = {
    username: 'tyla',
    password: 'demo123',
    firstName: 'Tyla',
    lastName: 'Martin',
    balance: 253070,
    currency: '€',
    accountNumber: 'FR76 3000 3007 3100 0000 1234 5',
    accountType: 'Compte Courant',
    lastTransactionDate: 'Décembre 2025',
    lastTransactionAmount: 15500
};

// ========== AUTHENTICATION ==========
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validate credentials
    if (username === accountData.username && password === accountData.password) {
        errorMessage.textContent = '';
        
        // Store session
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        
        // Show dashboard
        showDashboard();
    } else {
        errorMessage.textContent = '❌ Identifiant ou mot de passe incorrect';
        document.getElementById('password').value = '';
    }
}

function handleLogout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        
        document.getElementById('authContainer').style.display = 'flex';
        document.getElementById('dashboardContainer').style.display = 'none';
        document.getElementById('loginForm').reset();
        document.getElementById('errorMessage').textContent = '';
    }
}

// ========== DASHBOARD DISPLAY ==========
function showDashboard() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
    
    // Populate dashboard data
    const fullName = `${accountData.firstName} ${accountData.lastName}`;
    const today = new Date();
    const dateString = today.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // User greeting
    const greeting = document.getElementById('userGreeting');
    greeting.textContent = `👤 ${fullName}`;
    
    // Welcome message
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `Bienvenue ${accountData.firstName}! Vous êtes connecté(e) de manière sécurisée. Consultez vos informations de compte ci-dessous.`;
    
    // Account info
    document.getElementById('fullName').textContent = fullName;
    
    // Balance display
    const balance = document.getElementById('balance');
    balance.textContent = `${accountData.balance.toLocaleString('fr-FR')} ${accountData.currency}`;
    
    document.getElementById('balanceDate').textContent = dateString;
    
    // Last transaction
    document.getElementById('transactionDate').textContent = accountData.lastTransactionDate;
    document.getElementById('transactionAmount').textContent = `+${accountData.lastTransactionAmount.toLocaleString('fr-FR')} ${accountData.currency}`;
}

// ========== NOTIFICATIONS ==========
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ========== PAGE LOAD CHECK ==========
window.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
        showDashboard();
    } else {
        document.getElementById('authContainer').style.display = 'flex';
        document.getElementById('dashboardContainer').style.display = 'none';
    }
});

// ========== SESSION SECURITY ==========
// Prevent back button from showing login form
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.reload();
        }
    }
});

// Warn user about session timeout
let inactivityTimeout;
const INACTIVITY_TIME = 30 * 60 * 1000; // 30 minutes

function resetInactivityTimeout() {
    clearTimeout(inactivityTimeout);
    
    inactivityTimeout = setTimeout(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            showNotification('⏰ Session expirée pour raisons de sécurité');
            handleLogout();
        }
    }, INACTIVITY_TIME);
}

// Reset timeout on user activity
document.addEventListener('mousemove', resetInactivityTimeout);
document.addEventListener('keypress', resetInactivityTimeout);
document.addEventListener('click', resetInactivityTimeout);

// Initialize timeout on page load
window.addEventListener('DOMContentLoaded', resetInactivityTimeout);