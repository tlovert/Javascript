//document.querySelectorAll(".btn").forEach((item) => {
//  item.addEventListener("click", () => {
//   alert("Hello Mr.Taylor");
//  });
//});

var num = 22;

let fname = "elvis";

const active = true;

let names = ["elvis", "ron", "john"];

console.log(names[1]);

names[1] = "Sydney";

let name1 = "elvis";
let name2 = "smith";

console.log("Hi my is " + name1 + "" + name2);
console.log(`Hi my name's ${name1} ${name2}`);

let person = {
  name: "elvis",
  age: 34,
  active: true,
  img: "./",
};

console.log(person);

const website = "google";
// const url = 'http://www.' + website + '.com';
const url = `http://${website}.com`;

console.log(url);

let ageNum = 23;

ageNum = "pants";

const pizza = 10;
const kids = 3;

const slices = pizza % kids;

console.log(`Elvis will get ${slices}`);

let num3455 = 123;

let num2345 = "shoes";

console.log(num3455 - num2345);

let date = new Date();
let year = date.getFullYear();

let copyYear = document.getElementById("current-year");

copyYear.innerHTML = year;

let person1 = {
  title: "This is project 1",
  desc: "this s basic description",
  age: 34,
};

let title = document.getElementById("project-title");

title.innerHTML = person1.title;

let agee = document.getElementById("age");
agee.innerHTML = person1.age;
