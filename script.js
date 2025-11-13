// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function openMobileMenu() {
    mobileMenuOverlay.classList.remove('hidden');
    mobileMenu.classList.remove('hidden');
    // Trigger animation after removing hidden class
    setTimeout(() => {
        mobileMenu.classList.add('mobile-menu-open');
        mobileMenuOverlay.classList.add('mobile-menu-overlay-visible');
        
        // Stagger animation for menu items
        const menuItems = mobileMenu.querySelectorAll('a');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100 + (index * 50));
        });
    }, 10);
    // Toggle buttons
    mobileMenuBtn.classList.add('hidden');
    closeMenuBtn.classList.remove('hidden');
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    // Animate menu items out
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
        }, index * 30);
    });
    
    mobileMenu.classList.remove('mobile-menu-open');
    mobileMenuOverlay.classList.remove('mobile-menu-overlay-visible');
    // Wait for animation to complete before hiding
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
        mobileMenuOverlay.classList.add('hidden');
        // Reset menu items for next open
        menuItems.forEach(item => {
            item.style.opacity = '';
            item.style.transform = '';
            item.style.transition = '';
        });
    }, 300);
    // Toggle buttons
    mobileMenuBtn.classList.remove('hidden');
    closeMenuBtn.classList.add('hidden');
    // Restore body scroll
    document.body.style.overflow = '';
}

if (mobileMenuBtn && mobileMenu && mobileMenuOverlay) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
    
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMobileMenu);
    }
    
    // Close when clicking overlay
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update current year in footer
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white', 'shadow-lg');
    } else {
        nav.classList.remove('bg-white', 'shadow-lg');
    }
});

// Form submission handler
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

