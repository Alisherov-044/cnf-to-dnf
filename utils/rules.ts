export function generateBinarySequences(length: number) {
  let result = []

  for (let i = 0; i < Math.pow(2, length); i++) {
    let binary = i.toString(2)

    while (binary.length < length) {
      binary = '0' + binary
    }

    result.push(binary)
  }

  return result
}

export const letters: { [key: string]: string } = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
}
