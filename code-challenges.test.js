// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("capName", () => {
  test("the function should return an array with strings that has the name capitalized and what that person's occupation is.", () => {
    var people = [
      { name: "ford prefect", occupation: "hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "radio employee" }
    ]
    expect(capName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// var people = [
//   { name: "ford prefect", occupation: "hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]



// b) Create the function that makes the test pass.

// Create a function
// parameter of an array
// have an empty array called name
// map through the array and for each object with the key name it will access the value
// the values will get pushed to a new array called name
// map through the name array called name and for each value at index 0 it will capitalize the word and then add the rest of the word back on using slice(1)
// Might be able to mab through the objects, access the values, and capitalize + slice(1) all in one go. That would be ideal
// Once the names are capitalized the array will be mapped through again and the return will be a string that uses string interpolation
// it will look something like `${object.value(name)} is a ${object.value(occupation)}.` I am assuming. I will need to google to get syntax correct

const canName = (array) => {
 let newArray = array.map(value => {
   return name = value.name.split(' ')
 })
 let capName = []
 for(let i=0; i<newArray.length; i++){
   return capName.push(newArray[i].map(value => {
     return capValue = value.charAt(0).toUpperCase() + value.slice(1)
   }))
}
return capName

}

//   let newArr = []
// for(let i=0; i<array.length; i++){
//   let names = array[i].name.split(' ')
//   newArr.push(names)
// }
// return newArr
// console.log(newArr)

// let capName = []
// for(let i=0; i<name.length; i++){
//   let capNames = name[i].map(value =>
//     value.charAt(0).toUpperCase() + value.slice(1)
//   )
//   capName.push(capNames)
// }
//   // let capNames = name.map(value =>
//   //   value.charAt(0).toUpperCase() + value.slice(1)
//   // )
//   console.log(capName)
// CapNames returns 3 undefines

  // for(let i=0; i<names.length; i++){
  //   names[i].charAt(0).toUpperCase() + names[i].slice(1)
  // }
  // let capNames = names.join(' ')
  // array[i].name = capNames.join(' ')

// return array


//   var name = []
//   for (let i=0; i<array.length; i++){
//    return name.push(array[i].name.split(' '))
//   }
//
//   // I didn't realize I would have an array of arrays so I had to iterate over the array and then iterate again over each value to uppercase.
//   var capName = []
//   name.map(value => {
//     value.forEach(value =>
//       capName.push(value.charAt(0).toUpperCase() + value.slice(1))
//     )
//   })
// for(let i=0; i<array.length; i++){
//   array[i].name = capName.map((value, i) => {
//     value[i] + value[i+1]
//   })
//   return array
// }
//     // console.log(array)





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainder", () => {
  test("the function should return an array that contains the remainders of the numbers in the original array when they are divided by 3.", () => {
    var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

    expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])

  })
})

// var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// b) Create the function that makes the test pass.

// Create a function called remainder
// Takes a parameter of an array
// Create an empty array called numOnly
// Iterate through the array and if the type is equal to a number then that number will be pushed into numOnly
// Iterate through numOnly (probably using map) and for each index I will divide by 3 and print the remainder in the returned array.

const remainder = (array) => {
  let numOnly = []
  for(let i=0; i<array.length; i++){
    if( typeof array[i] === "number"){
      numOnly.push(array[i])
    }
  }
   let remainArr = numOnly.map(value => {
    return value % 3
  })
  return remainArr
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeSum", () => {
  test("the function should return an integer that is the sum of all of the numbers cubed.", () => {
    var cubeAndSum1 = [2, 3, 4]
    var cubeAndSum2 = [0, 5, 10]

    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

// var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
// var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.

// Ok I will create a function called cubeSum that takes an argument of an array
// I will create an empty variable called sumNum that will be given the value of 0
// Next I will iterate over the array using a for loop and for each index that number will be added to the sumNum variable
// Then I will cube sumNum and return the value

// const cubeSum = (array) => {
//   let sumNum = 0
//   for(let i=0; i<array.length; i++){
//     sumNum += array[i]
//   }
//   return Math.pow(sumNum, 3)
// }

// So I misunderstood. I thought I had to add the numbers and then cube the sum.
// Nope I need to cube the numbers FIRST and then add them together.
// Then return the sum
const cubeSum = (array) => {
  let sumNum = 0
  for(let i=0; i<array.length; i++){
    sumNum += Math.pow(array[i], 3)
  }
  return sumNum
}
