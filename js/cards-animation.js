const housesCards = document.querySelectorAll('.houses__card')

housesCards.forEach(card => {
	card.addEventListener('touchstart', function () {
		this.classList.add('touch-active')
	})
})
