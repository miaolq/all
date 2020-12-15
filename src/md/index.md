1. 首屏优化 
window.performace.timing对象 。 performace api
优化：lighthouse测评

event-loop ,requestAnimationFrame?


同源策略 https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy // todo
快速计算点位百分比的工具  todo

2. 浏览器多进程架构
1. 浏览器进程
2. 插件进程
<!-- 3. 网络进程 -->
4. 多个渲染进程
5. GPU进程

3. 多进程架构好处
1. 浏览器tab之间互不影响，一个tab有bug或繁忙，不会影响其他tab
2. 沙箱隔离，安全；例如渲染进程不能随便访问文件系统


// layer???
// 缓存  
beforeunload unload
浏览器进程解析是不是url，是url则从浏览器内部、操作系桶dns解析，没有找到则通过udp连接dns服务器查找ip，浏览器根据tcp/ip协议与服务器建立连接，发送http请求，服务器回复，  Content-Type  如果是html，传给渲染进程，parsing cssom renderTree layout paint(绘制指令)    compositor（分层） \raster 线程 