function solution(n) {
    const gcd = GCD(n, 6); // 최대공약수
    const lcm = n * 6 / gcd; // 최소공배수
    
    return lcm / 6;
}

const GCD = (d1, d2) => { // 최대공약수 구하는 함수
    if(d2 === 0) {
        return d1;
    }
    
    return GCD(d2, d1 % d2);
}