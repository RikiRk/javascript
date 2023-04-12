console.time(" ");
console.log("hello");
console.log(true);
console.log(false);
console.table({ subha: "this", marks: 34 });
console.table({ Riki: "this", marks: 3.4 });
console.warn("this is warning");
console.log(["a", "b", "c", "d"]);
console.error("this is error");
console.timeEnd(" ");
///////////////*

var nam = "Riki";
const name = "subha";
console.log(name, nam);

{
  let nam = "hello";
  console.log(nam);
}
console.log(nam);

const mark = [34,56,67,13,35,47];

const fruits = ["mango", "apple","banana"];

const mixed = [1,3,4,"Riki"];

console.log(mark);
console.log(mixed);
console.log(fruits);

console.log(mixed.length);
console.log(mixed[0]);

mixed[0]= "subha";

console.log(mixed)
console.log(mixed.indexOf("subha"));