//1

// function reverseNumber(x) {
//     let result = 0;
//     while (x) {
//         let mod = x % 10;
//         result = result * 10 + mod;
//         x = Math.floor(x / 10);
//     };
//     return result
// };

// console.log(reverseNumber(32234));

// //////////////////////////////////////////////////////////////////////
// 2

// function checkPalindrome(s) {
//     let original = s.split(' ').join('');
//     let [left, right] = [0, s.length - 1];
//     while (left < right) {
//         if (s[left].toLowerCase() != s[right].toLowerCase()) {
//             return false;
//         };
//         left++;
//         right--;
//     };
//     return true;
// }

// console.log(checkPalindrome("A man nam a"));

// /////////////////////////////////////////////////////////////////
// 3
// function allCombination(x) {
//     let result = [];
//     for (let i = 0; i <= x.length; i++) {
//         for (let j = i + 1; j <= x.length; j++) {
//             result.push(x.slice(i, j))
//         }
//     }
//     return result;
// }

// console.log(allCombination('dog'));

// /////////////////////////////////////////////////////////////////////
// 4

// function alphabetical(x) {
//     result = x.split('').sort().join('');
//     return result;
// }

// console.log(alphabetical('fwfdwsaaaef b'));

// /////////////////////////////////////////////////////////////////////
// 5
// How to use charAt() to read string
// function firstUpper(x) {
//     let arr = x.split(' ')
//     for (let i in arr) {
//         if (arr[i].length) {
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//         };
//     };
//     arr = arr.join(' ');
//     return arr;
// }

// console.log(firstUpper('the quick brown fox'))

// //////////////////////////////////////////////////////////////////////////////
// 6

// function theLongestWord(x) {
//     let str = x.split(' ')
//     resultIdx = 0
//     maxLength = 0
//     for (let i in str) {
//         if (str[i].length > maxLength) {
//             maxLength = str[i].length;
//             resultIdx = i;
//         };
//     };
//     return str[resultIdx];
// }

// console.log(theLongestWord('Web Development Tutorial'));

// //////////////////////////////////////////////////////////////////////////
// 7
// How to use indexOf() to find if the specific element in arr
// function vowelCount(x) {
//     let dict = ['a', 'e', 'i', 'o', 'u']
//     let count = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (dict.indexOf(x[i].toLowerCase()) !== -1) {
//             count++;
//         };
//     };
//     return count;
// }
// console.log(vowelCount('The quick brown fox'));

////////////////////////////////////////////////////////////////////////////
//8

// function isPrime(x) {
//     if (x < 2) {
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(x); i++) {
//         if (x % i === 0) {
//             console.log(i)
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(17));

// ////////////////////////////////////////////////////////////////////////
// 9

// function getType(x) {
//     return typeof x;
// };

// console.log(getType(undefined))
// console.log(getType(1))
// console.log(getType('12'))
// console.log(getType(true))
// console.log(getType([12, 2]))

// //////////////////////////////////////////////////////////////////////////
// 10

// function sizeOfMatrix(x) {
//     return 'Row:' + x.length + '     Column:' + x[0].length;
// }

// console.log(sizeOfMatrix([[123, 4312], [1234, 444], [1, 4]]))

// /////////////////////////////////////////////////////////////////////////
// 11

// function second(x) {
//     x.sort((a, b) => a - b)
//     let sec = x.slice(1, 2)
//     let greatSec = x.slice(-2, -1)
//     return [sec[0], greatSec[0]]
// }

// console.log(second([1, 2, 3, 4, 5, 6]))

//////////////////////////////////////////////////////////////////////////////
//12

// function perfect(x) {
//     let sum = 0
//     for (let i = 0; i < Math.sqrt(x); i++) {
//         if (x % i === 0) {
//             sum = sum + i + (x / i)
//         }
//     }
//     if (sum === 2 * x) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(perfect(496));
// console.log(perfect(8128));

//////////////////////////////////////////////////////////////////////////
//13

// function factor(x) {
//     let result = [];
//     num = Math.sqrt(x)
//     for (let i = Math.floor(num); i > 0; i--) {
//         if (x % i === 0) {
//             result.splice(0, 0, i);
//             result.push(x / i);
//         }
//     }
//     return result;
// }

// console.log(factor(48));
//////////////////////////////////////////////////////////////////////////

// function amountToCoins(a, b) {
//     let result = []
//     while (a) {
//         for (let i of b) {
//             console.log(i)
//             while (a >= i) {
//                 a -= i;
//                 result.push(i);
//             }
//         }
//     }
//     return result;
// }

// console.log(amountToCoins(46, [25, 10, 5, 2, 1]))

///////////////////////////////////////////////////////////////////////////////
//15

// function power(b, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= b;
//     }
//     return result;
// }

// console.log(power(2, 4))

//////////////////////////////////////////////////////////////////////////////////
//16

// function uniqueCharacter(x) {
//     dict = []
//     result = ''
//     for (let i = 0; i < x.length; i++) {
//         if (dict.indexOf(x[i]) === -1) {
//             result += x[i];
//             dict.push(x[i]);
//         }
//     }
//     return result;
// }

