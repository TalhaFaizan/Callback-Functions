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