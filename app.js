// Example @@@ 1

// for (i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " this number is zawji ")
//     }
//     else if (i == 5) {
//         // continue  // discard number 5 and continue the for loop
//         break // its stop at 5 ,and not continue in for loop
//         //    let c =10  
//         //    console.log (c) // any thing typed directly after continue or break ,its called a dead code and its without response 
//     }
//     else
//         console.log("odd  " + i)

// }

// Example@@@ 2
// function mutiple(firstnumber,secondnumber) {
//     console.log (firstnumber*secondnumber)   
// }
// mutiple(7,3)
// mutiple(12,20)
// mutiple(15,7)


// Example @@@ 3

// let username = prompt("please enter your name")
// function oddoreven(firstnumber, secondnumber) {
//     for (i = firstnumber; i < secondnumber; i++) {
//         if (i % 2 == 1) {
//             console.log(" this is odd number and its   " + i + " ya  " + username)
//         }
//         else {
//             console.log("this is even number and its   " + i + " ya  " + username)
//         }
//     }
// }

// oddoreven(11, 17)
// oddoreven(1, 7)


// Example @@@ 4

let mystudent = ["zaid", "naya", "tuleen", "yara", "osama"]
let marks = [77, 33, 22, 45, 58]

function markcalculate(params) {
    for (let i = 0; i < mystudent.length; i++) {
        if (marks[i] < 50) {
            console.log(" the student name is " + mystudent[i] + " and its mark is  " + marks[i] + "  sorry you are failed")

        }
        else {
            console.log(" the student name is " + mystudent[i] + " and its mark is  " + marks[i] + " sorry you are passed")
        }
    }

}



markcalculate()