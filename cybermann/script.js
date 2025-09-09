// ===== Sticky Contact Button =====
window.addEventListener("scroll", () => {
  const contactButton = document.querySelector(".contact-floating");
  if (contactButton) {
    if (window.scrollY > 100) {
      contactButton.classList.add("visible");
    } else {
      contactButton.classList.remove("visible");
    }
  }
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetID = this.getAttribute("href");
    const targetEl = document.querySelector(targetID);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Contact Actions =====
function openWhatsApp() {
  const phoneNumber = "2347012345678"; // ✅ Replace with your WhatsApp number
  const message = "Hello Cybermann, I’m interested in your services!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function makeCall() {
  window.location.href = "tel:+2347012345678"; // ✅ Replace with your number
}

function sendEmail() {
  window.location.href =
    "mailto:youremail@example.com?subject=Cybermann Services&body=Hello, I’d like to know more about your services.";
}

// ===== Hamburger Menu Toggle =====
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cm-menu-toggle");
  const panel = document.getElementById("cm-nav");

  if (!btn || !panel) return;

  // Toggle open/close
  btn.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("cm-show");
    btn.classList.toggle("cm-open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a nav link is clicked
  panel.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      panel.classList.remove("cm-show");
      btn.classList.remove("cm-open");
      btn.setAttribute("aria-expanded", "false");
    })
  );
});
