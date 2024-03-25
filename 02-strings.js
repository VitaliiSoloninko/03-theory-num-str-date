const firstName = 'Vitalii'
const age = 17
// 'Can\'t' - зворотній слеш \ це екранізація або потрібно в зворотніх писати `Can't drive`

function getAge() {
	return age
}

// const old = 'Hello my name is ' + name + 'and my age is ' + age
// const output1 = `Hello my name is ${name} and my age is ${age}`

// const output = `Hello my name is ${name} and my age is ${
// 	getAge() > 18 ? 'Can drive' : `Can't drive`
// }`

// console.log(output)

// ============== Metods

console.log(firstName)
console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2)) // який символ на 2 місці знаходиться
console.log(firstName.indexOf('a')) // на якому місці знаходиться певний символ, якщо -1, то такого немає
console.log(firstName.toLowerCase().startsWith('vit')) // з чого починається рядок
console.log(firstName.endsWith('lii'))
console.log(firstName.repeat(2))

const password = '     my super pass     '
console.log(password.trim()) // прибрати пробіли, корисно при авторизації
