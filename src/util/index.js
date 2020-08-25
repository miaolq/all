export const a = 1

export const filterKey = (obj) => {
  const res = {}

  Object.entries(obj).forEach(([key, value]) => {
    if (![undefined, null, ''].includes(value)) {
      res[key] = value
    }
  })

  return res
}
