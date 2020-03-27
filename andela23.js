function minimumSwaps(ratings) {
  var swaps = 0;
  var len = ratings.length;
  var visited = new Array(len).fill(0);
  var finalstate = [...ratings].sort(function(a, b){return a-b}).reverse();
  
  ratings.forEach(function (rating, i) {
   var moves = 0;
    while(visited[i] == 0) {
      visited[i] = 1;
      i = finalstate.indexOf(rating);
      rating = ratings[i];
      moves += 1;
    }
    if (moves != 0) {
      swaps += moves - 1;
    }
  });
  return swaps;
}

var rep = [3,1,4];
var result = minimumSwaps(rep);

console.log(result);