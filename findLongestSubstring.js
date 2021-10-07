// WAF which accepts a string and returns longest substring with distinct characters

function findLongestSubstring(str) {
  let obj = {};
  let len = 0;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }
    len = Math.max(len, i - start + 1);
    obj[char] = i + 1;
  }
  return len;
}

console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("helloworld"));
console.log(findLongestSubstring("thecatinthehat"));
