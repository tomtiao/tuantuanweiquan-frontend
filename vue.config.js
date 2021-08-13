// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
  pages: {
    index: {
      entry: 'src/index.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    createTuan: {
      entry: 'src/createTuan.ts',
      filename: 'createTuan/index.html'
    },
    createSuccess: {
      entry: 'src/createSuccess.ts',
      filename: 'createSuccess/index.html'
    },
    delegate: {
      entry: 'src/delegate.ts',
      filename: 'delegate/index.html'
    }
  }
}