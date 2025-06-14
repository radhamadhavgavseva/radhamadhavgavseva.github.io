// Language Toggle Functionality
let isHindi = false;

function toggleLanguage() {
    isHindi = !isHindi;
    const enElements = document.querySelectorAll('.en');
    const hiElements = document.querySelectorAll('.hi');
    const langSwitch = document.getElementById('langSwitch');

    enElements.forEach(el => el.style.display = isHindi ? 'none' : 'inline');
    hiElements.forEach(el => el.style.display = isHindi ? 'inline' : 'none');
    langSwitch.textContent = isHindi ? 'English' : 'हिन्दी';
}

// Login Modal Functionality
function openLoginModal(type) {
    const modal = document.getElementById(`${type}LoginModal`);
    modal.style.display = 'block';
}

function closeLoginModal(type) {
    const modal = document.getElementById(`${type}LoginModal`);
    modal.style.display = 'none';
}

// Handle Public Login Form Submission
document.getElementById('publicLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('publicUsername').value;
    const password = document.getElementById('publicPassword').value;

    // Simple validation (replace with actual authentication logic)
    if (username && password) {
        alert(isHindi ? 'पब्लिक लॉगिन सफल!' : 'Public Login Successful!');
        closeLoginModal('public');
    } else {
        alert(isHindi ? 'कृपया सभी फ़ील्ड भरें!' : 'Please fill all fields!');
    }
});

// Handle Admin Login Form Submission
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    // Simple validation (replace with actual authentication logic)
    if (username && password) {
        alert(isHindi ? 'एडमिन लॉगिन सफल!' : 'Admin Login Successful!');
        closeLoginModal('admin');
    } else {
        alert(isHindi ? 'कृपया सभी फ़ील्ड भरें!' : 'Please fill all fields!');
    }
});

// Close Modal When Clicking Outside
window.onclick = function(event) {
    const publicModal = document.getElementById('publicLoginModal');
    const adminModal = document.getElementById('adminLoginModal');
    if (event.target == publicModal) {
        publicModal.style.display = 'none';
    }
    if (event.target == adminModal) {
        adminModal.style.display = 'none';
    }
};
