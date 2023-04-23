const footerYear = document.querySelector('.footer__year')

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

currentYear()




