'use strict';

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
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

window.addEventListener('click', function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

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
 
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

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
  window.addEventListener("scroll", checkFade);
  checkFade();
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const link = card.getAttribute("href");
      if (link) window.open(link, "_blank");
    });
  });
});
