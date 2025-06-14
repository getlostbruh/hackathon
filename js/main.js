document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const nav = document.querySelector(".primary-menu");
  const overlay = document.querySelector(".nav-overlay");
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  function adjustMainPadding() {
    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.paddingTop = `${headerHeight}px`;
    }
  }

  // Adjust on load and resize
  adjustMainPadding();
  window.addEventListener("resize", adjustMainPadding);

  // Also adjust after menu toggle (header height may change)
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    overlay.classList.toggle("show");
    toggleBtn.classList.toggle("open");

    document.body.classList.toggle("no-scroll", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen);

    setTimeout(adjustMainPadding, 300); // Give menu transition time if needed
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("open");
    overlay.classList.remove("show");
    toggleBtn.classList.remove("open");
    document.body.classList.remove("no-scroll");
    toggleBtn.setAttribute("aria-expanded", false);

    setTimeout(adjustMainPadding, 300);
  });
});
