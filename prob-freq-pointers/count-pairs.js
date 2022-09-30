// add whatever parameters you deem necessary & write docstring
function countPairs(nums, target) {
    let pairs = []; 

    let left = 0; 
    let right = 1; 

    while (left < nums.length - 1){
        let sum = nums[left] + nums[right];

        if (sum === target){
            pairs.push([nums[left], nums[right]]);
        } 
        right++; 

        if (right >= nums.length){
            left++;
            right = left + 1;
        }
    }

    return pairs.length;
}
