function solution(s) {
  var a = s.toLowerCase();
  var answer = '';
  var count = 0;
  
  for (var i = 0; i < a.length; i++) {
      if (a[i] == ' ') {
          count = -1;
      }
      if (count === 0 || count % 2 === 0) {
          answer += a[i].toUpperCase();
          count++;
      }
      else {
          answer += a[i];
          count++;
      }
  }
  
  return answer;
}