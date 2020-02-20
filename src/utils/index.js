export const filters = (values, filter, fields = ['name']) => {
  return filter
    ? values.filter(value => {
        return (
          Object.keys(value)
            .map(key =>
              fields.includes(key) ? value[key].toString().toLowerCase() : ''
            )
            .findIndex(element => element.toString().includes(filter)) !== -1
        )
      })
    : values
}
