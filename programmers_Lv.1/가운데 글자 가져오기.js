function solution(s) {
  var answer = '';
  const l = s.length, i = l / 2;
  
  answer = l % 2 === 0 ? s.slice(i - 1, i + 1) : s[parseInt(i)];
      
  return answer;
}