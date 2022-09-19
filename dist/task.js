"use strict";
function find_longest_word(arg) {
  let arr = arg.split(" ");
  console.log(arr);
  let mat = arr[0];
  for (const ar of arr) {
    if (ar.length < mat.length) {
      mat = ar;
    }
  }
  return mat;
}
function second_greatest_lowest(num) {
  const filterArr = num.filter(
    (el, index, arrey) => arrey.indexOf(el) === index
  );
  const sortArr = filterArr.sort((a, b) => a - b);
  const secmin = sortArr[1];
  const secmax = sortArr[sortArr.length - 2];
  return [secmin, secmax];
}
function element(arr) {
  let obj = {};
  for (let el of arr) {
    obj[el] = 0;
  }
  for (let key of Object.keys(obj)) {
    for (let el of arr) {
      if (key === el.toString()) obj[key] += 1;
    }
  }
  console.log(obj);
  let any = "";
  const maxValu = Object.values(obj);
  const max = Math.max(...maxValu);
  for (let key of Object.keys(obj)) {
    if (obj[key] === max) {
      return (any = `${key}:${max} paz`);
    }
  }
  return any;
}
console.log(element([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
//# sourceMappingURL=task.js.map
