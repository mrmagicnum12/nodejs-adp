var arrayOfNums;

//array of numbers
arrayOfNums = [1,2,3,4,11,23,45,44,54,88,89,99,2232,1111]
arrayOfNums = removeAllOddNumbers(arrayOfNums);

//print to console
printResults(arrayOfNums);

//public facing method for user to pass array of odd and even numbers
function removeAllOddNumbers(list){
    
    //validate list is a valid array with at least one value
    if(Array.isArray(list) && list.length > 0)
        return removeOddNums()
    return console.log("please send valid array")

    //recursive function do to not looping
    function removeOddNums(newPostion,savedEvenNumbers){
        var position, evenNumbers;
        
        //varibles for recursion do to no looping
        position = newPostion || list.length-1; 
        evenNumbers = savedEvenNumbers || [];
        
        //kill recursion when reaching first position of list of numbers 
        if(position - 1 == 0){
          return evenNumbers;
        }
        
        //store even numbers in private array
        if(list[position] && !isOdd(list[position])){
            //add even number to beginning of array to keep same order 
            evenNumbers.unshift(list[position]);
            return removeOddNums(--position,evenNumbers)
        }
        return removeOddNums(--position,evenNumbers)

        //check if number is odd
        function isOdd(num){
           return num % 2
        }
    }
}

//print results
function printResults(list){
    return console.log(list.join(","))
}