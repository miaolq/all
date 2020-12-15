/* eslint-disable class-methods-use-this */
class FileListPlugin {
  apply(compiler) {
    // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      console.log(9999, 'FileListPlugin')
      // Create a header string for the generated file:
      let filelist = 'In this build:\n\n'

      // Loop through all compiled assets,
      // adding a new line item for each filename.
      for (const filename in compilation.assets) {
        filelist += `- ${filename}\n`
      }

      debugger
      // Insert this list into the webpack build as a new file asset:
      compilation.assets['filelist.md'] = {
        source() {
          return filelist
        },
        size() {
          return filelist.length
        },
      }

      callback()
    })
  }
}

module.exports = FileListPlugin
