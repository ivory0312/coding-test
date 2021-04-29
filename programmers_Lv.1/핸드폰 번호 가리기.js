function solution(phone_number) {
  var answer = '';
  var a = [];
  a = phone_number.split('');
  for (var i = 0; i < a.length - 4; i++) {
      a[i] = '*';
  }
  answer = a.join('');
  
  return answer;
}