"abhishek".split(",")
["abhishek"]
"abhishek,gupta".split(",")
(2) ["abhishek", "gupta"]
"abhishek,gupta,codingblocks".split(",")
(3) ["abhishek", "gupta", "codingblocks"]
"abhishek".substr(1, 3)
"bhi"
"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness".split("/")
(8) ["https:", "", "developer.mozilla.org", "en-US", "docs", "Web", "JavaScript", "Equality_comparisons_and_sameness"]
var x = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness".split("/")
undefined
x[x.length-1]
"Equality_comparisons_and_sameness"


// Array
/* skdjfsd
skldfjkshdf
 */

arr[10]
"tenth"
arr[11] = [ 1, 2, [1, 3] ]
(3) [1, 2, Array(2)]
arr
(12) [1, 2, 3, "hetro", {…}, empty × 5, "tenth", Array(3)]0: 11: 22: 33: "hetro"4: {x: 2}10: "tenth"11: (3) [1, 2, Array(2)]0: 11: 22: Array(2)0: 11: 3length: 2__proto__: Array(0)length: 3__proto__: Array(0)length: 12__proto__: Array(0)
arr.indexOf(2)
1
arr.indexOf("hetro")
3
arr
(12) [1, 2, 3, "hetro", {…}, empty × 5, "tenth", Array(3)]
arrp[5] = [ 1, 2]
VM2735:1 Uncaught ReferenceError: arrp is not defined
    at <anonymous>:1:1
(anonymous) @ VM2735:1
arr[5] = [ 1, 2]
(2) [1, 2]
arr
(12) [1, 2, 3, "hetro", {…}, Array(2), empty × 4, "tenth", Array(3)]0: 11: 22: 33: "hetro"4: {x: 2}5: (2) [1, 2]10: "tenth"11: (3) [1, 2, Array(2)]length: 12__proto__: Array(0)
arr.indexOf([1, 2])
-1
[1, 2] === [1, 2]
false
[1, 2] == [1, 2]
false