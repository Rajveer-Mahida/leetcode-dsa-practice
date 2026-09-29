let arr = [1,5,3,4,2,7,8,9,10];

let a = 1;
let z =10;

const findMissingNumber = (arr) => {
    let n = arr.length;
    let expectedSum = (n + 1) * (n + 2) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    console.log(
        "Expected Sum : ",expectedSum,
        "Actual Sum : ", actualSum,
    )

    return expectedSum - actualSum;
};

console.log(findMissingNumber(arr));


let doArrSum = [10, 20, 30, 40, 50];
let arraySumResult = 0;

for(let i=0;i<doArrSum.length;i++){

    console.log(doArrSum[i])
    arraySumResult+=doArrSum[i]

}

console.log(arraySumResult)


// # How many times givem number appear in array

const countNumberFromArray = [10, 5, 8, 10, 3, 10, 7];

let isAppeared = {};
let myNumber=10;

for (let i = 0; i < countNumberFromArray.length; i++) {
    const num = countNumberFromArray[i];

    if (!isAppeared[num]) {
        isAppeared[num] = 1;
    } else {
        isAppeared[num]++;
    }
}

console.log(isAppeared[myNumber]);



// Write code to count how many even numbers are present.
// Requirements:
// - Use a for loop
// - Don't use filter()
// - Don't use reduce()
// - Print only the count

const oddarr = [12, 7, 4, 9, 16, 3, 8];

let i=0;
let evenNumbers = 0;

for(i;i<oddarr.length;i++){

    let isEven = oddarr[i] % 2 === 0;

    if(isEven){
        evenNumbers++;
    }
}
console.log(evenNumbers)


// Write code to find the largest number.
// Requirements:
// - Use a for loop
// - Don't use Math.max()
// - Don't sort the array
// - Print the largest number

const largestNumber = [15, 7, 28, 12, 35, 9];


let largestNum = largestNumber[0];

for( let i=1; i < largestNumber.length; i++){
    if(largestNumber[i] > largestNum){
        largestNum = largestNumber[i];
    }
}

console.log(largestNum)

// Write code to find the smallest number.
// Requirements:
// - Use a for loop
// - Don't use Math.min()
// - Don't sort the array

const smallestNumber = [18, 5, 23, 2, 14, 9];

let smallestNum = smallestNumber[0];

for(let i=1; i < smallestNumber.length; i++){
    if(smallestNumber[i] < smallestNum){
        smallestNum = smallestNumber[i];
    }
}

console.log(smallestNum)

// Write code to print the elements in reverse order.

const reverseOrder = [10, 20, 30, 40, 50];

for(i=reverseOrder.length-1;i>=0;i--){
    console.log(reverseOrder[i])
}

// Write code to reverse the string without using:
// - reverse()
// - split()
// - join()


const myString = "hello";
let reverseString = "";

for(let i=myString.length-1;i>=0;i--){
    console.log(myString[i]);
    reverseString+=myString[i]
}


console.log(reverseString);


// A palindrome is a string that reads the same forward and backward.


const isPalindrome = "madam";
let reversedString = "";

for(let i=isPalindrome.length-1;i>=0;i--){
    reversedString+=isPalindrome[i]
}

if(reversedString === isPalindrome){
    console.log("It is a palindrome")
}else{
    console.log("It is not a palindrome")
}


isPalindrome.split("").reverse().join("") === isPalindrome ? console.log("It is a palindrome") : console.log("It is not a palindrome");     

// Write code to count how many vowels are present.

const myVowelString = "javascript";

let vowelCount = 0;

let vowels = ['a', 'e', 'i', 'o', 'u'];

for(let i=0;i<myVowelString.length;i++){
    let char = myVowelString[i].toLowerCase();
    if(vowels.includes(char)){
        vowelCount++;
    }
}

console.log(vowelCount);
let vowelArr = [...myVowelString];
let myVowels = {};

vowelArr.filter(character => {
  if (vowels.includes(character.toLowerCase())) {
    if (myVowels[character]) {
      myVowels[character]++;
    } else {
      myVowels[character] = 1;
    }
  }
});

console.log(myVowels);


// Find the second largest number.


const  = [10, 5, 20, 8, 15];