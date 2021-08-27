function solution(a, b) {
  var answer = 0;

  if (a > b) {
    let c = a;
    a = b;
    b = c;
  }

  for (var i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
}
