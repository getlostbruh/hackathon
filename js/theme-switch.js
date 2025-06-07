// Always start in dark mode
document.body.classList.remove('light-mode');

// Get the toggle button
const toggle = document.getElementById('theme-toggle');

// Get the GitHub icon element
const githubIcon = document.getElementById('github-icon');

// Function to update GitHub icon based on theme
function updateGitHubIcon() {
  if (document.body.classList.contains("light-mode")) {
    githubIcon.src = githubIcon.dataset.light;
  } else {
    githubIcon.src = githubIcon.dataset.dark;
  }
}

// Initial icon check on load
updateGitHubIcon();

// Toggle theme on button click
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateGitHubIcon(); // 🟢 Run this right after toggling the theme
});


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
