function mostPopular(s) {
  let freq = {};
  let mosts = [];
  for (let letter of s){
    const curr = freq[letter] || 0;
    freq[letter] = curr + 1;
  }

  let most = Math.max(...Object.values(freq));
  
  for (let letter in freq){
    if (freq[letter] === most){
      mosts.push(letter);
    }
  }

  return mosts;
}
