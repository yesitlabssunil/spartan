// src/scripts/homeInteractions.js
export function initHomeScripts() {
    // 1. JAVASCRIPT FOR SMOOTH ACCORDION OVERLAP TRANSITION
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isOpen = currentItem.classList.contains('active');
            
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });

    // 2. INTERACTIVE PROCESS SLIDER/TABS
    // Since the original script used an inline HTML function 'switchProcessTab(index)',
    // we attach it directly to the window object so the HTML buttons can still find it.
    window.switchProcessTab = function(index) {
        const buttons = document.querySelectorAll('.process-nav-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        const cards = document.querySelectorAll('.process-step-card');
        cards.forEach(card => card.classList.remove('active'));
        
        if(buttons[index]) buttons[index].classList.add('active');
        const targetCard = document.getElementById(`step-${index}`);
        if(targetCard) targetCard.classList.add('active');
    };

    // 3. RESPONSIVE MENU INTERACTION JS
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if(icon) {
                if(icon.classList.contains('fa-bars')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });

        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if(icon) icon.className = 'fas fa-bars';
            });
        });
    }

    // 4. SOFT FADE-IN SCROLL REVEAL LOGIC
    const fadeElements = document.querySelectorAll('.fade-in');
    const handleScrollAnimation = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('load', handleScrollAnimation);
    
    // Run it once immediately in case elements are already on screen
    handleScrollAnimation();

    // Return a cleanup function to remove event listeners when leaving Home
    return () => {
        window.removeEventListener('scroll', handleScrollAnimation);
        window.removeEventListener('load', handleScrollAnimation);
        delete window.switchProcessTab; // Clean up global scope
    };
}