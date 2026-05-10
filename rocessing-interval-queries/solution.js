function getQueryAnswers(
  starts,
  ends,
  query_process,
  query_start,
  query_end,
) {
  const MAX = 100005

  // Sweep line / difference array
  const diff = Array(MAX + 2).fill(0)

  for (let i = 0; i < starts.length; i++) {
    diff[starts[i]] += 1
    diff[ends[i] + 1] -= 1
  }

  // active[t] = number of running processes at time t
  const active = Array(MAX + 1).fill(0)

  active[0] = diff[0]

  for (let t = 1; t <= MAX; t++) {
    active[t] = active[t - 1] + diff[t]
  }

  // prefix[k][t] impossible memory-wise
  // Use map of prefix arrays instead
  const positions = new Map()

  for (let t = 0; t <= MAX; t++) {
    const k = active[t]

    if (!positions.has(k)) {
      positions.set(k, [])
    }

    positions.get(k).push(t)
  }

  function upperBound(arr, target) {
    let left = 0
    let right = arr.length

    while (left < right) {
      const mid = Math.floor((left + right) / 2)

      if (arr[mid] <= target) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    return left
  }

  const result = []

  for (let i = 0; i < query_process.length; i++) {
    const k = query_process[i]
    const left = query_start[i]
    const right = query_end[i]

    const arr = positions.get(k) || []

    const r = upperBound(arr, right)
    const l = upperBound(arr, left - 1)

    result.push(r - l)
  }

  return result
}