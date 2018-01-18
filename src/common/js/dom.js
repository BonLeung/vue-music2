export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

let style = document.createElement('div').style

let vendor = (() => {
  let transformName = {
    'webkit': 'webkitTansform',
    'Moz': 'MozTransform',
    'O': 'OTransform',
    'ms': 'msTransform',
    'standard': 'transform'
  }

  for (let key in transformName) {
    if (style[transformName[key]] !== 'undefined') {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (!vendor) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
