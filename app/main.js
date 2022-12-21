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
/*
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
*/
/*
const test1 = ["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]; // 'BbBb'
const test2 = ["abc", "acb", "bac", "foo", "bca", "cab", "cba"]; // 'foo'
const test3 = ["silvia", "vasili", "victor"]; // 'victor'
const test4 = ["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]; // 'Harry Potter'
const test5 = ["    ", "a", " "]; // 'a'

// const str1 = "Tom Marvolo Riddle";
// const str2 = "I am Lord Voldemort";
// console.log(str1.toLowerCase().split("").sort().join("").trim());
// console.log(str2.toLowerCase().split("").sort().join("").trim());

const uniqItem = (string) => {
  let str = string.toLowerCase().split("");
  str = new Set(str);
  str = [...str].sort().join("").trim();
  return str;
};
*/
// const mappedArr1 = test4.map((val) => uniqItem(val)); // ['a', 'b', 'a', 'a', 'a', 'a', 'a']
// let index = -1;
// const result = mappedArr1.filter((el, i, arr) => {
//   if (arr.indexOf(el) === arr.lastIndexOf(el)) {
//     index = arr.indexOf(el);
//   }
// });
// console.log(test4[index]);
/*
function findUniq(arr) {
  let index = 0;
  const mapped = arr.map((val) => uniqItem(val));
  mapped.filter((el, i, arr) => {
    if (arr.indexOf(el) === arr.lastIndexOf(el)) {
      index = arr.indexOf(el);
    }
  });
  return arr[index];
}
*/

// "Мама",
// "авТо",
// "гриБ",
// 'Яблоко', 'яБлоко', 'ябЛоко', 'яблОко', 'яблоКо', 'яблокО'

// "агент007" - содержит цифры
// "стриж" - только строчные буквы
// "ГТО", - более одной заглавной буквы
// "Три богатыря" - содержит пробел, допустимы только буквы
// . string.match(regexp)
const checkStr = (str) => {
  const reg = /^(?=.*[а-я])[а-я]*[А-Я][а-я]*$/gm;
  return str.match(reg);
};
