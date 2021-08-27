function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((a) => a % divisor === 0);
  answer.sort((a, b) => a - b);

  if (answer.length === 0) {
    answer[0] = -1;
  }

  return answer;
}
