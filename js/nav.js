// DOM elements
const nav = document.querySelector('.nav__items')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__element')
const allSections = document.querySelectorAll('.section')


// Function that toggles the active class on the navigation bar and animates the menu items

const navActive = () => {
	nav.classList.toggle('active')
	navBtnBars.classList.remove('dark-bars-color')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
		})
	})

	handleNavItemsAnimation()
}


// Function that animates the menu items

const handleNavItemsAnimation = () => {
	let delayTime = 0

	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}


// Function that changes the color of the hamburger button based on the section currently displayed on the screen


const handleObsrerver = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('dark-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('dark-bars-color')
		}
	})
}


// Event Listeners

window.addEventListener('scroll', handleObsrerver)
navBtn.addEventListener('click', navActive)
