function solution(absolutes, signs) {
  var answer = 0;
  const arrLength = signs.length;

  for (var i = 0; i < arrLength; i++) {
    answer += signs[i] ? absolutes[i] : -absolutes[i];
  }
  return answer;
}
