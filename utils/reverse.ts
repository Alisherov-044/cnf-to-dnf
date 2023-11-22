export function reverse(cnf: string[]) {
  let reversedCnf = []

  for (let each of cnf) {
    let res = ''

    for (let i = 0; i < each.length; i++) {
      if (each[i] === '0') {
        res += '1'
      } else {
        res += '0'
      }
    }

    reversedCnf.push(res)
  }

  return reversedCnf
}
