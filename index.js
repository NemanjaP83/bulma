
const menuIcon = document.getElementById('menu-icon')
const menuLinks = document.getElementById('menu-links')
const links = document.querySelectorAll('#link')
const navbar = document.querySelector('.navbar')
const logo = document.querySelector('.logo-brand')
// modal
const modal = document.getElementById('modal')
const modalClose = document.querySelector('.modal-close')
const signUp = document.querySelector('.signup')

signUp.addEventListener('click', () => {
  modal.classList.add('is-active')
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('is-active')
})

  
  // Toggle is-active class on burger icon
menuIcon.addEventListener('click', () => {
  menuLinks.classList.toggle('is-active')
})

  // Adding event listener on links  
// links.forEach((link) => {

//   link.addEventListener('click', (e) => {
   
//       // removing active-class class
//       links.forEach((el) => {
//         el.classList.remove('active-class', 'scrollActive')
//       })
//     if (e.target.classList.value !== 'active-class') {
//       e.target.classList.add('active-class')
//     } else {
//       e.target.classList.remove('active-class')
//     }
//     // toggle is-active classs
//     menuLinks.classList.toggle('is-active')
//     menuIcon.classList.toggle('is-active')
  
//     })
//   })

 
// Close navbar if user click outside menu
function toggleNavbar(clicked) {
if (clicked) {
  menuLinks.classList.remove('is-active')
  }
}

// Adding event on document &
// Invoking toggleNavbar function based on given parametar
document.addEventListener('click', (e) => {
  let clicked = !e.target.classList.contains('toggle')
  toggleNavbar(clicked)
})

// Change navbar background color on scroll
window.onscroll = () => {
  let scrollTop = scrollY
  if (scrollTop >= 150) {
    navbar.classList.add('active')
  } else {
    navbar.classList.remove('active')
    logo.classList.add('has-background-primary')
  }
}

// TABS 
const tabs = document.querySelectorAll('.tab-li')
const tabsContent = document.querySelectorAll('.tab')


tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'))
    tab.classList.add('is-active')
    
    const target = tab.dataset.target
    tabsContent.forEach((el) => {
      if (el.getAttribute('id') === target) {
        el.classList.remove('is-hidden')
      } else {
        el.classList.add('is-hidden')
      }
    })
  })
})


// Active navigation on scroll
window.addEventListener('scroll', () => {

 let fromTop = window.scrollY + 1
  
  links.forEach((link) => {
    let section = document.querySelector(link.hash)
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('scrollActive')
    } else {
      link.classList.remove('scrollActive', 'active-class')
    }
  })

})