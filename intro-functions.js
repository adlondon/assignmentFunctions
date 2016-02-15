// jshint ignore: start

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if (a > b) {
      return: a;
    }
    else if {
      return:b;
    }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){


var arr = Math.max(a,b,c);
return arr;

}


console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

 function isVowel(char){
   var newChar = char.toString().toLowerCase();
   if (newChar === "a" ||newChar ===  "e" ||newChar ===  "i" ||newChar ===  "o" ||newChar ===  "u")
   {
     return true;
   }
   else {
     return false;
   }
 }

 console.assert(isVowel(0) === false);
 console.assert(isVowel("B") === false);
 console.assert(isVowel("b") === false);
 console.assert(isVowel("a") === true);
 console.assert(isVowel("E") === true);


/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

 function rovarspraket(int){
   var returnString = "";
   if( typeof(int) !== 'string')
    {return int.toString();}
   for (var i = 0; i < int.length; i++){
     if (int[i].toLowerCase() === "a" || int[i].toLowerCase() === "e" || int[i].toLowerCase() === "i" || int[i].toLowerCase() === "o" || int[i].toLowerCase() === "u") {
        returnString += int[i];
     }
     else {
       returnString += int[i].concat("o").concat(int[i]);
     }
   }
   return returnString;
 }

 console.assert(rovarspraket("a") === "a")
 console.assert(rovarspraket("b") === "bob")
 console.assert(rovarspraket("cat") === "cocatot")
 console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
 console.assert(rovarspraket(0) === "0")


/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
  return str.split("").reverse().join("")
  }

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */




 function findLongestWord(sentence) {
   var input = sentence.replace(/[^\w\s]|_/g, "").split(" ");
   var longest = 0;
   var output = null;

   for (var i = 0; i < input.length; i++) {
     if (input[i].length > longest) {
       longest = input[i].length;
       output = input[i];
     }
   }
 return output;
 }

 console.assert(findLongestWord("book dogs") === "book");
 console.assert(findLongestWord("don't mess with Texas") === "Texas")

// used puncuation removal from http://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
