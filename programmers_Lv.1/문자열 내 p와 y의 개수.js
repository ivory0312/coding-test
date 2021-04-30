function solution(s){
  var answer = true;
  const length = s.length;
  var p = 0;
  var y = 0;
  
  for (var i = 0; i < length; i++) {
    p += s[i] === 'p' || 'P' ? 1 : 0;
    y += s[i] === 'y' || 'Y' ? 1 : 0;
  }
  
  answer = p === y ? true : false;

  return answer;
}