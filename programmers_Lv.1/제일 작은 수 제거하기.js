function solution(arr) {
  var answer = [];
  var m = arr[0];

  for (var i = 0; i < arr.length; i++) {
    m = m > arr[i] ? arr[i] : m;
  }
  answer = arr.length === 1 ? [-1] : arr.filter((a) => a !== m);

  return answer;
}
