function solution(num) {
  var answer = 0;
  while (num !== 1) {
    if (answer < 500) {
      if (num % 2 === 0) {
        num /= 2;
        answer++;
      } else {
        num *= 3;
        num += 1;
        answer++;
      }
    } else {
      return -1;
    }
  }

  return answer;
}
