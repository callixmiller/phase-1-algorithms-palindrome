function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase()
  const arrayWord = lowerCaseWord.split('')
  const reverseArray = arrayWord.reverse()
  const reverseWord = reverseArray.join('')
  if (lowerCaseWord === reverseWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  Function isPalindrome needs to read a string
    string will be checked to see if the word is a Palindrome (is the word the same when writen backwords)
    string needs to be read to lower case
      if the word is a Palindrome, result is true
        else if the word is not a Palindrome, result is false
  
  return result
*/

/*
  Add written explanation of your solution here
  Function isPalindrome accepts a string.
  The string letters are then converted into all lower case letters.
  The string needs to be reversed, to reverse the string needs split.
  Spilt will convert the string into an array (arrayWord).
  The string array (arrayWord) is reorder backwards using the array method reverse (reverseArray).
  After the array has been reversed, the array needs converted back to a string using array method join (reverseWord)
  If...else statement is used to compare the original string (converted to lowercase) against the reverse string.
  If both strings equal each other, the result will be true.
  Else if both strings are not equal to each other, the result will be false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
