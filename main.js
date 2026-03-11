// ===== Mobile Navigation =====
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const navActions = document.querySelector('.nav-actions');

// Create overlay
const overlay = document.createElement('div');
overlay.className = 'mobile-menu-overlay';
document.body.appendChild(overlay);

function toggleMobileMenu() {
    const isOpen = mobileToggle.classList.contains('open');
    mobileToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    if (navActions) navActions.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileMenu() {
    mobileToggle.classList.remove('open');
    navLinks.classList.remove('open');
    if (navActions) navActions.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
}
overlay.addEventListener('click', closeMobileMenu);

// Close on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
});

// ===== Navbar scroll =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
}, { passive: true });

// ===== Scroll animations =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== Active nav link =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentPage);
});

// ===== Contact form =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    });
}

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
