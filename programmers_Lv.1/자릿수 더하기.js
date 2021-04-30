function solution(n) {
    var answer = 0;

    n = n.toString().split('').map(a => parseInt(a));
    
    for (var i = 0; i < n.length; i++) {
        answer += n[i];
    }

    return answer;
}