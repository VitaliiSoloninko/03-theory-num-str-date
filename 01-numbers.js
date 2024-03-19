// ---- Type
const num = 42 // integer
const float = 42.42 // float
const pow = 10e3 // 10 000
const big = 1_000_000_000

// ============ Number is function
// console.dir(Number) // щоб подивитися властивості Number
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math)
// console.log(Math.pow(2, 53) - 1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(1 / 0)
// console.log(Number.isFinite(Infinity))
// console.log(23 / undefined) // NaN not a number, якщо NaN то інша логіка
// const weird = 23 / undefined
// console.log(Number.isNaN(weird)) // перевірка чи обчислення NaN

// ---- Parsing, наприклад коли строки треба привести в число
// const strInt = '42'
// const strFloat = '42.42'

// console.log(strInt)
// console.log(strFloat)
// console.log(Number(strInt))
// console.log(Number(strFloat))

// console.log(Number.parseInt(strInt))
// console.log(parseInt(strInt)) // 2 спосіб без слова Number
// console.log(parseInt(strFloat)) // повертає ціле число 42
// console.log(parseFloat(strFloat)) // повертає дробове число 42

// console.log(strInt, strFloat)
// console.log(+strInt, +strFloat) // швидкий метод щоб привести строчку в число

// console.log(0.1 + 0.2)
// console.log(+(0.1 + 0.2).toFixed(1))
// console.log(parseFloat((0.1 + 0.2).toFixed(1)))

// console.log(parseFloat((0.1 + 0.2).toFixed(1)))
// const fixed = (0.1 + 0.2).toFixed(1)
// console.log(parseFloat(fixed))

// ---- BigInt
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 100000000n)
// console.log(typeof -42n)
// // console.log(42.42n) // error
// // console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)
// console.log(5 / 2)

// ---- Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25)) // Взяти квадратний корінь з
// console.log(Math.pow(2, 3)) // В степінь перше число, друге степінь
// console.log(Math.abs(-42))
// console.log(Math.max(2, 5, 42, 199, 0))
// console.log(Math.min(2, 5, 42, 199, 0))

// const myNum = 4.9
// console.log(Math.floor(myNum)) // округлення в МЕНШУ сторону
// console.log(Math.ceil(myNum)) // округлення в БІЛЬШУ сторону
// console.log(Math.round(myNum)) // округлення стандартне
// console.log(Math.trunc(myNum)) // тільки ціла частина числа
// console.log(Math.random()) // випадкове число від 0 до 1

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
const num1 = getRandomNumber(10, 100)
console.log(num1)
