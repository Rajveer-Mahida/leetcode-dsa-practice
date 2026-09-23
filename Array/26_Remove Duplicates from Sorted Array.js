/**
 * @param {number[]} nums
 * @return {number}
 */

const array = [1,1,2,2,3,3,4,5,5,6,7,8,9,9];


// #1 Using a new array to store unique elements 
var removeDuplicates = function(nums) {

    let uniqueElements = [];

    for(let i=0;i<nums.length;i++){
       if(uniqueElements.length === 0 || uniqueElements[uniqueElements.length - 1] !== nums[i]){
           uniqueElements.push(nums[i]);
       }

    }

    // copy distinct values back into first k slots of nums (in-place requirement)
    for(let i=0;i<uniqueElements.length;i++){
        nums[i] = uniqueElements[i];
    }

    return uniqueElements.length;
};

// #2 In-place solution using two pointers
var inPlaceRemoveDuplicates = function(nums) {
    if(nums.length === 0) return 0;

    let i = 0; // pointer for the position of the last unique element

    for(let j = 1; j < nums.length; j++) {
        console.log(`Comparing nums[${j}] = ${nums[j]} with nums[${i}] = ${nums[i]}`);
        if(nums[j] !== nums[i]) {
            i++; // move the pointer for unique elements
            nums[i] = nums[j]; // update the position with the new unique element
        }
    }

    console.log(`Final array with unique elements: ${nums.slice(0, i + 1)}`);

    return i + 1; // length of unique elements
}



removeDuplicates(array);
inPlaceRemoveDuplicates(array);

