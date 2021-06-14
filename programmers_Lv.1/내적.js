function solution(a, b) {
  var answer = 0;
  var l = a.length;
  for (var i = 0; i < l; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
