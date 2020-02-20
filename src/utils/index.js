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
