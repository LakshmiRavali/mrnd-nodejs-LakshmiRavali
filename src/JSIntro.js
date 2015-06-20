
exports.Sum = function(num1, num2){
return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){ var a = new Array();
    var i,len,sum=0;
    len = arrayOfNums.length;
    for(i=0;i<len;i++)
    {
        sum = sum + arrayOfNums[i];
    }
    return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
 var sum = 0, i;
     arrayOfNums.sort();
    sum=arrayOfNums[0];
    for(i=1;i<arrayOfNums.length;i++)
    {
        if(arrayOfNums[i]!=arrayOfNums[i-1])
        {
            sum = sum + arrayOfNums[i];
        }
    }
    return sum;}

exports.ReverseString = function(str){   
	return str.split('').reverse().join('');
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	return arrayOfStrings.reverse();
}