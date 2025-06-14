let currentLanguage = 'en';

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
}

function toggleLanguage() {
    const buttons = document.querySelectorAll('.nav-btn:not(.lang-toggle)');
    const textBar = document.getElementById('text-bar-content');
    const langBtn = document.getElementById('lang-btn');

    if (currentLanguage === 'en') {
        currentLanguage = 'hi';
        buttons.forEach(btn => btn.textContent = btn.dataset.hi);
        textBar.textContent = 'राधा माधव गव सेवा एवम् जन कल्याण समिति एक सरकार द्वारा मान्यता प्राप्त संस्था';
        langBtn.textContent = 'English/Hindi';
    } else {
        currentLanguage = 'en';
        buttons.forEach(btn => btn.textContent = btn.dataset.en);
        textBar.textContent = 'Radha Maadhav Gav Seva Evam Jan Kalyan Samiti a Government approved institution';
        langBtn.textContent = 'Hindi/English';
    }

    // Update section titles and textboxes
    const sectionTitles = {
        home: { en: 'Home', hi: 'होम' },
        gems: { en: 'Gems of Society', hi: 'समाज के रत्न' },
        donation: { en: 'Donation', hi: 'दान' },
        auth: { en: 'Authentication', hi: 'प्रमाणीकरण' },
        about: { en: 'About Us', hi: 'हमारे बारे में' },
        works: { en: 'Works', hi: 'कार्य' },
        gallery: { en: 'Gallery', hi: 'गैलरी' },
        blog: { en: 'Blogs & Posts', hi: 'ब्लॉग और पोस्ट' },
        contact: { en: 'Contact Us', hi: 'संपर्क करें' },
        help: { en: 'Help', hi: 'मदद' },
        signin_login: { en: 'Signin/Login', hi: 'साइन इन/लॉगिन' }
    };

    const textBoxContent = {
        home: { en: 'Home Text', hi: 'होम टेक्स्ट' },
        gems: { en: 'Gems Text', hi: 'जेम्स टेक्स्ट' },
        donation: { en: 'Donation Text', hi: 'डोनेशन टेक्स्ट' },
        auth: { en: 'Auth Text', hi: 'अथ टेक्स्ट' },
        about: { en: 'About Text', hi: 'अबाउट टेक्स्ट' },
        works: { en: 'Works Text', hi: 'वर्क्स टेक्स्ट' },
        gallery: { en: 'Gallery Text', hi: 'गैलरी टेक्स्ट' },
        blog: { en: 'Blog Text', hi: 'ब्लॉग टेक्स्ट' },
        contact: { en: 'Contact Text', hi: 'कॉन्टैक्ट टेक्स्ट' },
        help: { en: 'Help Text', hi: 'हेल्प टेक्स्ट' },
        signin_login: { en: 'Signin/Login Text', hi: 'साइन इन/लॉगिन टेक्स्ट' }
    };

    Object.keys(sectionTitles).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const title = section.querySelector('h2');
            if (title) title.textContent = sectionTitles[sectionId][currentLanguage];
            for (let i = 1; i <= 10; i++) {
                const textBox = document.getElementById(`${sectionId}_frame_textbox${i}`);
                if (textBox) textBox.value = `${textBoxContent[sectionId][currentLanguage]} ${i}`;
            }
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show home section by default
});
