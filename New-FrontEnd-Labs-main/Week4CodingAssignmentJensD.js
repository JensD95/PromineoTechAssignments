//Hello. Welcome to my code. Have a coffee, hang out, and hopefully this makes sense
//Below is the first step of the coding assignment, further notes will explain additional features of the code and what I've done
console.log("Welcome! \n\nFollowing the instructions of the coding assignment, I have declared an array with predetermined values. \nBelow is the difference of the last and first array values.")
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
function ageSubtraction(a) {
    var firstAge = ages[0]
    var lastAge = ages[ages.length - 1]
    if (lastAge != ages[ages.length - 1]) {
        var lastAge = ages[ages.length - 1];
    } else {
        return lastAge - firstAge;
    }
}
//The code above establishes a function "ageSubtraction" and returns the difference of the array's first value from its last value
//This function assigns the array's first value [0] to firstAge
//The function also assigns the array's last value ages[ages.length - 1] to lastAge
//Additionally, this function reassigns the value of lastAge if it does not match the array's actual last value
console.log(ageSubtraction(ages));
console.log("\nNext you will find the result of the same operations but with three additional values pushed to the array.")
ages.push(112,97,12);
console.log(ageSubtraction(ages));
//The code above calls the new function twice, once with the orignal array and once with three numbers pushed to the end of the array
/*ages.sort((a,b) => a - b);
console.log(ageSubtraction(ages));*/
/*This block is changed to a comment for the sole purpose of preserving the array's structure
Naturally, this code will sort the array by ascending value
Feel free to uncomment the line for testing. If nothing has changed, the result will be 110*/

//Below is a loop to find the average of the values in the ages array
function findAverage(array) {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}
console.log("\nCheck out the 41 below. That's the average of all values stored in the array... \nplus the three additional values from before!")
console.log(findAverage(ages));
//NOTE: This will yield the number 41 if you run my code as-is, no modifications
//If you convert line 20 to a comment, it will yield 28.75 since the numbers 12, 97, and 112 will not be pushed to ages

//Below is the next step of the coding assignment
//I've created a loop with six names and printed the average letters used for each name
console.log("\nNext up is a string array. The array is storing six names, the letters of which I have averaged and printed below.")
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
var smashTheStrings = names.join("");
console.log(smashTheStrings.length / names.length);
console.log("\nOh, look below, I smashed all of the names together...Whoops.")
console.log(smashTheStrings);

console.log("\nNext I will print out the last element of the string array followed by the first element.")
console.log(names[names.length - 1]);
console.log(names[0]);

//The next section covers the creation of an array to record the lengths of the names in the names array from before
console.log("\nBelow here you'll find an array of numbers representing the letters of each name in the names array.")
console.log("This will be useful as I will be calculating the sum of these values immediately after.")
var nameLengths = names.map(str => str.length);
console.log(nameLengths);
function findSum(array) {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total;
}
console.log("\nCheck out the sum of those values below.")
console.log(findSum(nameLengths));
//Up next I'll write some code to find the sum of the letters in each name in the names array

//Below I will declare a function designed to concatenate a given string to itself a number of times equivalent to the second argument in the function
console.log("\nHere I have created a function to concatenate a word by the number of times assigned in the console.log() afterward.")
function concatenateWords(word, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result = result.concat(word);
    }
    return result;
}
console.log(concatenateWords("Hi", 5));

//The next step is a function that combines two variables into one print, firstName and lastName to fullName
console.log("\nThis next one is for Heath Ledger fans, check out the full name print function below.")
var firstName = "Ulrich";
var lastName = "von Liechtenstein";
function fullName(a, b) {
    return a + ' ' + b;
}
console.log(fullName(firstName, lastName));

//Next up is a numbers array that returns true if the sum exceeds 100
const numArray = [1, , 4, 22, 17];
function findSumBoolean(array) {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    if (total > 100) {
        return true;
    } else {
        return false;
    }
}

console.log("\nBelow you will find a boolean statement regarding whether a predetermined number array's sum exceeds 100.");
console.log(findSumBoolean(numArray));
//Now I have called a prior function on this most recent number array to complete the next step of the assignment (10)
console.log("\nUp next is a previous function back in action! \nOur buddy, findAverage, has returned to calculate the average of this most recent array of numbers. \nCheck it out below.");
console.log(findAverage(numArray));

//Following this comment, I will create two number arrays and use a previous function to pull the averages
//A second function will determine if the average of the first array is greater than the second
console.log("\nUp next we have two arrays, the first of which has a greater average than the second. \nIf the second is changed, the following function will return false.")
array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isGreater(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}
let num1 = findAverage(array2);
let num2 = findAverage(array3);
console.log("\nThe average of the first array is: " + num1 + "\nThe average of the second array is: " + num2);
console.log("Is the average of the first array greater than the second?")
console.log(isGreater(num1, num2));
console.log("\nGreat! It looks like that function is working and the array averages have been successfully compared. \nMoving onto the next step!")
//The following is my code for the willBuyDrink step
console.log("\nOof, it's kind of a cold day out today. Do we need to buy a drink to cool down in this weather?")
let isHotOutside = false;
let moneyInPocket = 16;
function willBuyDrink(a, b) {
    if (moneyInPocket > 10.50 && isHotOutside == true) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));
//Off to the final step of the assignment
//I've decided to use a function similar to the alarm clock function declared previously in the course. Creative, I know, thanks
console.log("\nNow for the finale, a function of my own design and origin (somewhat).")
let weekDay = true;
let workDay = true;
function whatIsMyAlarm (a, b) {
    if (workDay == true && weekDay == true) {
        return "6:30 AM";
    } else {
        return "The kids are the alarm today! Good luck bud!";
    }
}
console.log(whatIsMyAlarm(weekDay, workDay));
//I hope you liked that one, it's pretty basic but whatever. I'm just having fun commenting and console.log()'ing the hell out of this.
console.log("Congrats! You made it to the end. I'd give you a cookie if I had one, but I already ate the last one. \n\nHave a good one!");