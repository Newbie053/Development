// function greet(name,callback){
//     console.log("hello "+name);
//     callback();
// }

// function sayBye(){
//     console.log("goodbye");

// }
// greet("Dipto",sayBye);



//Promises

let promise = new Promise((resolve, reject) => {
  let success = Math.random();
  if (success<0.5) {
    resolve("Task completed! ✅");
  } else {
    reject("Something went wrong ❌");
  }
});

promise
  .then(result => console.log(result))   // if resolved
  .catch(error => console.log(error));   // if rejected
