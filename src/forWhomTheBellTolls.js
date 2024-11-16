export function forWhomTheBellTolls(n) {
    if (n === 1) return [1]

    let acc = n
    let cur = n - 2
    let arr = [acc]

    while (cur >= 2) {
        acc = acc + cur
        cur -= 2
        arr.push(acc)
    }

    const middle = n % 2 === 1 ? [acc + 1] : []

    const rev = arr.slice().reverse()

    return [...arr, ...middle, ...rev]
}

export function forWhomTheBellTolls2(n, s1, s2) {
    if (n === 1) return [1]

    let acc = n
    let cur = n - 2
    let arr = [acc]

    while (cur >= 2) {
        acc = acc + cur
        cur -= 2
        arr.push(acc)
    }

    const middle = n % 2 === 1 ? [acc + 1] : []

    const rev = arr.slice().reverse()

    return [...arr, ...middle, ...rev, s1, s2]
}