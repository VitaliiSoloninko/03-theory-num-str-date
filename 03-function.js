// ---------------------------- Function Declaration
// спочатку функцію можна визвати, а потім об'явити
// function greet(name) {
// 	console.log('Hello - ', name)
// 	return undefined
// }

// ---------------------------- Function Expression
// Не можна визвати функцію, поки її не об'явити
// якщо немає після function назви, тоді вона анонімна
// const greet2 = function (name) {
// 	console.log('2 Hello - ', name)
// }

// greet('Vitalii')
// greet2('Vitalii')

// console.log(typeof greet)
// console.dir(greet)

// ---------------------------- setTimeout - затримка
// clearTimeout - метод
// Треба передати функцію, а потім через скільки
// setTimeout(function () {
// 	greet('Dilya')
// }, 1500)

// ---------------------------- setInterval - треба обережно, і зупиняти
// періодично, каунтер до 5
// let counter = 0
// const interval = setInterval(function () {
// 	if (counter === 5) {
// 		clearInterval(interval)
// 	} else {
// 		console.log(++counter)
// 	}
// }, 1000)

// ---------------------------- Arrow Functions - стрілочна функція
function greet(name) {
	console.log('Hello - ', name)
}

const arrow = name => console.log('Hello - ', name)
const arrow2 = (name, age) => {
	console.log('Hello - ', name, age)
}

function pow(num, exp) {
	return Math.pow(num, exp)
}
const pow2 = (num, exp) => Math.pow(num, exp)

// ---------------------------- Default Parameters
const sum = (a = 40, b = a / 2) => a + b

// console.log(sum(40, 2))
// console.log(sum())

// ... parameter rest - базовий спосіб
// function sumAll(...numbers) {
// 	let res = 0
// 	for (let num of numbers) {
// 		res += num
// 	}
// 	return res
// }
// продвинутий спосіб
// function sumAll(...numbers) {
// 	return numbers.reduce((acc, cur) => (acc += cur), 0)
// }

// console.log(sumAll(1, 2, 3, 4, 5))

// ---------------------------- Closures - замикання на співбесідах часто питають
// функція в середи іншої функції
// приклад створити імя з іншими прізвищами

function createPerson(name) {
	return function (lastname) {
		console.log(name + ' ' + lastname)
	}
}

const addLastName = createPerson('Vitalii')
addLastName('Soloninko')
addLastName('Minin')
