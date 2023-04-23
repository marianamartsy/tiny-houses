// DOM elements

const paymentCashCheckbox = document.querySelector('#cash')
const paymentCardCheckbox = document.querySelector('#card')
const cardPaymentForm = document.querySelector('.payment-details__cardpayment')
const confirmBtn = document.querySelector('.payment-details__confirm')

// Choosing payment method functions

function chooseCashPaymentMethod() {
	if (paymentCashCheckbox.checked) {
		paymentCardCheckbox.disabled = true
		confirmBtn.removeAttribute('disabled')
		confirmBtn.classList.add('btn-special-animation')
	} else {
		paymentCardCheckbox.disabled = false
		confirmBtn.setAttribute('disabled', '')
		confirmBtn.classList.remove('btn-special-animation')
	}
}
function chooseCardPaymentMethod() {
	if (paymentCardCheckbox.checked) {
		paymentCashCheckbox.disabled = true
		confirmBtn.style.display = 'none'
		cardPaymentForm.style.display = 'block'
	} else {
		paymentCashCheckbox.disabled = false
		confirmBtn.style.display = 'block'
		cardPaymentForm.style.display = 'none'
	}
}

// Event Listeners

paymentCashCheckbox.addEventListener('change', chooseCashPaymentMethod)
paymentCardCheckbox.addEventListener('change', chooseCardPaymentMethod)