export const getNameExt = (name) => {
  let dotIndex = name.lastIndexOf('.')
  dotIndex = dotIndex === -1 ? name.length : dotIndex
  return {
    name: name.substring(0, dotIndex),
    ext: name.substring(dotIndex),
  }
}
