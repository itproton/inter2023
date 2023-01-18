/*
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


var lengthOfLongestSubstring = function (s) {
    let maxStr = [];
    let curStr = [];
    const arr = Array.from(s);
    for (let i = 0; i < arr.length; i++) {
        [dict, curStr] = [{}, []];
        for (let j = i; j < arr.length; j++) {
            const cur = arr[j];
            if (dict[cur]) {
                const len = curStr.length;
                if (len > maxStr.length) {
                    maxStr = curStr;
                }
                [dict, curStr] = [{}, []];
            }
            curStr.push(cur);
            dict[cur] = true;
        }
    }
    return Math.max(curStr.length, maxStr.length);
};

console.log(lengthOfLongestSubstring('ab'));