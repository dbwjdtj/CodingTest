function solution(slice, n) {
    if(slice > n) {
        return 1;
    }
    
    if(n % slice == 0) {
        return n / slice;
    } else {
        return parseInt(n / slice) + 1;
    }
}