// DOM elements

const nameField = document.querySelector('#name')
const phoneInputField = document.querySelector('#phone')
const emailInputField = document.querySelector('#email')
const addressInputField = document.querySelector('#address')
const applyBtn = document.querySelector('.contact-details__apply')
const errorFieldsMessage = document.querySelector('#fields-error')
const allInputs = document.querySelectorAll('.contact-details__form-box')
const checkboxTerms = document.querySelector('#terms-and-conditions')
const formFields = document.querySelectorAll('.disable')
const paymentFields = document.querySelectorAll('#cash, #card')

// Functions

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} should be at least ${min} characters long`)
	} else {
		clearError(input)
	}
}

const checkEmail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(emailInputField.value)) {
		clearError(emailInputField)
	} else {
		showError(emailInputField, 'Please enter a valid email address')
	}
}

const checkPhone = () => {
	const phone = phoneInputField.value
	const phoneRegex = /^[+][0-9]+$/

	if (phoneRegex.test(phone)) {
		clearError(phoneInputField)
	} else {
		showError(phoneInputField, `Please enter a valid phone number`)
	}
}

// Function to disable fields

function disableFields() {
	if (!checkInDate.value || !checkOutDate.value) {
		errorDateMessage.innerText = 'Please fill in the date fields.'
		errorDateMessage.style.display = 'block'
	}
	if (
		errorFieldsMessage.style.display !== 'none' ||
		errorDateMessage.style.display !== 'none' ||
		Array.from(formFields).some(field => field.value == '') ||
		!checkboxTerms.checked ||
		Array.from(allInputs).some(el => el.classList.contains('error'))
	) {
		errorFieldsMessage.innerText = 'Please fill in all fields.'
		errorFieldsMessage.style.display = 'block'
		return
	} else {
		checkboxTerms.disabled = true
		breakfast.disabled = true
		kids.disabled = true
		formFields.forEach(field => {
			field.setAttribute('disabled', 'disabled')
			field.classList.add('disabled-styles')
		})

		paymentFields.forEach(field => {
			field.removeAttribute('disabled')
		})
		applyBtn.classList.remove('btn-special-animation')
	}
}

// Event Listeners

applyBtn.addEventListener('click', e => {
	checkLength(nameField, 3)
	checkLength(addressInputField, 8)
	checkEmail()
	checkPhone()
	disableFields()
})

formFields.forEach(field => {
	field.addEventListener('input', () => {
		errorFieldsMessage.style.display = 'none'
	})
})
checkboxTerms.addEventListener('change', () => {
	errorFieldsMessage.style.display = 'none'
})
