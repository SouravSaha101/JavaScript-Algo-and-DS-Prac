// Write a function that take 2 strings and checks weather chars from 1st string
// are a substring of chars in 2nd string

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("abc", "wdwad"));
console.log(isSubsequence("qaz", "mkhopqazlop"));
console.log(isSubsequence("ko", "kpkpkpko"));
console.log(isSubsequence("abc", "cab"));
