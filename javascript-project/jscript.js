//1. Write a function that take a number and returns true if it is a positive number and false if it is a negative number.

function isNumberPositive(num){
    if (num > 0){
        console.log("This number is positive");
    } else if (num < 0){
        console.log("This number is negative");
    } else if (num == 0){
        console.log("0 is a special case; it is neither positive or negative");
    } else {
        console.log("Not recognised");
    }
}


//2. Write a function that takes a number of days and converts it into an age.

function convertDaysToAge(days){
    const age = Math.floor(days/365.25);
    console.log(`${days} days is ${age} years of age`);
}


//3. Write a function that takes three numbers and returns the largest of the three numbers.

function getLargestNumber(num1, num2, num3){
    if (num1>=num2 && num1>=num3){ //Having >= accounts for if two or three of the numbers are identical
        console.log(`The largest number is ${num1}.`);
        return num1;
    } else if (num2>=num1 && num2>=num3){
        console.log(`The largest number is ${num2}.`);
        return num2;
    } else if (num3>=num1 && num3>=num2){
        console.log(`The largest number is ${num3}.`);
        return num3;
    }
}


//4. Write a function that takes an array of names and returns the last name from the array of names.

//5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. 
//   It should return false if there are one or more negative numbers in the array.
