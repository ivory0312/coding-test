function solution(n) {
  var answer = [];

  answer = n.toString().split('').reverse().map(a => parseInt(a));
  
  return answer;
}