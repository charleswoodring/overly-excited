// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept the array as the sole argument. It should iterate over the array and output the words to the browser console.
*/
// Rewrite addExcitement ass arrow function.
const addExcitement = (arr, punctuation) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < arr.length; i++) {
        /*
            If the current value of `i` divided by 3 has no remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.Otherwise, just concatenate the word itself.
         */
        if (i !== 0 && (i+1) % 3 === 0) { 
            arr[i] = arr[i] + punctuation
        }
        const word = arr[i]
        

        // Concatenate the new word onto buildMeUp with space
        buildMeUp += word + " "       

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array as the argument - add 2nd argument
addExcitement(sentence, "...")