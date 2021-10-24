function solution(arr1, arr2) {
  var answer = [];
  var temp = [];
  
  for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr1[i].length; j++) {
          temp.push(arr1[i][j] + arr2[i][j]);
      }

      answer.push(temp);
      
      temp = [];
  }
  
  return answer;
}