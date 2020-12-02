import Taro from '@tarojs/taro'
import { Canvas } from '@tarojs/components'

// inner {width color}
export default function CircleProgress(props) {
  const { windowWidth } = Taro.getSystemInfoSync()
  const scale = (375 / windowWidth).toFixed(1)
  const { canvasId, className = '', radius = 50, inner = {}, outer = {}, percent = 0 } = props
  const bigR = (radius + outer.width) / scale
  const r = radius / scale

  const didmount = () => {
    const pi = Math.PI
    const ctx = Taro.createCanvasContext(canvasId, this)
    ctx.strokeStyle = inner.color
    ctx.lineWidth = inner.width / scale
    ctx.arc(bigR, bigR, r, pi * 0.5, pi * 2.5)
    ctx.stroke()
    ctx.draw()

    ctx.setTextAlign('center')
    ctx.font = '13px PingFangSC-Regular'
    ctx.fillStyle = '#999999'
    ctx.fillText(`${percent}%`, bigR, bigR + 5)

    ctx.strokeStyle = outer.color
    ctx.lineWidth = outer.width / scale

    const p = (percent / 100) * 2 - 0.5
    ctx.arc(bigR, bigR, r, -0.5 * pi, pi * p)
    ctx.lineCap = 'round'
    ctx.stroke()
    ctx.draw(true)
    return
  }

  return <Canvas className={className} ref={didmount} canvasId={canvasId}></Canvas>
}

CircleProgress.options = {
  styleIsolation: 'apply-shared'
}
