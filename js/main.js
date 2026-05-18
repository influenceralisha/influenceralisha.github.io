/**
 * Alisha Portfolio - Main JavaScript
 */

(function() {
  'use strict';

  // ================================
  // Custom Cursor
  // ================================
  const cursor = document.getElementById('cursor');

  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    if (cursor) cursor.style.display = 'none';
  } else {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .gallery-item, .quote-slide');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  // ================================
  // Typing Animation
  // ================================
  const typedTextSpan = document.getElementById("typed-text");
  const textArray = ["Soft soul. Bold style.", "Real in every frame.", "Documenting beautiful moments.", "Lifestyle & Fashion Content Creator"];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newTextDelay = 2000; 
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingSpeed + 1100);
    }
  }

  if (typedTextSpan) setTimeout(type, newTextDelay + 250);

  // ================================
  // Sticky Nav & Hash Update
  // ================================
  const navbar = document.getElementById('navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId && window.location.hash !== `#${currentSectionId}`) {
      history.replaceState(null, null, `#${currentSectionId}`);
    }
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // ================================
  // Fade In Animation on Scroll (Right to Left)
  // ================================
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ================================
  // Smooth Scroll
  // ================================
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

  // ================================
  // Aesthetic Quote Slider
  // ================================
  const quoteSlides = document.querySelectorAll('.quote-slide');
  const sliderDots = document.querySelectorAll('.dot');
  let currentQuoteIndex = 0;
  let quoteInterval;

  function showQuote(index) {
    quoteSlides.forEach(slide => slide.classList.remove('active'));
    sliderDots.forEach(dot => dot.classList.remove('active'));
    
    quoteSlides[index].classList.add('active');
    sliderDots[index].classList.add('active');
    currentQuoteIndex = index;
  }

  function nextQuote() {
    let next = (currentQuoteIndex + 1) % quoteSlides.length;
    showQuote(next);
  }

  function startQuoteSlider() {
    quoteInterval = setInterval(nextQuote, 5000);
  }

  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(quoteInterval);
      showQuote(index);
      startQuoteSlider();
    });
  });

  if (quoteSlides.length > 0) startQuoteSlider();

  // ================================
  // Advanced Gallery Lightbox (Multi-level Zoom)
  // ================================
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('.lightbox-img');
  const lbCaption = lightbox.querySelector('.lightbox-caption');
  const lbPrev = lightbox.querySelector('.lb-prev');
  const lbNext = lightbox.querySelector('.lb-next');
  const lbZoomIn = lightbox.querySelector('.lb-zoom-in');
  const lbZoomOut = lightbox.querySelector('.lb-zoom-out');
  const lbClose = lightbox.querySelector('.lb-close');
  
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  let currentIndex = 0;
  let scale = 1;
  const zoomStep = 0.5;
  const maxZoom = 4;
  const minZoom = 0.5;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  function updateLightbox() {
    const item = galleryItems[currentIndex];
    const img = item.querySelector('img');
    const span = item.querySelector('span');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = span ? span.textContent : '';
    resetZoom();
  }

  function applyTransform() {
    lbImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    if (scale > 1) {
      lbImg.classList.add('zoomed');
    } else {
      lbImg.classList.remove('zoomed');
    }
  }

  function resetZoom() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    applyTransform();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; updateLightbox(); });
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = (currentIndex + 1) % galleryItems.length; updateLightbox(); });
  
  lbZoomIn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (scale < maxZoom) {
      scale += zoomStep;
      applyTransform();
    }
  });

  lbZoomOut.addEventListener('click', (e) => {
    e.stopPropagation();
    if (scale > minZoom) {
      scale -= zoomStep;
      applyTransform();
    }
  });

  lbClose.addEventListener('click', () => { 
    lightbox.classList.remove('active'); 
    document.body.style.overflow = ''; 
    resetZoom(); 
  });

  // Dragging logic
  lbImg.addEventListener('mousedown', (e) => {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    lbImg.style.transition = 'none';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    lbImg.style.transition = 'transform 0.3s ease';
  });

  // Touch support for dragging
  lbImg.addEventListener('touchstart', (e) => {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.touches[0].clientX - translateX;
    startY = e.touches[0].clientY - translateY;
    lbImg.style.transition = 'none';
  });

  lbImg.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    translateX = e.touches[0].clientX - startX;
    translateY = e.touches[0].clientY - startY;
    applyTransform();
  });

  lbImg.addEventListener('touchend', () => {
    isDragging = false;
    lbImg.style.transition = 'transform 0.3s ease';
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') lbClose.click();
    if (e.key === 'ArrowLeft') lbPrev.click();
    if (e.key === 'ArrowRight') lbNext.click();
    if (e.key === '+') lbZoomIn.click();
    if (e.key === '-') lbZoomOut.click();
  });

  // ================================
  // Web3Forms Handling & Validation
  // ================================
  const form = document.getElementById('contact-form');
  const result = document.getElementById('form-result');
  const emailInput = document.getElementById('contact-email');
  const emailError = document.getElementById('email-error');
  const inquirySelect = document.getElementById('inquiry-type');
  const dynamicSubject = document.getElementById('dynamic-subject');

  // Dynamic Subject Update
  if (inquirySelect && dynamicSubject) {
    inquirySelect.addEventListener('change', () => {
      dynamicSubject.value = `${inquirySelect.value} - Alisha Portfolio`;
    });
  }

  // Email Regex Validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validation Check
      if (!isValidEmail(emailInput.value)) {
        emailError.classList.add('visible');
        emailInput.classList.add('error-border');
        return;
      } else {
        emailError.classList.remove('visible');
        emailInput.classList.remove('error-border');
      }

      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => {
          object[key] = value;
      });
      const json = JSON.stringify(object);

      result.innerHTML = "Sending...";
      result.className = "";

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then(async (response) => {
        let jsonRes = await response.json();
        if (response.status == 200) {
          result.innerHTML = "Message sent successfully!";
          result.className = "success";
          form.reset();
        } else {
          result.innerHTML = jsonRes.message || "Submission failed";
          result.className = "error";
        }
      })
      .catch(error => {
        result.innerHTML = "Something went wrong! Please try again.";
        result.className = "error";
      })
      .finally(() => {
        setTimeout(() => {
          result.innerHTML = "";
        }, 5000);
      });
    });

    // Clear validation error on type
    emailInput.addEventListener('input', () => {
      emailError.classList.remove('visible');
      emailInput.classList.remove('error-border');
    });
  }

})();