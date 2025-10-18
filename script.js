// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Puppy Card Popup =====
const cards = document.querySelectorAll('.puppy-card');
const popup = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.popup-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('popup-title').textContent = card.querySelector('h3').textContent;
    document.getElementById('popup-character').textContent = "Character: " + card.dataset.character;
    document.getElementById('popup-age').textContent = "Age: " + card.dataset.age;
    document.getElementById('popup-gender').textContent = "Gender: " + card.dataset.gender;
    document.getElementById('popup-city').textContent = "City: " + card.dataset.city;
    document.getElementById('popup-rate').textContent = "Rate: " + card.dataset.rate;
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', e => {
  if (e.target === popup) popup.style.display = 'none';
});

// ===== Contact Form Submission (Formspree Integration) =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formspree.io/f/mjkalnbo", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("✅ Message sent successfully! We'll get back to you soon.");
        contactForm.reset();
      } else {
        alert("❌ Message failed to send. Please try again later.");
      }
    } catch (error) {
      alert("⚠️ Network error. Please check your connection and try again.");
    }
  });
}
