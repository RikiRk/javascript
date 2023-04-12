
let arr = [1,2,3,4,5,6];

for (let i = 0; i < arr.length; i++) {
  const elememt = arr[i];
  console.log(elememt);
}

arr.forEach(function(element){
  console.log(element);
});

let obj = {
  name: "subha",
  age: 22,
  type: "hopeless engineer",
};

for (let key in obj) {
  console.log(`the ${key} of object is ${obj[key]}`);
}
