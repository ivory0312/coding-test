function solution(arr)
{
    var answer = [];
    const l = arr.length;
    
    for (var i = 0; i < l; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
 
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(i)
    
    return answer;
}