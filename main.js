// 1.
const replaceString = function (string, valueToReplace, valueToReplaceWith) {
  const arr = string.split(" ");
  arr[arr.indexOf(valueToReplace)] = valueToReplaceWith;
  return arr.join(" ");
};

// console.log(replaceString("My name is Sandro", "Sandro", "Giorgi"));

// 2.
const firstLetterUpperCase = function (string) {
  const arr = string.split(" ");
  return arr.map((word) => word[0].toUpperCase() + word.substr(1)).join(" ");
};

// console.log(firstLetterUpperCase("i am studying front-end development"));

// 3.
const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];

const sortByAge = (user) => user.sort((a, b) => a.age - b.age);

// console.log(sortByAge(users));
