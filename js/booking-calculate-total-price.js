// DOM elements

const roomType = document.querySelector('#room-select')
const guestsNumber = document.querySelector('#guests-select')
const kids = document.querySelector('#kids')
const breakfast = document.querySelector('#breakfast')
const showBreakfastPrice = document.querySelector('.breakfast')
const totalPriceField = document.querySelector('.stay-details__total-price')



// Variables 

const roomPrices = {
	'forest-retreat-twin': 100,
	'forest-haven-king': 150,
	'woodland-suite': 200,
	'forest-view-double': 120,
}
const breakfastPrice = 15

let totalPrice = 0


// Function to get the selected room from the localStorage

if (selectedRoom) {
	for (let i = 0; i < roomType.options.length; i++) {
		if (roomType.options[i].text === selectedRoom) {
			roomType.selectedIndex = i
			break
		}
	}
}

// Function to calculate the total price

function calculateTotalPrice() {
	const roomValue = roomType.value
	const guestsValue = guestsNumber.value

	if (roomValue && guestsValue && reservedDays) {
		totalPrice = roomPrices[roomValue] * guestsValue * reservedDays
	}

	if (breakfast.checked) {
		const totalBreakfastPrice = breakfastPrice * guestsValue
		totalPrice += totalBreakfastPrice
		showBreakfastPrice.textContent = ` + ${totalBreakfastPrice} $`
	} else {
		showBreakfastPrice.textContent = ''
	}

	totalPriceField.textContent = `${totalPrice} $`
	totalAmountDiv.textContent = `Amount to be charged: ${totalPrice} $`
}


// Event Listeners

roomType.addEventListener('change', () => {
	localStorage.setItem('selectedRoom', roomType.options[roomType.selectedIndex].text)
})
window.addEventListener('load', () => {
	localStorage.removeItem('selectedRoom')
})

roomType.addEventListener('change', calculateTotalPrice)
guestsNumber.addEventListener('change', calculateTotalPrice)
breakfast.addEventListener('change', calculateTotalPrice)

