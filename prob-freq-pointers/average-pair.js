// add whatever parameters you deem necessary & write docstring
function averagePair(nums, targetAvg) {
    let left = 0; 
    let right = nums.length - 1;
    while (left < right){
        let avg = (nums[left] + nums[right]) / 2

        if (avg === targetAvg) return true;
        if (avg > targetAvg) right--;
        if (avg < targetAvg) left++;
    }
    return false;
}

