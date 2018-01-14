import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + params(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function params(data) {
  let url = ''
  for (let [key, val = ''] of Object.entries(data)) {
    url += `&${key}=${encodeURIComponent(val)}`
  }
  return url ? url.substring(1) : ''
}
