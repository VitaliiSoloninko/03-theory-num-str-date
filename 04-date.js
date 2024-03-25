// console.log(new Date())

// const now = new Date()

// -- початок 1 січня 1970 року, бо в дужках параметр 0
// const start = new Date(0)
// const start2 = new Date(1000 * 60 * 60 * 24 * 365)
// const date = new Date(2011, 0, 4, 12, 42, 12)
// console.log(date)

// -- get - забирає з сервера set - задає своє значення
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())
// now.setFullYear(2055)

// -- популярні методи
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())

// =================== Project	Date and time
let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

// коли повторюється функціонал,
// це ідеально за замикаючої функції
// в даному випадку для 3 кнопок
function bindMode(name) {
	return function () {
		mode = name
		update()
	}
}
fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

// fullBtn.onclick = function () {
// 	mode = 'full'
// 	update()
// }
// dateBtn.onclick = function () {
// 	mode = 'date'
// 	update()
// }
// timeBtn.onclick = function () {
// 	mode = 'time'
// 	update()
// }

setInterval(update, 100)
update()

// setInterval(() => {
// 	update()
// }, 1000)

function update() {
	output.textContent = format(mode)
}

// світч кейс
// Pure Function
function format(formatMode) {
	const now = new Date()
	switch (formatMode) {
		case 'time':
			return now.toLocaleTimeString() + '.' + now.getMilliseconds()
		case 'date':
			return now.toLocaleDateString()
		case 'full':
			return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
		default:
			now.toLocaleTimeString()
	}
}
