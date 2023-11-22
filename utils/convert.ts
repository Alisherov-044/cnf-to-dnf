import { extract, letters, reverse } from '.'

export function convert(cnf: string) {
  let reversedCnf = reverse(extract(cnf))
  let result = []

  for (let each of reversedCnf) {
    let localDnfForm = ''

    for (let i = 0; i < each.length; i++) {
      if (each[i] === '0') {
        localDnfForm += `~${letters[i]}`
      } else {
        localDnfForm += letters[i]
      }
    }

    result.push(localDnfForm)
  }

  return result.join('+')
}
