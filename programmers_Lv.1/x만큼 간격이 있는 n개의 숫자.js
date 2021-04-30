function solution(x, n) {
  var answer = [];
  var a = x;
  
  for (var i = 0; i < n; i++) {
    answer[i] = x;
    x += a;
  }
  
  return answer;
}