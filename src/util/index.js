export const getNameExt = (name) => {
  let dotIndex = name.lastIndexOf('.')
  dotIndex = dotIndex === -1 ? name.length : dotIndex
  return {
    name: name.substring(0, dotIndex),
    ext: name.substring(dotIndex),
  }
}

export const endsWithImg = (name) => {
  return /\.(png|jpe?g|gif|svg)$/.test(name)
}

export const isImgType = (file) => {
  return file.type.startsWith('image/')
}
