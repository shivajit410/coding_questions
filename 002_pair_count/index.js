function solve(A, B) {

    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i+1; j < A.length; j ++) {
            if (A[i] + A[j] === B) {
                count += 1;
            }
        }
    }
    return count

}

const A = [1, 2, 3, 2, 1];
const B = 5;
const response = solve(A, B);
console.log("response: ", response)