# Processing Interval Queries

You are evaluating the performance of processing units.

There are `n` processes, where each process `i` runs from `starts[i]` to `ends[i]` (both inclusive).

You are given `q` queries.

For each query:

- `query_process[i]` → exact number of processes running
- `query_start[i]` → start time of the interval
- `query_end[i]` → end time of the interval

Determine how many seconds within the interval `[query_start[i], query_end[i]]` contain exactly `query_process[i]` running processes.

Return an array containing the answer for each query.

---

# Example

Input:

```txt
n = 3

starts = [0, 1, 2]
ends = [2, 5, 10]

q = 2

query_process = [1, 2]
query_start = [1, 4]
query_end = [10, 8]
```

Timeline:

| Time | Running Processes |
| ---- | ----------------- |
| 0    | [0] |
| 1    | [0, 1] |
| 2    | [0, 1, 2] |
| 3    | [1, 2] |
| 4    | [1, 2] |
| 5    | [1, 2] |
| 6    | [2] |
| 7    | [2] |
| 8    | [2] |
| 9    | [2] |
| 10   | [] |

Query 1:

```txt
Interval = [1, 10]
Processes = 1
```

Valid times:

```txt
6, 7, 8, 9
```

Answer:

```txt
4
```

---

Query 2:

```txt
Interval = [4, 8]
Processes = 2
```

Valid times:

```txt
4, 5
```

Answer:

```txt
2
```

---

# Function Description

Complete the function `getQueryAnswers`.

## Parameters

- `int starts[n]`
- `int ends[n]`
- `int query_process[q]`
- `int query_start[q]`
- `int query_end[q]`

## Returns

- `int[q]` — the answer for each query

---

# Constraints

```txt
1 ≤ n ≤ 10^5
0 ≤ starts[i] ≤ ends[i] ≤ 10^5
1 ≤ q ≤ 10^5
0 ≤ query_start[i] ≤ query_end[i] ≤ 10^5
0 ≤ query_process[i] ≤ 10^5
```

---

# Sample Case 0

## Input

```txt
n = 3

starts = [0, 4, 10]
ends = [10, 6, 12]

q = 3

query_process = [0, 1, 2]
query_start = [0, 4, 3]
query_end = [20, 10, 20]
```

## Output

```txt
[8, 3, 4]
```

## Explanation

Between `0` and `20`, there are `8` seconds where no process is running:

```txt
13, 14, 15, 16, 17, 18, 19, 20
```

Between `4` and `10`, there are `3` seconds where exactly `1` process is running:

```txt
7, 8, 9
```

Between `3` and `20`, there are `4` seconds where exactly `2` processes are running:

```txt
4, 5, 6, 10
```