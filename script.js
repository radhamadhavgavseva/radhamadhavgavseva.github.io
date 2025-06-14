const translations = {
    en: {
        'lang-toggle': 'Switch to Hindi',
        'home-btn': 'Home',
        'gems-btn': 'Gems of Society',
        'donation-btn': 'Donation',
        'auth-btn': 'Authentication',
        'about-btn': 'About Us',
        'works-btn': 'Works',
        'gallery-btn': 'Gallery',
        'blog-btn': 'Blogs & Posts',
        'contact-btn': 'Contact Us',
        'help-btn': 'Help',
        'signin_login-btn': 'Signin/Login',
        'footer-org': '©2025 Radha Maadhav Gav Seva Evam Jan Kalyaan Samiti',
        'footer-address': 'Address: Village Akauri, Post Rampur, Tehsil Naigarhi, District Mauganj, Madhya Pradesh, India, PIN-486340',
        'footer-contact': 'Contact: +91 7389597674, +91 7773059344',
        'footer-email': 'Email: santrajsingh2025@gmail.com'
    },
    hi: {
        'lang-toggle': 'Switch to English',
        'home-btn': 'होम',
        'gems-btn': 'समाज के रत्न',
        'donation-btn': 'दान',
        'auth-btn': 'प्रमाणीकरण',
        'about-btn': 'हमारे बारे में',
        'works-btn': 'कार्य',
        'gallery-btn': 'गैलरी',
        'blog-btn': 'ब्लॉग और पोस्ट',
        'contact-btn': 'संपर्क करें',
        'help-btn': 'सहायता',
        'signin_login-btn': 'साइन इन/लॉगिन',
        'footer-org': '©2025 राधा माधव गव सेवा एवम जन कल्याण समिति',
        'footer-address': 'पता: ग्राम अकौरी, पोस्ट रामपुर, तहसील नईगढ़ी, जिला मौगंज, मध्य प्रदेश, भारत, पिन-486340',
        'footer-contact': 'संपर्क: +91 7389597674, +91 7773059344',
        'footer-email': 'ईमेल: santrajsingh2025@gmail.com'
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    document.getElementById('lang-toggle').textContent = translations[currentLang]['lang-toggle'];
    document.querySelector('nav button:nth-child(1)').textContent = translations[currentLang]['home-btn'];
    document.querySelector('nav button:nth-child(2)').textContent = translations[currentLang]['gems-btn'];
    document.querySelector('nav button:nth-child(3)').textContent = translations[currentLang]['donation-btn'];
    document.querySelector('nav button:nth-child(4)').textContent = translations[currentLang]['auth-btn'];
    document.querySelector('nav button:nth-child(5)').textContent = translations[currentLang]['about-btn'];
    document.querySelector('nav button:nth-child(6)').textContent = translations[currentLang]['works-btn'];
    document.querySelector('nav button:nth-child(7)').textContent = translations[currentLang]['gallery-btn'];
    document.querySelector('nav button:nth-child(8)').textContent = translations[currentLang]['blog-btn'];
    document.querySelector('nav button:nth-child(9)').textContent = translations[currentLang]['contact-btn'];
    document.querySelector('nav button:nth-child(10)').textContent = translations[currentLang]['help-btn'];
    document.querySelector('nav button:nth-child(11)').textContent = translations[currentLang]['signin_login-btn'];
    document.querySelector('footer p:nth-child(1)').textContent = translations[currentLang]['footer-org'];
    document.querySelector('footer p:nth-child(2)').textContent = translations[currentLang]['footer-address'];
    document.querySelector('footer p:nth-child(3)').textContent = translations[currentLang]['footer-contact'];
    document.querySelector('footer p:nth-child(4)').innerHTML = `Email: <a href="mailto:santrajsingh2025@gmail.com">${translations[currentLang]['footer-email'].split(': ')[1]}</a>`;
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
window.onload = () => showPage('home');
