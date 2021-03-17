cube
1. createElement(type,props,children)
2. components, componentMap, relationMap
3. 

页面组件顺序
components [组件id]

组件props
componentMap{
    组件id:{
        name,
        props,
        propEvents
    }
}

组件间嵌套关系
relationMap{
    组件Id:{
        组件key:[子组件id],
        组件key2:[子组件id],
    },
    组件Id:{
        组件key:[子组件id]
    },
}

深度优先渲染

todo：
- 记录的是组件名，如何映射到组件
- 一个 case 用多次同个 action，actionid 重复
- 红边框，点击穿透
- 左侧的拖拽 只是添加。内部的拖拽是移动，不是添加删除（因为props会消失）
- 蒙版阻挡了ondrop事件.   目前布局组件的蒙版画在右侧
- 嵌套，嵌套编辑属性
- 
要支持带props属性的拖拽，就不能已当前组件名称来作为标记，而是移动整个组件的json！！！

fixed ,absolute定位的组件的 边框，删除如何显示？？？

- zarm用到了normalize。   @import "normalize”;不会去重。
- mousemove 冒泡过来时，offsetX和offsetY是子元素的。 使用clientX吧！！！
- 热区子元素宽高改变后，通知父元素。而不是一边拖拽改变，一遍通知父元素，这样减少列表的dom diff。


- 移动魔方，未考虑用户合作。 站点、图资源都已个人分

- 正方形 组件

- Object.defineProperty(DndFlex, '__docgenInfo', {
  get() {
    return DndFlex.DecoratedComponent.__docgenInfo;
  },
});

- 气泡分布算法
- 高级marquee



版本升级:  要考虑到各种状态下的老数据兼容问题!  已提交的,提交到一半的


localstorage缓存对版本升级的影响, 新版本数据结构变了,但是用户本地缓存的数据没变!!!  使用用户的本地数据会造成bug. 解决:1. 使用sessionStorage 2. 新版本对象内添加属性, 从storage取一个对象时,用merge.兼容新版本数据!!!!


少用localstorage.后续升级,数据变化大会有问题


版本升级,老的localStorage不兼容.  
1. 使用sessionStorage
2. localStorage带上版本号.   记得删除老版本
3. localStorage每个存储字段带上版本号,升级后,自动删除老版本
4. 每次升级兼容老版本, 比较难, 有些关系比较复杂




旧浏览器补充到一半,换浏览器提交补充,下次再用旧浏览器补充,会取回上次暂存的数据

1. 在两个浏览器打开一个有状态的页面. 此时会牵扯到状态流转、storage储存的问题
2. 找bug,看数据库记录创建时间

1. mousemove绑定在window上比较好

- onChange自动转大写，输入中文的问题

- location.search location.query  有些浏览器有bug, 获取的是最初的值

- node_modules
- require  import

 使用taro,同时setstate页面和页面内组件,组件更新慢一点,导致页面抖动

- 小程序答题


