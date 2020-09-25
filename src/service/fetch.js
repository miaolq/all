// TODO: middleware形式
export const generateFetch = ({ root = '', stringify, toJson, handleUnexpectedCode }) => {
  return (url, options) => {
    const copy = { ...options }
    const { body } = copy
    if (stringify && body) {
      copy.body = JSON.stringify(body)
    }
    const response = fetch(`${root}${url}`, copy)
    if (!toJson && !handleUnexpectedCode) {
      return response
    }

    const resJson = response.then((res) => res.json())
    if (handleUnexpectedCode) {
      return resJson.then(handleUnexpectedCode)
    }
    return resJson
  }
}

export default fetch

// eslint-disable-next-line no-unused-vars
function doc(data) {
  fetch('/', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
}
