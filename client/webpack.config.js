
module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
          presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/../server/static/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
};
