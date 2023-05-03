//the task

//Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of all positive integers less than
//or equal to n.
//Factorials are often represented with the shorthand notation n!
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//Example Outputs:
//factorialize(0) should return 1.
//factorialize(10) should return 3628800.
//factorialize(20) should return 2432902008176640000.




//Pseudocode
    //1- function take one argument an integer
    //2-create new arr to take integer's factors and number to hold the result
    //3-if statement to check if the integer more the 0
    //4-loop through the integer factors and push them into the new arr (factors)
    //5- if the integer equal 0 just return the result
    //6-loop through factors arr to multipy each element of the arr and return the result


function factorialize(n){
var factors=[];
var result = 1 ;
    if (n > 0 ){
        for( var i = n ; i > 0 ; i--){
            factors.push(i)
        }
    }else if (n == 0){
        result == 1;
    }
    for ( var j =0;j < factors.length; j++){
            result *=factors[j]
        }
return result
}
console.log(factorialize(10))



//diagram

    //1- function will take one argument(an integer)
    //2-if statement will check if the integer > 0
    //3-if yes, loop through the factors of the integer and multipy them with each others
   //4-return the result