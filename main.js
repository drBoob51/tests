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
let array = [2,5,8,15,0,6,20,3]
for (let i = 0 ; i<array.length; i++) {
   if (array[i] < 10 && array[i] > 5)
    {console.log(array[i])}
}
for (let x = 0 ; x<array.length; x++) {
    if (array[x]%2 === 0)
    {console.log(array[x])}
}


let array1 = ['a','b','c'];
let array2 = [1,2,3];
//let array3 = array1.concat(array2);
//console.log(array3);
let array3 = [...array1, ...array2];
console.log(array3)

let firstArray = ['a','b','c'];
firstArray.push (1);
firstArray.push (2);
firstArray.push (3);
console.log(firstArray)


function isPalindrome(str) {
    let len = str.length;
    let result;

    for (let i = 0; i < len; i++) {
        if (str[i] === str[len - 1 - i]) {
            result = 'yes';
            return result;
        }  else {
            result = 'no';
            return result;
        }
    }
}
test = isPalindrome('mom');
test2 = isPalindrome('daddy');

console.log(test);
console.log(test2);

