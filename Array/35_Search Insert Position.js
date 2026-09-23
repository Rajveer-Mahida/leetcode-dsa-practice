let nums = [1, 3, 5, 6];
let target = 4;


// #1 Using a simple linear search approach
var linearSearchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {


        if (nums[i] === target) {
            console.log(`Target ${target} found at index ${i}.`);
            return i;
        } else if (nums[i] >=target) {

            console.log(`Target ${target} should be inserted at index ${i}.`);
            return i;
        }else if(nums[nums.length - 1] < target){
            console.log(`Target ${target} should be inserted at the end of the array at index ${nums.length}.`);
            return nums.length;
        }
    }
};

//#2 Using binary search approach

var binarySearchInsert = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            console.log(`Target ${target} found at index ${mid}.`);
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log(`Target ${target} should be inserted at index ${left}.`);
    return left;

}

linearSearchInsert(nums, target);
binarySearchInsert(nums, target);
