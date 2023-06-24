/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
* You can read about this approach in the link below:
* https://leetcode.com/problems/valid-anagram/solutions/3261552/easy-solutions-in-java-python-javascript-and-c-look-at-once/
* */

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var freq = new Array(26).fill(0);

    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"));
