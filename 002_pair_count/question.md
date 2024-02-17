# Pair Count

#### Problem Description

You are given an integer array **A** and integer **B**

You are required to return the count of pairs having sum **B**

**Note:** Pairs (i,j) and (j,i) are the same

#### Problem Constraints

```
1 <= A.size() <= 10000
1 <= A[i] <= 10000
1 <= B <= 10000
```

#### Input Format

The first argument given is the integer array - **A**

The second argument given is the integer - **B**

#### Output Format

Return an integer representing count of pairs

#### **Example Input & Output**

| Sr. No. | Input                          | Output |
| ------- | ------------------------------ | ------ |
| 1       | A = [1, 2, 3, 2, 1]<br />B = 5 | 2      |
| 2       | A = [1, 1, 1]<br />B = 2       | 3      |

#### Example Explanation

Explanation 1:

```
A[1] + A[2] = A[2] + A[3] = 5
```

Explanation 2:

```
A[0] + A[1] = A[0] + A[2] = A[1] + A[2] = 2
```
