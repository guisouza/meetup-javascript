module.exports = {
  entry: './js/entry.js',
  output: './bundle.js',
  devServer: {
    progress: true,
    inline: true,
    colors: true,
    port: 3001
  },
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
