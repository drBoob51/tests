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