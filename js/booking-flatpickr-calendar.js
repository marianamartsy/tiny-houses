const checkInDate = document.querySelector('#date-start')
const checkOutDate = document.querySelector('#date-end')
const errorDateMessage = document.querySelector('#date-error')

const startPicker = flatpickr('#date-start', {
	enableTime: false,
	dateFormat: 'Y-m-d',
	minDate: 'today',
	maxDate: new Date().fp_incr(60),
	onChange: function () {
		reserveDays()
	},
})

const endPicker = flatpickr('#date-end', {
	enableTime: false,
	dateFormat: 'Y-m-d',
	minDate: 'today',
	maxDate: new Date().fp_incr(60),
	onChange: function () {
		reserveDays()
	},
})

let reservedDays = 0

function reserveDays() {
	const startDate = startPicker.selectedDates[0]
	const endDate = endPicker.selectedDates[0]

	if (!startDate || !endDate) {
		errorDateMessage.innerText = 'Please select both check-in and check-out dates.'
		errorDateMessage.style.display = 'block'
		return
	}

	if (startDate >= endDate || startDate.getTime() === endDate.getTime()) {
		errorDateMessage.innerText = 'The check-out date cannot be before or the same as the check-in date.'
		errorDateMessage.style.display = 'block'
		return
	}

	const oneDay = 24 * 60 * 60 * 1000
	const days = Math.round(Math.abs((endDate - startDate) / oneDay))

	reservedDays = days
	calculateTotalPrice(reservedDays)

	errorDateMessage.style.display = 'none'
}
