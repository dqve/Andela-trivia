var splitInteger = function(num, parts) {
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
	console.log(firstArray,sum);
     if (sum != num){
            
            var rem = num - sum;
            var tem = rem;
        
       for (y = 0; y < rem; y++) {
        var olde = (tem / rem) + newe;
        var older = Math.floor(olde);
        secondArray.push(older);
       
    }
	console.log(secondArray);
       Array.prototype.spliceArray = function(index, n, array) {
        return Array.prototype.splice.apply(this, [index, n].concat(array));
        }

      var flen = firstArray.length;
	  var slen = secondArray.length;

	  var arrLen = flen - slen;
      
      var finalArray = firstArray.spliceArray(1,arrLen,secondArray).concat(secondArray);

       finalArray.sort();
       
         } else {
    var finalArray = firstArray;
        }

    return finalArray;
}