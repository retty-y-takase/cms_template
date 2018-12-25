module.exports = {
  pages: {
    index: {
      entry: 'src/entry-point/index/main.js', // エントリーポイントとなるjs
      template: 'public/index.html', // テンプレートのHTML
      filename: 'index.html' // build時に出力されるファイル名
    },
    dashboard: {
      entry: 'src/entry-point/dashboard/main.js',
      template: 'public/dashboard.html',
      filename: 'dashboard.html'
    },
    list: {
      entry: 'src/entry-point/list/main.js',
      template: 'public/list.html',
      filename: 'list.html'
    },
    edit: {
      entry: 'src/entry-point/edit/main.js',
      template: 'public/edit.html',
      filename: 'edit.html'
    }
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: '/index.html' }, // index.html に飛ばす
        { from: /\/dashboard/, to: '/dashboard.html' },
        { from: /\/list/, to: '/list.html' },
        { from: /\/edit/, to: '/edit.html' },
      ]
    }
  }
}