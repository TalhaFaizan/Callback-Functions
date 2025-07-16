// 1. Car wash ka main function
function startCarWash(a,b) {
    console.log(`Starting car ${a}...`);
    console.log(`Washing with ${b}...`);
}
function startwaxing() {
    return 'wash';
}
function dryCar() {
    return "soap";
}
function waxCar() {
    console.log("Drying the car...");
    console.log("Washing complete!");
    
}
startCarWash(startwaxing(),dryCar());

waxCar();
// Creating a icecream order:
// function order(production_start) {
//     let fruit = "mango";
//     let liquid = "Mango squash";
//     let topping = "cherry";
//     production_start(fruit, liquid, topping);
// }

// function production(a, b, c) { // parameters coming from production_start(fruit, liquid, topping)
//     console.log("Order is placed.The order was given by the person includes", a, ",",b, "and", c);
    
//     setTimeout(() => {
//         console.log("Place order");
//         setTimeout(() => {
//             console.log("Cut the", a);
//             setTimeout(() => {
//                 console.log("Add", b, "as a liquid");
//                 setTimeout(() => {
//                     console.log("Start the Machine");
//                     setTimeout(() => {
//                         console.log("Select container");
//                         setTimeout(() => {
//                             console.log("Select", c, "as toppings");
//                             setTimeout(() => {
//                                 console.log("Serve ice cream to the person");
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }

// order(production); // this is callback hell

// // Resolving call back hell by using promise:
// let data = new Promise(function(res, rej) {
//     let userLoggedIn = true;
//     if (userLoggedIn) {
//         return res();
//     } else {
//         return rej();
//     }
// });

// data.then(function() {
//     console.log("User is logged in");
// });

// data.catch(function() {
//     console.log("User is not logged in");
// });






















// let selectDifficulty = document.getElementById("difficulty");
// let selectCuisine = document.getElementById("cuisine");
// let search = document.getElementById('search')
// let difficulty = [];
// let cuisine = [];
// let allData = [];
// let show = document.getElementById("main");
// let url = `https://dummyjson.com/recipes`;

// async function api() {
//   let raw = await fetch(url);
//   let data = await raw.json();
//   // console.log(data);
//   allData = data.recipes;

//   console.log(allData);
  
//   // console.log(allData);

//   allData.forEach((element) => {
//     if (!difficulty.includes(element.difficulty)) {
//       difficulty.push(element.difficulty);
//     }

//     if (!cuisine.includes(element.cuisine)) {
//       cuisine.push(element.cuisine);
//     }

//     renderCard(element);
//   });

//   selectDifficulty.addEventListener("change", selectFilter);
//   selectCuisine.addEventListener("change", selectFilter);
//   search.addEventListener('keyup',selectFilter)

//   difficulty.forEach((element) => {
//     selectDifficulty.innerHTML += ` <option value="${element}">${element}</option>`;
//   });
//   cuisine.forEach((element) => {
//     selectCuisine.innerHTML += ` <option value="${element}">${element}</option>`;
//   });



// }

// function renderCard(data) {
//   show.innerHTML += `<div class="card "  }>
//       <img src="${data.image}" alt="">
//       <h1>${data.name}</h1>
//       <p>Difficulty: ${data.difficulty}</p>
//       <p>Cuisine: ${data.cuisine}</p>
//       </div>`;
// }



// function selectFilter(){

//   let optionDifficulty = selectDifficulty.value
//   let optionCuisine = selectCuisine.value
//   let optionSearch = search.value
//   console.log(optionSearch);
  
// let filterValue = allData.filter((data)=>{

// let userDifficulty = optionDifficulty == "" || optionDifficulty == data.difficulty
// let userCuisine = optionCuisine == "" || optionCuisine == data.cuisine
// let userSearch = data.name.toLowerCase().includes(optionSearch)


// return userCuisine && userDifficulty && userSearch

// })

// show.innerHTML=``
// filterValue.forEach((element)=>{

// renderCard(element)

// })
  

// }

// api();
