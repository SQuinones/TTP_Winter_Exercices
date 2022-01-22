// The Caesar Cipher encryption technique is a way of en encrypting a message. 
// for example te original alphabet consist of  26 letters : abcdefghijklmnopqrstuvwxyz
//Alphabet rotated +3: defghijklmnopqrstuvwxyzabc.
//When you want to rotate the alphabet by 3 the first letter which is a will becomes d after rotated 
//and b becomes e after rotated and so on

//The function receives a text and shift integer value and returns an encrypted text
// creating a function with two parameter text and ns 
//ns correspond a number of shifts
function caesar_cipher(text, ns)
    {
        let result=""
        //this line execute a for loop which traverse the length of the text
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            //if  statement to shift the uppercase letters for encryption
            if (char.toUpperCase(text[i]))
            {   
                //formula to apply the shift in uppercase letters
                let ch =  String.fromCharCode((char.charCodeAt(0) + ns-65) % 26 + 65);
                result += ch;
            }

            //if  statement to shift the lowercase letters for encryption
            else
            {   //formula to apply the shift in lowercase letters 
                let ch = String.fromCharCode((char.charCodeAt(0) + ns-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }
     
    // test the code 
    // declaring variable text and assign a string message
    let text = "ILOVEMYPET";
    //declaring an int variable and assign the number of shifts 
    let ns = 6;
    //this line print the message 
    document.write("Text  : " + text + " ");
    // this line print the number os shifts
    document.write("Shift : " + ns + " ");
    //this line call the function to execute the encryption and will print a encrypting message 
    document.write("Cipher: " + caesar_cipher(text, ns) + " ");
