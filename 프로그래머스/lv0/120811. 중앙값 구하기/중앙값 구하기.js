function solution(array) {
    const arr = array.sort((a, b) => {
        if(a < b) {
            return -1;
        }
        if(a > b) {
            return 1;
        }
        if(a === b) {
            return 0;
        } else {
            return -1;
        }
    })
    
    const center = parseInt(array.length / 2);
    
    return arr[center];
}