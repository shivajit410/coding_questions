# Sub Array with 0 Sum

#### Problem Description

Given an array of intetgers **A,** find and return whether the given array contains a **non-empty** subarray with a sum equal to 0. If the given array contains a sub-array with sum 0 return **1** else return **0**

#### Problem Constraints

```
1 <= |A| <= 100000
-10^9 <= A[i] <= 10^9
```

#### Input Format

The only argument given is the integer array - **A**

Output Format

Return whether the given array contains sub array with sum equal to 0

#### **Example Input & Output**

| Sr. No. | Input               | Output |
| ------- | ------------------- | ------ |
| 1       | A = [1, 2, 3, 4, 5] | 0      |
| 2       | A = [4, -1, 1]      | 1      |

#### Example Explanation

Explanation 1:

```
No subarray has sum = 0, return 0
```

Explanation 2:

```
The subarray [-1,1] has sum = 0, return 1
```
