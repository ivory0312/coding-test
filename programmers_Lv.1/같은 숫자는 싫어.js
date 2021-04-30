function solution(arr) {
    var answer = [];
    const l = arr.length;
    
    for (var i = 0; i < l; i++) {
      if (arr[i] !== arr[i + 1]) {
        answer.push(arr[i]);
      }
    }
    
    return answer;
}