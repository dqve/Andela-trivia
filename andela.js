function splitInteger(num, parts) {
    var x,y, index = 0;
    var firstArray = [];
    var secondArray = [];
    var sum = 0;

    for (x = 0; x < parts; x++) {
        var newe = num / parts;
        var newer = Math.floor(newe);
        firstArray.push(newer);
        sum+=firstArray[x];
    }
    
    return firstArray;

    for (x = 0; x < parts; x++) {
        sum+=firstArray[x];
    }
    return sum;
    
     if (sum < num){
            
            var rem = num - sum;
            var tem = rem;
        
       for (y = 0; y < rem; y++) {
        var olde = tem / rem + newe;
        var older = Math.floor(olde);
        secondArray.push(older);
       
    }
        return secondArray;

       Array.prototype.spliceArray = function(index, n, array) {
        return Array.prototype.splice.apply(this, [index, n].concat(array));
        }

       var arrLen = secondArray.length;
       var finalArray = firstArray.spliceArray(0,arrLen,secondArray); 
       finalArray.sort();
         } else {
    return firstArray;
    var finalArray = firstArray;
    return finalArray;
        }

    return finalArray;
    // do whatever

}

var result = splitInteger(10, 3);

console.log(result);