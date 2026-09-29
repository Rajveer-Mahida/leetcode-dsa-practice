
// var majorityElement = function(nums) {

//     const counts = {};
//     const majorityCount = Math.floor(nums.length / 2);

//     for (let num of nums) {
//         counts[num] = (counts[num] || 0) + 1;
//         if (counts[num] > majorityCount) {
//             console.log(num);
//             return num;
//         }
//     }

// };

var majorityElement = function (nums) {


    let candidate = null;
    let count = 0;


    for (let num of nums) {

        if (count === 0) {
            candidate = num;
            count++;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }


    let actual_count = nums.filter(n => n === candidate).length;
    if (actual_count > Math.floor(nums.length / 2)) {
        return candidate;
    }

    return null;
};

const inputNums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(inputNums));

