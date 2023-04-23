const bookNowButtons = document.querySelectorAll('.offers__option-btn')
const selectedRoom = localStorage.getItem('selectedRoom')

bookNowButtons.forEach(button => {
	button.addEventListener('click', () => {
		const roomName = button.closest('.offers__option').querySelector('.offers__option-heading').textContent
		localStorage.setItem('selectedRoom', roomName)
		
	})
})

