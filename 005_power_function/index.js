function solve(A, B, C) {

    let result = A ^ B % C;
    return result;

}

const A = 2;
const B = 3;
const C = 3;
const response = solve(A, B, C);
console.log("response: ", response)