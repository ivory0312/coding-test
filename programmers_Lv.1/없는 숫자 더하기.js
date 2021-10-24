function solution(numbers) {
  var answer = 0;

  numbers.map((data) => {
    answer += data;
  });

  return 45 - answer;
}
