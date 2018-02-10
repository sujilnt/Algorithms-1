/* practical method of stack */

function Palindrome(word){
    let wordArr=word.split("");
    let reverseWord=wordArr.reverse().join("");
    if(word=== reverseWord){
        console.log("This is a palindorme", word );
    } else {
        console.log("This is a not palindorme", word , reverseWord)
    }
}

Palindrome("malayalams");
