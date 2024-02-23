function solve(A) {

    if (A <= 1) {
        return 0
    }
    let prime_counter = 0;
    
    for (let j = 1; j<= A; j++) {
        let counter = 0;
        for (let i = 1; i*i <= j; i++) {
            if (j % i === 0) {
                if (i * i === j) {
                    counter++;
                } else {
                    counter += 2;
                }
            }
        }
        if (counter == 2) {
            prime_counter += 1;
        }
    }

    return prime_counter;

}

const A = 19;
const response = solve(A);
console.log("response: ", response)