// add whatever parameters you deem necessary & write docstring
function twoArrayObject(arr1, arr2) {
    let combined = {};

    for (let i = 0; i < arr1.length; i++){
        combined[arr1[i]] = !arr2[i] ? null : arr2[i]; 
    }
    return combined;
}
