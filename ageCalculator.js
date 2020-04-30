// get age and convert to a number
let age = Number(prompt("how old are you now"));

// if they put a negative number
if (age < 0) {
  console.log("comeback once your out of the womb");
}

//  under 18
else if (age < 18) {
  console.log("Sorry you are not old enough to enter this venue")
}

// under 21
else if (age < 21) {
  console.log("You can enter, but cannot drink");
}

// age is equal to 21
else if (age === 21) {
  console.log("congratulations on your 21st")
}

// age is odd
else if(age % 2 !== 0) {
 console.log("Your age is odd!");
}

// over 21
else {
  console.log("come on in and grab a drink")
}
