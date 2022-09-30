// add whatever parameters you deem necessary & write docstring
function sameFrequency(num1, num2) {
    let digits1 = num1.toString().split('').sort((a,b) => a - b);
    let digits2 = num2.toString().split('').sort((a,b) => a - b);
    
    if (digits1.length !== digits2.length) return false;

    for (let i = 0; i < digits1.length; i++){
        if (digits1[i] !== digits2[i]){
            return false
        }
    }
    return true;
}
