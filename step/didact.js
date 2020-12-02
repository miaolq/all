/* eslint-disable react/no-deprecated */
// https://pomb.us/build-your-own-react/
const txtEle = 'TEXT_ELEMENT'

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((item) => (typeof item === 'object' ? item : createTextElement(item))),
    },
  }
}

function createTextElement(text) {
  return {
    type: txtEle,
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

// todo: add update delete
function render(element, container) {
  const { type, props } = element
  const dom = type === txtEle ? document.createTextNode('') : document.createElement(type)
  const isProperty = (key) => key !== 'children'
  Object.keys(props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = props[name]
    })
  props.children.map((child) => render(child, dom))
  container.appendChild(dom)
}

const Didact = {
  createElement,
  createTextElement,
  render,
}

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a href="">bar</a>
    <b />
  </div>
)

let nextUnitOfWork = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && shouldYield === false) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  window.requestIdleCallback(workLoop)
}
window.requestIdleCallback(workLoop)

function performUnitOfWork() {
  // todo
}

const container = document.getElementById('root')
Didact.render(element, container)
