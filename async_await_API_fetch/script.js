// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },3500);
//     })
// }



// async function main()
// {
// console.log('Load Module');
// console.log('Do something');
// console.log('Load Data');
// let data =  await getData();

// console.log(data);
// console.log('process data');
// console.log('Data 2');

// }
// main();

// async function example() {
//   return "Hello World";
// }

// async function run() {
//   let msg = await example(); 
//   console.log(msg);  // Hello World
// }

// run();


// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//   }, 5000);
// }, 4000);


async function doSomething() {
  return "Step 1 done";
}

async function doSomethingElse(input) {

  
    return new Promise(resolve => {
    setTimeout(() => {
      resolve(input + " → Step 2 done");
    }, 5000);
  });
}

async function run() {
  try {
    let result = await doSomething();
    let final = await doSomethingElse(result);
    console.log(final);
  } catch (error) {
    console.error("Error:", error);
  }
}
run();





// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("✅ Task complete!");
//   }, 5000);
// });

// myPromise.then(result => console.log(result));


//example().then(msg => console.log(msg)); // Output: Hello World



// async function getTodo() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         let data = await response.json();  // wait for JSON conversion
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }

// getTodo();




// data.then((v)=>{
// console.log(data);
// console.log('process data');
// })


