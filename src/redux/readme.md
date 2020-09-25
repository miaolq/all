memoizing selectors
use props in selectors


toto: https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux

With useSelector(),the default comparison is a strict === reference comparison, returning a new object every time will always force a re-render by default.
fix: 1. multiple times 2. reselect 3. shallowEqual

```js
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  }
}
```

state change ， selector 就会执行， 影响效率。
Memoized Selector， state.todos, state.visibilityFilter 改变时，才 select

selector 可以带 prop
带 props 的 selector，在同时渲染多个组件实例时，缓存无效
多组件实例共享 带 props 的 selector 的问题： inputSelector 的值一直变。
解决： 可以将 selector 写在 组件内部，每个组件有自己的 selector。

```js
const makeNumOfTodosWithIsDoneSelector = () =>
  createSelector(
    (state) => state.todos,
    (_, isDone) => isDone,
    (todos, isDone) => todos.filter((todo) => todo.isDone === isDone).length
  )

export const TodoCounterForIsDoneValue = ({ isDone }) => {
  const selectNumOfTodosWithIsDone = useMemo(makeNumOfTodosWithIsDoneSelector, [])

  const numOfTodosWithIsDoneValue = useSelector((state) =>
    selectNumOfTodosWithIsDone(state, isDone)
  )

  return <div>{numOfTodosWithIsDoneValue}</div>
}
```
