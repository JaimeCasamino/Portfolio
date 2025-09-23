'use strict';

// Modal open/close functions (global)
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
    // Optional: focus for accessibility
    modal.setAttribute('tabindex', '-1');
    modal.focus();
  }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside modal-content
window.addEventListener('click', function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Close modal with ESC key
window.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Auto year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Fade-in scroll effect
  const elements = document.querySelectorAll(".fade-in");

  function checkFade() {
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  // Run on scroll
  window.addEventListener("scroll", checkFade);

  // Run once on page load
  checkFade();
});