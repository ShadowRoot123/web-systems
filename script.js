document.addEventListener('DOMContentLoaded', () => {
  const seeProjectButtons = document.querySelectorAll('.featured-project .btn-primary, .project-grid .see-project-btn');
  const projectPopups = document.querySelectorAll('.project-popup');
  const closePopupButtons = document.querySelectorAll('.project-popup .close-popup');
  const body = document.body;

  function openPopup(popupId) {
    const targetPopup = document.getElementById(popupId);
    if (targetPopup) {
      projectPopups.forEach(popup => {
        popup.style.display = 'none';
      });
      targetPopup.style.display = 'flex';
      body.classList.add('no-scroll');
    }
  }

  function closePopup() {
    projectPopups.forEach(popup => {
      popup.style.display = 'none';
    });
    body.classList.remove('no-scroll');
  }

  seeProjectButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = button.dataset.target;
      if (targetId) {
        openPopup(targetId);
      }
    });
  });

  closePopupButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      closePopup();
    });
  });

  projectPopups.forEach(popup => {
    popup.addEventListener('click', (event) => {
      if (event.target === popup) {
        closePopup();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePopup();
    }
  });

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

function updateActiveNavLink() {
  let currentSectionId = '';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom > 100) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
  });
}

window.addEventListener('scroll', updateActiveNavLink);

});
