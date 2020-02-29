export const doFilter = (values, filter, fields = ['name']) => {
  if (!filter) {
    return values
  }

  const lowerCaseFilter = filter.toLowerCase()

  return values.filter(value =>
    Object.keys(value)
      .map(key =>
        fields.includes(key) ? value[key].toString().toLowerCase() : ''
      )
      .find(element => element.toString().includes(lowerCaseFilter))
  )
}

export const doSort = (a, b, key) => {
  const first = parseFloat(a[key].slice(0, -1))
  const second = parseFloat(b[key].slice(0, -1))

  if (first > second) {
    return 1
  } else if (first < second) {
    return -1
  }
  return 0
}

export const openUrl = url => {
  window.open(url, '_blank')
}
