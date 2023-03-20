// // function greet(name, time = "Personnel") {
// //     console.log("Nothing " + time + ", " + name)
// // }

// // greet("kiddo", "for you", "testttttt")

// // // third parameter is lost as it isn't needed or expected.


// // let func1 = function test1() {
// //     abc = prompt("Please enter your name!")
// //     console.log("What's up, " + abc)
// // }

// // func1()




// uservalue = prompt("Please enter the radius of the circle!")

// const radiuspara = document.querySelector("#radius")
// const resultpara = document.querySelector("#result")
// console.log(radiuspara)
// console.log(resultpara)

// function circletime(uservalue) {
//     if (isNaN(uservalue))
//         radiuspara.innerHTML = "This isn't a number, silly!";
//         // alert("this isn't a number!");
//     else
//         area = (uservalue * uservalue) * Math.PI;
//     return area;
// }

// circletime(uservalue)
// radiuspara.innerHTML = "You entered " + uservalue + " as the radius of the circle."
// resultpara.innerHTML = "The area of a circle with a radius of " + uservalue + " is " + area.toFixed(2) + "! (full value = " + area + ")"

// // alert("The area of a circle with a radius of " + uservalue + " is " + area.toFixed(2) + "! (full value = " + area + ")") 

// // to add to a string, just use it as the x = x + "content"
// // in this case, radiuspara.innerhtml = radiuspara.innerhtml + "content"
// //  OR, radiuspara.innerhtml += "content"
// //note, she didn't use innerhtml, but textcontent. use textcontent in future in case innerhtml does something different. 

// variable.appendChild("CSS selector") to select 

function populateList(myShoppingList) {
    const ulElement = document.querySelector(".shopping")
    myShoppingList.forEach(item => {
        newli = document.createElement("li");
        ulElement.appendChild(newli);
        newli.textContent = item;
    });
}

let shoppingList = ["bread", "cheese", "green pepper"]
populateList(shoppingList)