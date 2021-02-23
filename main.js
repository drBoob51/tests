let user = 'John Doe'
console.log(user) // John Doe
let student = 'Danila'
console.log(student)
user = student
console.log(user) // Danila
let test = 1
test++ // 2
test += '1'
console.log(test) // 21
test -= 1
console.log(test) // 20
test = true
console.log(typeof test) // boolean
console.log(test) // true
let numbers = [2,3,5,8]
let prod = 1
numbers.forEach(function(e){prod *= e;})
console.log(prod)
