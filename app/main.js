console.log("hi guys");
/* Complete the solution so that it returns true if the first argument(string)
 passed in ends with the 2nd argument (also a string).*/
/*
const a = "abc";
const b = "bc";
const c = "d";
//  solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  let dublicateArr = [];
  const newArr = str.split("").reverse();
  const newArrEnd = ending.split("").reverse();
  newArrEnd.forEach((val, index) => {
    if (val === newArr[index]) {
      dublicateArr.push(val);
    }
  });
  const check = dublicateArr.join("");
  const example = newArrEnd.join("");
  return check === example;
}
*/
/*
In this example you have to validate if a user input string is alphanumeric. 
The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

const test1 = "Mazinkaiser";
const test2 = "helloworld_";
const test3 = "PassW0rd";
const test4 = "     ";
const test5 = "";

function alphanumeric(string) {
  // return string.replace(" ", "");
  const reg = /[\W_]/gi;
  return string.length ? !reg.test(string) : false;
  //your code here
}
