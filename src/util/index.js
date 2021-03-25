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

export const throttle = (fn, wait) => {
  let prev = 0
  return (...rest) => {
    const now = Date.now()
    if (now - prev > wait) {
      fn(...rest)
      prev = now
    }
  }
}

export const debounce = (fn, timeout) => {
  let timer = null
  return (...rest) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...rest)
      timer = null
    }, timeout)
  }
}
