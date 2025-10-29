const charMap: Record<string, string> = {
  İ: 'I',
  I: 'I',
  ı: 'i',
  i: 'i',
  Ş: 'S',
  ş: 's',
  Ğ: 'G',
  ğ: 'g',
  Ü: 'U',
  ü: 'u',
  Ö: 'O',
  ö: 'o',
  Ç: 'C',
  ç: 'c'
}

const normalizeChars = (value: string) => {
  return value
    .split('')
    .map((char) => {
      if (charMap[char] !== undefined) {
        return charMap[char]
      }
      return char
    })
    .join('')
}

export const toSlug = (value: string) => {
  return normalizeChars(value)
    .replace(/&/g, ' ve ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
