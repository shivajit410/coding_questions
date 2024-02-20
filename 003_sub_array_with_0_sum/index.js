function solve(A) {

    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            let subArr = A.slice(i, j+1)
            if (subArr.reduce((acc, curr) => acc + curr, 0) === 0) {
                return 1;
            }
        }
    }
    return 0;

}

const A = [4, 1, -1];
const response = solve(A);
console.log("response: ", response)