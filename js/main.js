document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".primary-menu");
  const overlay = document.querySelector(".nav-overlay");

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    overlay.classList.toggle("show");
    toggleBtn.classList.toggle("open");

    document.body.classList.toggle("no-scroll", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("open");
    overlay.classList.remove("show");
    toggleBtn.classList.remove("open");
    document.body.classList.remove("no-scroll");
    toggleBtn.setAttribute("aria-expanded", false);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const hardwareSection = document.getElementById('hardware-section');
  const softwareSection = document.getElementById('software-section');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Get the tab to show
      const tabToShow = btn.getAttribute('data-tab');

      // Hide all sections
      hardwareSection.classList.add('hidden');
      softwareSection.classList.add('hidden');

      // Show the selected section
      if (tabToShow === 'hardware') {
        hardwareSection.classList.remove('hidden');
      } else if (tabToShow === 'software') {
        softwareSection.classList.remove('hidden');
      }
    });
  });
});
