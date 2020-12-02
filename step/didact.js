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

function createDom(fiber) {
  const { type, props } = fiber
  const dom = type === txtEle ? document.createTextNode('') : document.createElement(type)
  const isProperty = (key) => key !== 'children'
  Object.keys(props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = props[name]
    })
  return dom
}

let nextUnitOfWork = null

function render(element, container) {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element],
    },
  }
}

function performUnitOfWork(fiber) {
  // add dom node
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom)
  }

  const elements = fiber.props.children
  let index = 0
  let prevSibling = null
  while (index < elements.length) {
    const element = elements[index]

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }
    prevSibling = newFiber
    index++
  }

  if (fiber.child) {
    return fiber.child
  }

  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && shouldYield === false) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  window.requestIdleCallback(workLoop)
}

window.requestIdleCallback(workLoop)

const Didact = {
  createElement,
  createTextElement,
  render,
}

/** @jsx Didact.createElement */
const reactElement = (
  <div id="foo">
    <a href="">bar</a>
    <b />
  </div>
)

const container = document.getElementById('root')
Didact.render(reactElement, container)
