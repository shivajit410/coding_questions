function solve(A) {

    function checkEvenOdd(num) {
        if (num % 2 === 0) {
            return 'even'
        } else {
            return 'odd'
        }
    }
    function findLargest(arr) {
        let largest = -100000000;
        for (let i of arr) {
            if (i > largest) {
                largest = i;
            }
        }
        return largest
    }
    function findSmallest(arr) {
        let smallest = 100000000;
        for (let i of arr) {
            if (i < smallest) {
                smallest = i;
            }
        }
        return smallest
    }
    let arrEvenNum = [];
    let arrOddNum = [];
    
    for (let i of A) {
        if (checkEvenOdd(i) === 'even') {
            arrEvenNum.push(i)
        } else {
            arrOddNum.push(i)
        }
    }

    if (arrEvenNum.length === 0) {
        arrEvenNum = [0]
    }

    if (arrOddNum.length === 0) {
        arrOddNum = [0]
    }


    const maxEven = findLargest(arrEvenNum);
    const minOdd = findSmallest(arrOddNum);

    const result = maxEven - minOdd;
    return result

}

const A = [5, 17, 100, 1];
const response = solve(A);
console.log("response: ", response)