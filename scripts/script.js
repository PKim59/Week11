// function greet(name, time = "Personnel") {
//     console.log("Nothing " + time + ", " + name)
// }

// greet("kiddo", "for you", "testttttt")

// // third parameter is lost as it isn't needed or expected.


// let func1 = function test1() {
//     abc = prompt("Please enter your name!")
//     console.log("What's up, " + abc)
// }

// func1()


uservalue = prompt("Please enter the radius of the circle!")

function circletime(uservalue) {
    if (isNaN(uservalue))
        alert("this isn't a number!");
    else
        area = (uservalue * uservalue) * Math.PI;
    return area;
}

circletime(uservalue)
alert("The area of a circle with a radius of " + uservalue + " is " + area.toFixed(2) + "! (full value = " + area + ")") 
