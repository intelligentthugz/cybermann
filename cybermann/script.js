// Sticky contact button logic
window.addEventListener('scroll', () => {
  const contactButton = document.querySelector('.contact-floating');
  if (window.scrollY > 100) {
    contactButton.classList.add('visible');
  } else {
    contactButton.classList.remove('visible');
  }
});

// Smooth scroll behavior (optional if you add anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Placeholder for form/WhatsApp action
function openWhatsApp() {
  const phone = "+2349050555065"; // Replace with your number
  const message = "Hi Cybermann, I’d like to request a free consultation.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
function openWhatsApp() {
  const phoneNumber = "2347012345678"; // Change this to YOUR real WhatsApp number
  const message = "Hello Cybermann, I’m interested in your services!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
function makeCall() {
  window.location.href = "tel:+2347012345678"; // Replace with YOUR phone number
}

function sendEmail() {
  window.location.href = "mailto:youremail@example.com?subject=Cybermann Services&body=Hello, I’d like to know more about your services.";
}
// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
