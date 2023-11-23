import { generateBinarySequences } from '.'

export function extract(cnf: string) {
  let rules = generateBinarySequences(5)

  let cnfArr = cnf
    .replaceAll(' ', '')
    .replaceAll('(', ' ')
    .replaceAll(')', ' ')
    .split('  ')

  for (let each of cnfArr) {
    let localNumForm = ''

    for (let w of each.trim().replaceAll(' ', '').split('+')) {
      if (w.startsWith('~')) {
        localNumForm += '0'
      } else {
        localNumForm += '1'
      }
    }

    rules = rules.filter((x) => x !== localNumForm)
  }

  return rules
}
