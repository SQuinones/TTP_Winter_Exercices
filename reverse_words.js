
//this function will reverse every word in a given string 
//every word will reverse but the string as a whole will not reversed
function reverseWords(string)
{
    //In this line I am declaring two empty string variables 
    var word = "", output = "";
    //this line execute a for loop which traverse the length of the string and takes 
    //1 away. And it has to be >= 0 and then subtract 1 from each time for loops run
    for(var i = string.length - 1; i >= 0; i--) {
        //if condition that will execute when the condition is true
        if (string[i] == " ") {
            //In this line the variable output is referring to a new value
            output = " " + word + output;
            word = "";
        }
        // when the if condition is false this condition will execute
        else {
            word += string[i];
        }
    }
    //This line will return the  every word in reverse 
    return word + output;
}

// this sentence is used to call the function and print the result 
console.log(reverseWords('I love my life'))