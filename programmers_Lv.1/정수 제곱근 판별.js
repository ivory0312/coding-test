function solution(n) {
  var answer = 0;
  var a = Math.sqrt(n);
  var b = Number.isInteger(a);
  
  answer = b ? Math.pow(a + 1, 2) : -1;
  
  return answer;
}