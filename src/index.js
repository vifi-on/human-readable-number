const units = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const secondTen = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]

const dozens = [
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
]

module.exports = function toReadable(number) {

  if (number === 0) {
    return 'zero'
  }

  let arrNum = []
  let arrStr = []
  let result

  // break the number
  while (number) {
    arrNum.push(number % 10)
    number = Math.floor(number / 10)
  }

  // I declare variables for numbers
  let [unit, ten, hundred] = arrNum

  // Converting numbers to readable strings
  if (hundred) {
    arrStr.push(`${units[hundred - 1]} hundred`)
  }

  if (ten >= 2) {
    arrStr.push(dozens[ten - 2])
    if (unit !== 0) {
      arrStr.push(units[unit - 1])
    }
  } else if (ten === 1) {
    arrStr.push(secondTen[unit])
  } else {
    if (unit !== 0) {
      arrStr.push(units[unit - 1])
    }
  }

  result = arrStr.join(' ')

  return result;
}
