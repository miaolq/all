# useContext

# useReducer

- 传递 dispatch 而不是回调函数
- React 使用 Object.is 比较算法 来比较 state。
- 惰性初始 state， 如果初始化 state 话花费过高，可以传函数给 useState, 函数只在初始化渲染调用。

# useState

- useState 的 setState 不会自动合并
- 惰性初始 state， 如果初始化 state 话花费过高，可以传函数给 useState, 函数只在初始化渲染调用。

# useEffect

- useEffect 的回调会在页面渲染完新数据（paint）之后执行。如果要在回调中改变 dom,应该使用 useLayoutEffect，useLayoutEffect 的回调在 react 的 dom 操作后同步执行，dom 已经修改，但是浏览器此时还没渲染（paint），这样避免页面闪烁。
- useEffect 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行
- 有依赖的话，只会初始渲染执行一次，依赖变更后渲染执行

# forwardRef

- 函数组件不接受 ref。可以使用 forwardRef，这样函数组件可以接收两个参数：props， ref

# createPortal
