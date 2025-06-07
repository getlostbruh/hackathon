

// Navigation toggle logic
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".primary-menu");
  const overlay = document.querySelector(".nav-overlay");

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    overlay.classList.toggle("show");
    toggleBtn.classList.toggle("open");

    toggleBtn.setAttribute("aria-expanded", isOpen);
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("open");
    overlay.classList.remove("show");
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", false);
  });
});
