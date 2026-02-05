// ============ DOM Elements ============
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const filterBtns = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('[data-category]');
const faqItems = document.querySelectorAll('.faq-item');
const faqQuestions = document.querySelectorAll('.faq-question');
const contactForm = document.getElementById('contactForm');

// ============ MOBILE MENU TOGGLE ============
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.style.gap = navMenu.style.display === 'flex' ? '8px' : '5px';
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Mark clicked link as active (remove from others)
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Persist active nav in localStorage when available
        try {
            const href = link.getAttribute('href');
            if (href) localStorage.setItem('activeNav', href);
        } catch (err) {
            // ignore storage errors (e.g., in private mode)
        }

        // Close mobile menu if open
        if (navMenu && navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navMenu && navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    }
});

// ============ ARTICLE FILTERING ============
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Filter articles
            articleCards.forEach(article => {
                if (filterValue === 'all') {
                    article.style.display = 'block';
                    setTimeout(() => {
                        article.style.opacity = '1';
                    }, 10);
                } else {
                    const articleCategory = article.getAttribute('data-category');
                    if (articleCategory === filterValue) {
                        article.style.display = 'block';
                        setTimeout(() => {
                            article.style.opacity = '1';
                        }, 10);
                    } else {
                        article.style.opacity = '0';
                        setTimeout(() => {
                            article.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// ============ FAQ ACCORDION ============
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        
        // Close other open items
        faqItems.forEach(item => {
            if (item !== faqItem && item.classList.contains('open')) {
                item.classList.remove('open');
            }
        });

        // Toggle current item
        faqItem.classList.toggle('open');
    });
});

// ============ CONTACT FORM HANDLING ============
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Show success message
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ ACTIVE NAV LINK ON SCROLL ============
window.addEventListener('scroll', () => {
    let current = '';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            const section = document.querySelector(href);
            if (section) {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 50) {
                    current = href;
                }
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});

// ============ UTILITY FUNCTIONS ============

// Intersection Observer for lazy animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to cards on page load
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.article-card, .value-card, .stat-card, .service-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Restore active nav link from localStorage (if any)
    try {
        const savedActive = localStorage.getItem('activeNav');
        if (savedActive) {
            navLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('href') === savedActive) {
                    l.classList.add('active');
                }
            });
        }
    } catch (err) {
        // ignore storage errors
    }
});

// ============ RESPONSIVE MOBILE MENU STYLES ============
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: #ffffff;
            flex-direction: column;
            width: 100%;
            text-align: center;
            box-shadow: 0 4px 6px rgba(45, 80, 22, 0.08);
            padding: 1rem 0;
            gap: 0;
        }

        .nav-menu li {
            padding: 0.8rem 0;
            border-bottom: 1px solid #ecf0e9;
        }

        .nav-menu li:last-child {
            border-bottom: none;
        }

        .nav-menu a {
            display: block;
        }

        .nav-menu a::after {
            display: none;
        }

        .nav-menu a.active {
            color: #2d5016;
            font-weight: 600;
        }
    }
`;
document.head.appendChild(style);

// ============ PAGE LOAD ANIMATIONS ============
window.addEventListener('load', () => {
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ============ SCROLL TO TOP FUNCTIONALITY ============
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background-color: #2d5016;
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999;
                font-size: 1.2rem;
                transition: all 0.3s ease;
                box-shadow: 0 4px 6px rgba(45, 80, 22, 0.2);
            `;
            scrollBtn.addEventListener('click', scrollToTop);
            scrollBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#4a7c3f';
                this.style.transform = 'scale(1.1)';
            });
            scrollBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#2d5016';
                this.style.transform = 'scale(1)';
            });
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// ============ FORM VALIDATION ENHANCEMENT ============
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#e74c3c';
        } else if (this.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '';
            }
        } else {
            this.style.borderColor = '';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '';
    });
});

// ============ KEYBOARD NAVIGATION ============
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu && navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    }

    // Open FAQ with arrow keys
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const focusedFaqQuestion = document.activeElement.closest('.faq-question');
        if (focusedFaqQuestion) {
            focusedFaqQuestion.click();
        }
    }
});

// ============ ACCESSIBILITY IMPROVEMENTS ============
// Add focus styles
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    button:focus,
    a:focus,
    input:focus,
    select:focus,
    textarea:focus {
        outline: 2px solid #4a7c3f;
        outline-offset: 2px;
    }

    .filter-btn:focus,
    .cta-button:focus,
    .cta-button-secondary:focus {
        outline: 2px solid #4a7c3f;
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

console.log('Terrasse - Site d\'information environnementale chargé avec succès');
