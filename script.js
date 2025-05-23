// Event Handling
const mainBtn = document.getElementById('main-btn');
const colorBtn = document.getElementById('color-btn');
const galleryImg = document.getElementById('gallery-img');
const prevImg = document.getElementById('prev-img');
const nextImg = document.getElementById('next-img');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('email-feedback');
const passwordFeedback = document.getElementById('password-feedback');
const signupForm = document.getElementById('signup-form');

// 1. Button click
mainBtn.addEventListener('click', () => {
    mainBtn.textContent = 'Clicked!';
});

// 2. Hover effects
mainBtn.addEventListener('mouseover', () => {
    mainBtn.style.background = '#ffc107';
});
mainBtn.addEventListener('mouseout', () => {
    mainBtn.style.background = '';
});

// 3. Keypress detection
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        alert('You pressed Enter!');
    }
});

// Bonus: Double-click secret action
mainBtn.addEventListener('dblclick', () => {
    alert('🎉 Secret double-click action!');
});

// Interactive Elements
// Button that changes color
colorBtn.addEventListener('click', () => {
    colorBtn.style.background = colorBtn.style.background === 'purple' ? '#007bff' : 'purple';
    colorBtn.textContent = colorBtn.style.background === 'purple' ? 'Purple!' : 'Change My Color';
});

// Image gallery
const images = [
    'https://images.pexels.com/photos/32153042/pexels-photo-32153042/free-photo-of-happy-border-collie-in-poprad-landscape.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/32196729/pexels-photo-32196729/free-photo-of-landmark-81-tower-over-saigon-river-skyline.jpeg',
    'https://images.pexels.com/photos/32204740/pexels-photo-32204740/free-photo-of-colorful-colonial-architecture-in-campeche-mexico.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
];
let imgIndex = 0;
prevImg.addEventListener('click', () => {
    imgIndex = (imgIndex - 1 + images.length) % images.length;
    galleryImg.src = images[imgIndex];
});
nextImg.addEventListener('click', () => {
    imgIndex = (imgIndex + 1) % images.length;
    galleryImg.src = images[imgIndex];
});

// Tabs
function showTab(tabNum) {
    tabContents.forEach((content, idx) => {
        content.style.display = (idx + 1 === tabNum) ? '' : 'none';
    });
    tabBtns.forEach((btn, idx) => {
        btn.classList.toggle('active', idx + 1 === tabNum);
    });
}
tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showTab(Number(btn.dataset.tab));
    });
});

// Form Validation
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePassword(password) {
    return password.length >= 8;
}
emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        emailFeedback.textContent = 'Invalid email format';
    } else {
        emailFeedback.textContent = '';
    }
});
passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
        passwordFeedback.textContent = 'Password must be at least 8 characters';
    } else {
        passwordFeedback.textContent = '';
    }
});
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    if (!validateEmail(emailInput.value)) {
        emailFeedback.textContent = 'Invalid email format';
        valid = false;
    }
    if (!validatePassword(passwordInput.value)) {
        passwordFeedback.textContent = 'Password must be at least 8 characters';
        valid = false;
    }
    if (valid) {
        alert('Form submitted successfully!');
        signupForm.reset();
        emailFeedback.textContent = '';
        passwordFeedback.textContent = '';
    }
});
