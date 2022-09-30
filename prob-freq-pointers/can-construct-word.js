// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
    if (letters.length < word.length) return false; 

    let freqWord = {};
    let freqLetters = {}; 

    for (let letter of word){
        const curr = freqWord[letter] || 0;
        freqWord[letter] = curr + 1;
    }

    for (let letter of letters){
        const curr = freqLetters[letter] || 0;
        freqLetters[letter] = curr + 1;
    }

    for (let letter in freqWord){
        if (freqWord[letter] > freqLetters[letter]){
            return false;
        }
    }
    return true; 
}
