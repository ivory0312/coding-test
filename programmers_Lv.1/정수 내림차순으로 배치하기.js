function solution(n) {
  var answer = 0;
  const b = String(n);
  const a = b.split('');
  a.sort((a, b) => { return b - a});
  answer = parseInt(a.join(''));
  return answer;

}