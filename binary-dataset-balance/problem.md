# Binary Dataset Balance

Some developers want to merge two binary classification training datasets such that the final dataset is unbiased.

The annotated classification values of the two datasets are represented using two binary strings, `data1`, and `data2`, where:

- `0` represents one class
- `1` represents another class

In a single operation:

- the rightmost data point of `data1` can be removed, or
- the leftmost data point of `data2` can be removed.

Given `data1` and `data2`, find the minimum number of operations required such that after merging the two datasets, the total number of `0`s is equal to the total number of `1`s.

## Note

The two datasets do not need to be of the same size at the time of merging; the only requirement is that the combined dataset must contain an equal number of `0`s and `1`s.

---

# Example

Input:

```txt
data1 = "011"
data2 = "110"
```

Initial totals:

- Total `1`s = 4
- Total `0`s = 2

After deleting the last `1` from `data1`:

```txt
data1 = "01"
data2 = "110"
```

After deleting the first `1` from `data2`:

```txt
data1 = "01"
data2 = "10"
```

Final totals:

- Total `1`s = 2
- Total `0`s = 2

Answer:

```txt
2
```

---

# Function Description

Complete the function `minOperationsToUnbias`.

## Parameters

- `int n` — the initial size of the datasets
- `string data1` — the classification values of the first dataset
- `string data2` — the classification values of the second dataset

## Returns

- `int` — the minimum number of operations required

---

# Constraints

```txt
1 ≤ n ≤ 10^5
```

---

# Sample Case 0

## Input

```txt
2
01
11
```

## Output

```txt
2
```

## Explanation

It is optimal to remove both the `1`s from the second dataset or remove the last `1` from `data1` and the first `1` from `data2`.

Both approaches require `2` operations.

---

# Sample Case 1

## Input

```txt
6
111001
010110
```

## Output

```txt
6
```

## Explanation

Remove:

- the last `1` from `data1`
- the first five characters from `data2`

Result:

```txt
data1 = "11100"
data2 = "0"
```

Final totals:

- Total `1`s = 3
- Total `0`s = 3