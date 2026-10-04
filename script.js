// script.js

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // Modal – Termin buchen
    // ==========================================

    const appointmentBtn = document.getElementById('appointmentBtn');
    const appointmentModal = document.getElementById('appointmentModal');
    const modalClose = document.querySelector('.modal-close');

    // Nur ausführen, wenn das Modal auf der Seite vorhanden ist
    if (appointmentBtn && appointmentModal && modalClose) {

        // Modal öffnen
        appointmentBtn.addEventListener('click', function () {
            appointmentModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        // Modal schließen
        modalClose.addEventListener('click', function () {
            appointmentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Schließen bei Klick außerhalb
        appointmentModal.addEventListener('click', function (e) {
            if (e.target === appointmentModal) {
                appointmentModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Mit ESC schließen
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && appointmentModal.style.display === 'flex') {
                appointmentModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }


    // ==========================================
    // Mobile Menü
    // ==========================================

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuToggle && navMenu) {

        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }


    // ==========================================
    // Smooth Scrolling
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                if (navMenu) {
                    navMenu.classList.remove('active');
                }

                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ==========================================
    // Scroll Animation
    // ==========================================

    const revealElements = document.querySelectorAll('.reveal');

    function checkScroll() {

        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    // Direkt beim Laden prüfen
    checkScroll();

    // Beim Scrollen prüfen
    window.addEventListener('scroll', checkScroll);


    // ==========================================
    // Lightbox
    // ==========================================

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('[data-lightbox]');

    if (lightbox && lightboxImg && lightboxClose) {

        galleryItems.forEach(item => {

            item.addEventListener('click', function () {

                const img = this.querySelector('img');

                if (img && img.src) {
                    lightboxImg.src = img.src;
                    lightbox.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        lightboxClose.addEventListener('click', function () {

            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';

        });

        lightbox.addEventListener('click', function (e) {

            if (e.target === lightbox) {

                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';

            }
        });
    }


    // ==========================================
    // Kontaktformular
    // ==========================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {

        contactForm.addEventListener('submit', function (e) {

            e.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (
                name &&
                email &&
                message &&
                name.value &&
                email.value &&
                message.value
            ) {

                alert(
                    'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.'
                );

                contactForm.reset();

            } else {

                alert('Bitte füllen Sie alle Pflichtfelder aus.');

            }
        });
    }


    // ==========================================
    // Sticky Header
    // ==========================================

    const header = document.getElementById('header');

    if (header) {

        window.addEventListener('scroll', function () {

            if (window.scrollY > 100) {

                header.style.backgroundColor = 'rgba(245, 241, 232, 0.95)';
                header.style.backdropFilter = 'blur(10px)';

            } else {

                header.style.backgroundColor = 'rgba(245, 241, 232, 0.95)';
                header.style.backdropFilter = 'blur(0)';

            }
        });
    }

});