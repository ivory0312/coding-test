function solution(arr) {
  var answer = 0;
  const l = arr.length;

  for (var i = 0; i < l; i++) {
    answer += arr[i];
  }

  answer /= l;

  return answer;
}
