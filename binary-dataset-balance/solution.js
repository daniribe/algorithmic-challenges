function minOperationsToUnbias(n, data1, data2) {
  let balance = 0

  for (const c of data1) {
    balance += c === '1' ? 1 : -1
  }

  for (const c of data2) {
    balance += c === '1' ? 1 : -1
  }

  if (balance === 0) {
    return 0
  }

  const suffix = new Map()
  suffix.set(0, 0)

  let current = 0

  // Remove from end of data1
  for (let i = n - 1; i >= 0; i--) {
    current += data1[i] === '1' ? 1 : -1

    const removed = n - i

    if (!suffix.has(current) || suffix.get(current) > removed) {
      suffix.set(current, removed)
    }
  }

  let answer = Infinity

  // Only removing from data1
  if (suffix.has(balance)) {
    answer = Math.min(answer, suffix.get(balance))
  }

  current = 0

  // Remove from start of data2
  for (let i = 0; i < n; i++) {
    current += data2[i] === '1' ? 1 : -1

    const removed2 = i + 1

    const need = balance - current

    if (need === 0) {
      answer = Math.min(answer, removed2)
    }

    if (suffix.has(need)) {
      answer = Math.min(answer, removed2 + suffix.get(need))
    }
  }

  return answer
}