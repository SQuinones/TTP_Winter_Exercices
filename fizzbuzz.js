function  fizzB(n){
    //this line execute a foor lop which iterates from 0 to n(number)
    for(let i = 1; i <= n; i++)
    {
        //condition to print Fizz Buzz when the number is divisible by 3 and 5
            if(i % 3 === 0 && i % 5 === 0){
                console.log('Fizz Buzz')
            // else if condition to print Fizz when the number is divisible by 3
            }else if(i % 3 === 0){
                console.log('Fizz')
            //condition to print Buzz when the number is divisible by 5
            }else if(i % 5 ===0){
                console.log('Buzz')
            // this condition will execute when all the conditions above are false
            }else{
                console.log(i)
            }
    }
    }
    // calling the function and take the parameter 
    fizzB(21)