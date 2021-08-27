function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let a = commands[i];
    let b = array.slice(a[0] - 1, a[1]);

    answer.push(b.sort((a, b) => a - b)[a[2] - 1]);
  }

  return answer;
}
