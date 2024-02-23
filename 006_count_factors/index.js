function solve(A) {

    let result = 0;

    for (let i = 0; i*i <= A; i++) {
        if (A % i === 0) {
            if (i*i == A) {
                result ++;
            } else {
                result+=2;
            }
        }
    }

    return result;

}

const A = 5;
const response = solve(A);
console.log("response: ", response)