// console.log(uniqueCharacter("thequickbrownfoxjumpsoverthelazydog"))

//////////////////////////////////////////////////////////////////////////////////////
//17

// function countNum(x) {
//     result = new Map()
//     for (let i of x) {
//         if (result.has(i)) {
//             result.set(i, result.get(i) + 1)
//         } else {
//             result.set(i, 1)
//         }
//     }
//     return result;
// }

// console.log(countNum([1, 2, 3, 4, 23, 4, 4, 4, 3, 2, 3, 4, 3, 2, 6, 7, 7]))

/////////////////////////////////////////////////////////////////////////////////
//18
//Search a from b
// function binarySearch(x, y) {
//     y.sort((a, b) => a - b)
//     let [left, right] = [0, y.length]
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2)
//         if (x === y[mid]) {
//             return mid
//         } else if (x < y[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
// }

// console.log(binarySearch(5, [2, 2, 4, 6, 3, 3, 2, 4, 5, 6, 6, 7, 7, 8, 4, 4, 3, 1]))

///////////////////////////////////////////////////////////////////////////////
//19

// function largerThan(x, y) {
//     result = y.filter(a => a > x);
//     return result
// }

// console.log(largerThan(5, [2, 2, 4, 6, 3, 3, 2, 4, 5, 6, 6, 27, 7, 7, 8, 4, 4, 3, 1]))

/////////////////////////////////////////////////////////////////////////////////
//20
//charAt() indexOf()
// function generateID(num) {
//     result = ''
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     const range = characters.length
//     for (let i = 0; i < num; i++) {
//         result += characters.charAt(Math.floor(Math.random() * range))
//     }
//     return result
// }
// console.log(generateID(8))

/////////////////////////////////////////////////////////////////////////////////
//21

// function getSubsets(arr, len) {
//     const subsets = [];
//     const total = 2 ** arr.length;

//     for (let i = 0; i < total; i++) {
//         const subset = [];
//         for (let j = 0; j < arr.length; j++) {
//             if ((i & (2 ** j)) !== 0) {
//                 subset.push(arr[j]);
//             }
//         }
//         if (subset.length === len) {
//             subsets.push(subset);
//         }
//     }

//     return subsets;
// }
// console.log(getSubsets([1, 2, 4, 3], 3)[3])

///////////////////////////////////////////////////////////////////////////////////////
//22

// function countLetter(str,letter){
//     let result = 0
//     for (let i of str){
//         if (i === letter){
//             result += 1
//         }
//     }
//     return result
// }

// console.log(countLetter('mircrosoft.com','o'))

////////////////////////////////////////////////////////////////////////////////////////
//23

// function noRepeated(str) {
//     let arr = str.split('')
//     for (let i in str) {
//         let char = arr[Number(i)]
//         arr.splice(i,1)
//         if (arr.indexOf(char) == -1) {
//             return char
//         }
//         arr.splice(i,0,char)
//     }
//     return -1
// }

// console.log(noRepeated('abcddbec'))

//////////////////////////////////////////////////////////////////////////////////////////
//24

// function bubbleSort(x) {
//     for (let i = 0; i < x.length - 1; i++) {
//         for (let j = i + 1; j < x.length; j++) {
//             if (x[i] < x[j]) {
//                 [x[i], x[j]] = [x[j], x[i]]
//             }
//         }
//     }
//     return x
// }

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

/////////////////////////////////////////////////////////////////////////////////////
//25

// function longestCountry(x) {
//     let result = 0
//     let country = ''
//     for (let i of x) {
//         if (i.length > result) {
//             result = i.length;
//             country = i
//         }
//     }
//     return country
// }

// console.log(longestCountry(["Australia", "Germany", "United States of America"]))

////////////////////////////////////////////////////////////////////////////////////////////
//26

// function findLongestSubstring(str) {
//     let longest = 0;
//     let dict = {};
//     let start = 0;
   
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (dict[char]) {
//         start = Math.max(start, dict[char]);
//       }
//       longest = Math.max(longest, i - start + 1);
//       dict[char] = i + 1;
//     }
   
//     return longest;
//   }

// console.log(findLongestSubstring('sewqwrtyuio'))

///////////////////////////////////////////////////////////////////////////////////////
//27

// function longestPalindrome(s) {
//     let ll = 0, rr = 0;
    
//     for (let i = 0; i < s.length; i++)
//       for (let j of [i, i+1])
//         for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
//           [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
    
//     return s.substring(ll, rr+1);
//   }

// console.log(longestPalindrome('babdsffjdjssgsgsgs'))

/////////////////////////////////////////////////////////////////////////////////////////////
//28

// function main(call){
//     call()
// }
// function callback(){
//     console.log("already finished")
// }

// main(callback)

///////////////////////////////////////////////////////////////////////////////////////////
//29

// function getFunctionName(fn) {
//     return fn.name;
//   }

// function call(){
//     console.log('finished')
// }

// console.log(getFunctionName(call))