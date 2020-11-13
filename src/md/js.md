## js 等值比较

1. ===

```js
;(NaN !== NaN + 0) === -0
```

2. null undefined .null 是一个表示"无"的对象，转为数值时为 0；undefined 是一个表示"无"的原始值，转为数值时为 NaN。
   https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html

```js
Number(null) === 0
Object.is(Number(undefined), NaN) === true
```
