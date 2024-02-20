function solve(A, B) {

    let result = [];
    for (let i of A) {
        if (B.includes(i)) {
            result.push(i);
            const index = B.indexOf(i);
            B.splice(index,1)
        }
    }
    return result;

}

const A = [1, 2, 2, 1];
const B = [2, 3, 1, 2];
const response = solve(A, B);
console.log("response: ", response)