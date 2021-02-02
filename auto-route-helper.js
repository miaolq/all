const chokidar = require('chokidar')
const fs = require('fs')
const { paramCase, pascalCase } = require('change-case')

// TODO: require.context 替换

chokidar
  .watch('./src/auto-route', { ignored: './src/auto-route/index.jsx' })
  .on('all', (event, path) => {
    console.log('watch', event, path)
    writeTo()
  })

const getNameExt = (name) => {
  let dotIndex = name.lastIndexOf('.')
  dotIndex = dotIndex === -1 ? name.length : dotIndex
  return {
    name: name.substring(0, dotIndex),
    ext: name.substring(dotIndex),
  }
}

function writeTo() {
  fs.readdir('./src/auto-route', (err, files) => {
    let res = 'import React from "react"\r\nimport { Route } from "react-router"\r\n'
    const list = files
      .map((item) => {
        const { name, ext } = getNameExt(item)
        if (['.jsx', '.js'].includes(ext)) {
          const pascalName = pascalCase(name)
          const paramName = paramCase(name)
          if (pascalName === 'Index') {
            return null
          }
          return { pascalName, paramName, name }
        }
        return null
      })
      .filter((item) => !!item)

    res += list.reduce((pre, cur) => {
      const { pascalName, name } = cur
      return `${pre}import ${pascalName} from './${name}'\r\n`
    }, '')

    const routes = list.reduce((pre, cur) => {
      const { pascalName, paramName } = cur
      return `${pre}<Route path="/ar/${paramName}" component={${pascalName}} />\r\n`
    }, '')

    res += `
    export default function (){
      return <>${routes}</>
    }
    `

    fs.writeFile('./src/auto-route/index.jsx', res, (fsErr, fsRes) => {
      console.log(fsErr, fsRes)
    })
  })
}
