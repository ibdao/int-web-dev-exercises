// add whatever parameters you deem necessary & write docstring
function isSubsequence(s1, s2) {
    if(!s1) return true;

    let i1 = 0;
    let i2 = 0;

    while (i2 < s2.length){
        if (s2[i2] === s1[i1]) i1++;
        if (s1.length === i1) return true;
        i2++;
    }
    return false;
}
