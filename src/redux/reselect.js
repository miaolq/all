// import { createSelector } from 'reselect'

// const getVisibilityFilter = (state) => state.visibilityFilter
// const getTodos = (state) => state.todos

// // memoized selector 。 避免冗余计算，重复渲染
// export const getVisibleTodos = createSelector(
//   [getVisibilityFilter, getTodos],
//   (visibilityFilter, todos) => {
//     switch (visibilityFilter) {
//       case 'SHOW_ALL':
//         return todos
//       case 'SHOW_COMPLETED':
//         return todos.filter((t) => t.completed)
//       case 'SHOW_ACTIVE':
//         return todos.filter((t) => !t.completed)
//     }
//   }
// )


// // inputselector outputselector.  outputselector can be inputselector