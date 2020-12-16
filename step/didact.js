/* eslint-disable react/no-deprecated */
// https://pomb.us/build-your-own-react/
// question

// fiber的结构
const txtEle = 'TEXT_ELEMENT'

let open = false
function debug() {
  if (open) {
    //
  }
}
// 生成组件对象
function createElement(type, props, ...children) {
  debug()
  return {
    type,
    props: {
      ...props,
      children: children.map((item) => (typeof item === 'object' ? item : createTextElement(item))),
    },
  }
}

// 生成文本对象
function createTextElement(text) {
  debug()
  return {
    type: txtEle,
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

const isEvent = (key) => key.startsWith('on')
const isProperty = (key) => key !== 'children' && !isEvent(key)
const isNew = (prev, next) => (key) => prev[key] !== next[key]
const isGone = (prev, next) => (key) => !(key in next)

// 初始化、更新dom，props和events
function updateDom(dom, prevProps, nextProps) {
  debug()
  // remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2)
      dom.removeEventListener(eventType, prevProps[name])
    })
  // remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = ''
    })
  // set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = nextProps[name]
    })
  // add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2)
      dom.addEventListener(eventType, nextProps[name])
    })
}

// 创建dom，并挂载props，events
function createDom(fiber) {
  debug()
  const { type, props } = fiber
  const dom = type === txtEle ? document.createTextNode('') : document.createElement(type)
  updateDom(dom, {}, props)
  return dom
}

let nextUnitOfWork = null
let wipRoot = null // todo
let currentRoot = null
let deletions = null

function render(element, container) {
  debug()
  // 用mount的节点创建一个root-fiber
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot,
  }

  deletions = []
  nextUnitOfWork = wipRoot
}

function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom)
  } else {
    commitDeletion(fiber.child, domParent)
  }
}

// 根据更新后的fiber，更新dom
function commitWork(fiber) {
  debug()
  if (!fiber) {
    return
  }
  let domParentFiber = fiber.parent
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent
  }
  const domParent = domParentFiber.dom
  
  if (fiber.effectTag === 'PLACEMENT' && fiber.dom !== null) {
    domParent.appendChild(fiber.dom) // todo 这怎么就是替换了，不是新增吗
  } else if (fiber.effectTag === 'PLACEMENT') {
    debugger
    domParent.replaceChild(fiber.dom, fiber.alternate.dom)
  } else if (fiber.effectTag === 'UPDATE' && fiber.dom !== null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props)
  } else if (fiber.effectTag === 'DELETION') {
    // domParent.removeChild(fiber.dom)
    commitDeletion(fiber.child, domParent)
  }

  debug()
  commitWork(fiber.child) // 递归更新child-fiber
  commitWork(fiber.sibling) // 递归sibling-fiber
}

function commitRoot() {
  debug()
  deletions.forEach(commitWork)
  commitWork(wipRoot.child)

  currentRoot = wipRoot // 更新结束后，currentRoot指向新的root
  wipRoot = null // working-in-progress-Root 指向null
}

function reconcileChildren(wipFiber, propsChildren) {
  debug()
  let index = 0
  let oldChildFiber = wipFiber.alternate && wipFiber.alternate.child

  let prevSibling = null
  while (index < elements.length || oldFiber) {
    const element = elements[index]
    let newFiber = null

    const sameType = element && oldChildFiber && element.type === oldChildFiber.type

    if (sameType) {
      // update oldFIber
      newFiber = {
        type: oldChildFiber.type,
        props: element.props,
        dom: oldChildFiber.dom,
        alternate: oldChildFiber,
        parent: wipFiber,
        effectTag: 'UPDATE',
      }
    } else if (element && oldChildFiber && !sameType) {
      // replace
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        alternate: oldChildFiber,
        parent: wipFiber,
        effectTag: 'PLACEMENT',
      }
    } else if (element && !oldChildFiber && !sameType) {
      // new
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        alternate: null,
        parent: wipFiber,
        effectTag: 'ADD',
      }
    } else if (!element && oldChildFiber && !sameType) {
      // remove oldFiber
      debugger
      oldFiber.effectTag = 'DELETION'
      deletions.push(oldFiber)
    }

    if (oldChildFiber) {
      oldChildFiber = oldChildFiber.sibling
    }

    if (index === 0) {
      wipFiber.child = newFiber
    } else if (element) {
      prevSibling.sibling = newFiber
    }

    prevSibling = newFiber
    index++
  }
}

let wipFiber = null
let hookIndex = null

function useState(initial) {
  const oldHook =
    wipFiber.alternate && wipFiber.alternate.hooks && wipFiber.alternate.hooks[hookIndex]
  const hook = { state: oldHook ? oldHook.state : initial, queue: [] }

  const actions = oldHook ? oldHook.queue : []
  actions.forEach((action) => {
    hook.state = action(hook.state)
  })

  

  const setState = (action) => {
    hook.queue.push(action)
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    }
    
    nextUnitOfWork = wipRoot
    deletions = []
  }
  wipFiber.hooks.push(hook)
  ++hookIndex

  return [hook.state, setState]
}

function updateFunctionComponent(fiber) {
  wipFiber = fiber
  hookIndex = 0
  wipFiber.hooks = []

  const children = [fiber.type(fiber.props)]
  
  reconcileChildren(fiber, children)
}

function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }
  const elements = fiber.props.children
  
  reconcileChildren(fiber, elements)
}

function performUnitOfWork(fiber) {
  // add dom node
  const isFunctionComponent = fiber.type instanceof Function
  if (isFunctionComponent) {
    updateFunctionComponent(fiber)
  } else {
    updateHostComponent(fiber)
  }

  

  const elements = fiber.props.children
  reconcileChildren(fiber, elements)

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
  return null
}

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && shouldYield === false) {
    
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot() // 没有单元工作，并且有wipRoot（render执行后才会有wipRoot），就提交root
  }
  window.requestIdleCallback(workLoop)
}

window.requestIdleCallback(workLoop)

const Didact = {
  createElement,
  createTextElement,
  render,
  useState,
}

const onClick = () => {
  alert(1)
}

/** @jsx Didact.createElement */
function App(props) {
  const [count, setCount] = Didact.useState(1)
  return <h1 onClick={() => setCount((pre) => pre + 1)}>{count}</h1>
}
const element = <App name="matt" />
// const reactElement = (
//   <div id="foo">
//     <a href="">bar</a>
//     <div onClick={onClick}>
//       999
//       <input value="88" />
//     </div>
//   </div>
// )

/** @jsx Didact.createElement */
const reactElement2 = (
  <div id="foo">
    <p href="">pppp</p>
    <div onClick={onClick}>
      999
      <input value="88" />
    </div>
  </div>
)

const container = document.getElementById('root')
Didact.render(element, container)
