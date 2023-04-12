

// let a = document;
// let b = documemt.all;
// console.log(a);
// console.log(b);

// function num(number) {
//   console.log(`${number}`);
//   num(number);
// }

// num(5);

// let myobj = {
//   name: "subha",
//   learn: function () {
//     return "functionit";
//   },
// };
// console.log(myobj);

// document.getElementById("hello").addEventListener("click", function hello(event) {
//   console.log("you have clicked");
//   console.log(event);
//   console.log(event.target)
//   console.log(event)

// });



// const count = true 

// let promise = new promise(function(resolve, reject){
//   if (count){
//     resolve("counted")
//   } else{
//     reject("not count")
//   }
// })
// console.log(promise)



// fetch(
//   "link" 
// ).then(function(response){
//   console.log(response)
//   return response.json
// })

/* --------------------------------------------------------------------------- */

// var print = fetch("https://jsonplaceholder.typicode.co/posts"); //retun a Promise
// //console.log(print)
// print.then(function(data){
//   return data.json()
//   //console.log(data)
// }).then(function(data){
//   console.log(data)
// }).catch((e)=>{console.log(`I am in Error ${e}`)})


// var promise1 = new Promise((resolve, reject)=>{
//   resolve("I have been Resolved")
//   //reject("in Error")
// });

// var promise2 = new Promise((resolve, reject)=>{
//   resolve("I have been Resolved 2")
//   //reject("in Error")
// });

// //promise.then(function(data){
//   //console.log(data, typeof(data))
// //}).catch(function(e){
//   //console.log(e)
// //})
// Promise.all([promise1, promise2]).then(data=> console.log(data)).catch(e=> console.log(e))

// //prms.then(data=> console.log(data)).catch(e=> console.log(e))


// console.log([1,2,3]+[3,4,5])

// doSomething();

// function doSomething(){
//   console.log("Hoisted")
// }

// //doSomething1(); temporal dead zone

// cosnt doSomething1 = ()=>{ console.log("NOT Hoisted")}




////////////////////////////////////////////////////////////////////////////////////////////



const arr = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < arr.length; i++) { 
 setTimeout(()=>{ console.log(i) }, 1000
 )} 
   
  console.log(arr)


//   setTimeout(()=>{
//     console.log("5 second later")
//   },5000);
//   setInterval(()=>{
//     console.log("3 secodn later")
//   }, 3000)

// let show = function(){
//     return ("Subhadip");
// }

// let a = show()