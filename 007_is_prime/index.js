function solve(A) {

    // Approach 1
    // if (A <= 0) {
    //     return 0;
    // }

    // let result = 0;

    // for (let i = 0; i*i <= A; i++) {
    //     if (A % i === 0) {
    //         if (i*i == A) {
    //             result ++;
    //         } else {
    //             result+=2;
    //         }
    //     }
    // }

    // if (result === 2) {
    //     return 1;
    // } else {
    //     return 0
    // }

    // Approach 2
    if (A <= 1) return 0;
    if (A <= 3) return 1;
    if (A % 2 == 0 || A % 3 == 0) return 0;
    for (let i = 5; i*i <= A; i+=2) {
        if (A % i === 0) return 0;
    }
    return 1;

}

const A = 17;
const response = solve(A);
console.log("response: ", response)