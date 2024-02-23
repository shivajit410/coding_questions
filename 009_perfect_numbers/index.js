function solve(A) {

    if (A <= 1) {
        return 0;
    }
    let sum = 1;
    for (let i = 2; i*i <= A; i++) {
        if (A % i === 0) {
            sum += i;
            if (A/i !== i) {
                sum += A/i;
            }
        }
    }
    if (sum === A) {
        return 1;
    } else {
        return 0;
    }

}

const A = 6;
const response = solve(A);
console.log("response: ", response)