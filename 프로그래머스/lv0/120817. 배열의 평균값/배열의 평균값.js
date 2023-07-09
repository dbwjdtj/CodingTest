function solution(numbers) {
    let sum = 0;
    
    numbers.map((v) => {
        sum += v;
    })
    
    return sum / numbers.length;
}