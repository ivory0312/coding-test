function solution(answers) {
  var answer = [];
  var count = [0, 0, 0];
  var max = 0;
  var a = [1, 2, 3, 4, 5];
  var b = [2, 1, 2, 3, 2, 4, 2, 5];
  var c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (var i = 0; i < answers.length; i++) {
    if (a[i % a.length] === answers[i]) count[0]++;
    if (b[i % b.length] === answers[i]) count[1]++;
    if (c[i % c.length] === answers[i]) count[2]++;
  }

  max = Math.max(count[0], count[1], count[2]);

  if (max === count[0]) answer.push(1);
  if (max === count[1]) answer.push(2);
  if (max === count[2]) answer.push(3);

  return answer;
}
