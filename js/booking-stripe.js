const stripe = Stripe(
	process.env.STRIPE_SECRET_KEY
)
const totalAmountDiv = document.querySelector('#amount-to-be-charged')
const elements = stripe.elements()
const card = elements.create('card')
card.mount('#card-element')
const form = document.getElementById('payment-form')


form.addEventListener('submit', function (event) {
	event.preventDefault()
	stripe.createToken(card).then(function (result) {
		if (result.error) {
			const errorElement = document.getElementById('card-errors')
			errorElement.textContent = result.error.message
		} else {
			stripeTokenHandler(result.token)
			setTimeout(function () {
				location.href = 'reservation-success.html'
			}, 500)
		}
	})
})
function stripeTokenHandler(token) {
	const form = document.getElementById('payment-form')
	const hiddenInput = document.createElement('input')
	hiddenInput.setAttribute('type', 'hidden')
	hiddenInput.setAttribute('name', 'stripeToken')
	hiddenInput.setAttribute('value', token.id)
	form.appendChild(hiddenInput)
}
