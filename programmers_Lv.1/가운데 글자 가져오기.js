function solution(s) {
  var answer = "";
  var arr = [];
  const l = s.length;
  const a = s.split("");

  if (l % 2 === 0) {
    answer = s.slice(l / 2 - 1, l / 2 + 1);
  } else {
    answer = s[parseInt(l / 2)];
  }

  return answer;
}
