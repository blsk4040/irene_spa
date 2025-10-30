// Wait for DOM + Swiper to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // === MOBILE MENU ===
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  let open = false;

  menuToggle?.addEventListener('click', () => {
    open = !open;
    if (open) {
      mobileNav.innerHTML = `
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#packages">Packages</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Book Now</a>`;
      mobileNav.style.display = 'flex';
    } else {
      mobileNav.style.display = 'none';
      mobileNav.innerHTML = '';
    }
  });

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', ev => {
      const href = a.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        ev.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // === SWIPER INITIALIZATION ===
  if (typeof Swiper === 'undefined') {
    console.error('Swiper not loaded.');
  } else {
    new Swiper('.hero-swiper', {
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 1000,
    });
  }

  // === CONTACT FORM ===
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your booking request has been sent (demo).');
    e.target.reset();
  });

  // === WHATSAPP BUTTON ===
  const whatsappBtn = document.getElementById('whatsapp-button');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      // Optional tracking
    });
    whatsappBtn.setAttribute('title', 'Chat with us on WhatsApp');
  }
});
