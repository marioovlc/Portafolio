<<<<<<< HEAD
// --- Mobile Menu Navigation ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
=======
// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
>>>>>>> 83d305b2e572f3c709856668b8e2e8774eb96c8e
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

<<<<<<< HEAD
// --- Logo Click ---
const headerLogoContainer = document.querySelector('.header__logo-container')

headerLogoContainer.addEventListener('click', () => {
  location.href = '#home'
})

// --- Scroll Animations (Intersection Observer) ---
// Optional: Add 'fade-in-up' class to elements you want to animate in HTML
// For now, let's just make sure the nav bar background transitions smoothly if we wanted to add a scroll effect
// But since we use sticky/fixed header, it's fine.


// --- Contact Form AJAX Submission ---
const contactForm = document.getElementById('contactForm')
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const successMsg = document.querySelector('.form-success-msg')

    // Disable button to prevent multiple submissions
    const btn = contactForm.querySelector('button')
    if (btn) btn.disabled = true;

    fetch('https://formsubmit.co/ajax/mariotorrent2005@gmail.com', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        contactForm.style.display = 'none'
        if (successMsg) successMsg.classList.remove('d-none')
      })
      .catch(error => {
        console.log(error)
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.')
        if (btn) btn.disabled = false;
      })
  })
}
=======
// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
>>>>>>> 83d305b2e572f3c709856668b8e2e8774eb96c8e
