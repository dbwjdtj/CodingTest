function solution(n) {
    let arr = [], num = n;
    
    for(let i = 0; i < num; i++, n--) {
        if(n % 2 !== 0) {
            arr.unshift(n);
        }
    }
    
    return arr;
}