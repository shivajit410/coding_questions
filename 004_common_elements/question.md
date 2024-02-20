# Common Elements

#### Problem Description

Given two integer arrays **A** and **B** of size **N** and **M** respectively. Your task is to find all the **common elements** in both the array.

**Note:** 

* Each element in the result should appear as many times as it appears in both the arrays
* The result can be in any order

#### Problem Constraints

```
1 <= N, M <= 10^5
1 <= A[i] <= 10^9
```

#### Input Format

* First argument given is the integer array **A** of size **N**
* Second argument given is an integer array **B** of size **M**

#### Output Format

Return an integer array denoting the common elements

#### **Example Input & Output**

| Sr. No. | Input                                        | Output    |
| ------- | -------------------------------------------- | --------- |
| 1       | A = [1, 2, 2, 1]<br />B = [2, 3, 1, 2]       | [1, 2, 2] |
| 2       | A = [2, 1, 4, 10]<br />B = [3, 6, 2, 10, 10] | [2, 10]   |

#### Example Explanation

Explanation 1:

```
Elements (1, 2, 2) appear in both the array. Note that 2 appears twice in both the array
```

Explanation 2:

```
Elements (2, 10) appear in both the array.
```
