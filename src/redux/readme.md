# redux toolkit封装了哪些东西？
- Redux DevTools Extension
- redux-thunk
- immer
- 开发模式下检查错误：直接修改state（在reducer外），使用不可序列化的值
- 简化模版代码

# 工具函数
- createReducer 内部使用了immer, 可以直接修改state
- createSlice 内部使用了createReducer, 可以直接修改state。 
- createSlice 自动生成action type, action creators, 根据提供的name。 和reducer
- 多个数据 可能需要监听同一个action，比如监听用户登出，然后重置数据
- 循环应用导致的bug https://codesandbox.io/s/rw7ppj4z0m?from-embed
- todo: 写一个middleware校验循环应用导致的bug!!!!!
- createAction 生成action创建函数， 方便创建action。 createAction(type,callback?)
```js
const actionCreator = createAction('SOME_ACTION_TYPE')
console.log(actionCreator.toString(),actionCreator.type) // 很巧妙
// "SOME_ACTION_TYPE"
```

# 
- 避免action type 重复造成bug

# question 
- why need dispatch? not just call function to call reducer

- redux; redux-thunk; 源码