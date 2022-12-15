console.log("hi guys");
/* Complete the solution so that it returns true if the first argument(string)
 passed in ends with the 2nd argument (also a string).*/
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
