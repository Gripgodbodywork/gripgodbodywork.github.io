document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
    initMobileMenu();
    initContactForm();
    initSmoothScroll();
});

function initSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const indicatorsContainer = document.getElementById('slideIndicators');
    
    let currentSlide = 0;
    let autoplayInterval;
    let isPlaying = true;

    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    function goToSlide(index) {
        showSlide(index);
        if (isPlaying) {
            resetAutoplay();
        }
    }

    function startAutoplay() {
        if (!isPlaying) return;
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    function togglePlayPause() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            startAutoplay();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            stopAutoplay();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { 
        prevSlide(); 
        if (isPlaying) resetAutoplay(); 
    });
    
    if (nextBtn) nextBtn.addEventListener('click', () => { 
        nextSlide(); 
        if (isPlaying) resetAutoplay(); 
    });
    
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);

    slideshowContainer.addEventListener('mouseenter', stopAutoplay);
    slideshowContainer.addEventListener('mouseleave', () => {
        if (isPlaying) startAutoplay();
    });

    startAutoplay();
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            console.log('Form submitted:', data);

            contactForm.style.display = 'none';
            if (formSuccess) {
                formSuccess.style.display = 'block';
            }

            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                if (formSuccess) {
                    formSuccess.style.display = 'none';
                }
            }, 5000);
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('checkout') === 'true') {
    const total = urlParams.get('total');
    const message = document.getElementById('message');
    if (message) {
        message.value = `I would like to complete my booking. Total: $${total}\n\nPlease provide available appointment times.`;
    }
}
