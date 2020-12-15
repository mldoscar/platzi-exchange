import numeral from 'numeral'

const dollarFilter = value => {
  if (!value) {
    return '$ 0.00'
  }

  return numeral(value).format('($ 0.00a)')
}

const percentFilter = value => {
  if (!value) {
    return '0.00%'
  }

  return `${Number(value).toFixed(2)}%`
}

export { dollarFilter, percentFilter }
