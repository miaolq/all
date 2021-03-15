// 横竖屏幕
const div = document.getElementById('div')
var mql = window.matchMedia('(orientation: portrait)')
function onMatchMeidaChange(mql) {
  if (mql.matches) {
    div.innerHTML = '竖'
    // 竖屏
  } else {
    // 横屏
    div.innerHTML = '横'
  }
}
onMatchMeidaChange(mql)
mql.addListener(onMatchMeidaChange)
