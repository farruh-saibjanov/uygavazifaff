const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

if (hamburger && mobileMenu && closeBtn) {
  hamburger.addEventListener('click', () => {
    mobileMenu.style.right = '0';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.right = '-100%';
  });
}
