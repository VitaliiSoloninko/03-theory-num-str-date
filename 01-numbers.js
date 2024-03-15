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

// Parsing, наприклад коли строки треба привести в число
const strInt = '42'
const strFloat = '42.42'

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

console.log(0.1 + 0.2)
