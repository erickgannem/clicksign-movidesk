const path = require('path')

module.exports = {
  mode: 'none',
  target: 'node',
  entry: './src/server.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@handlers': path.resolve(__dirname, 'src/handlers'),
      '@middlewares': path.resolve(__dirname, 'src/middlewares'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@src': path.resolve(__dirname, 'src')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}
