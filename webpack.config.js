import path from 'path';

module.exports = {
  mode: 'development', // 'production'
  entry: './server', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    
  }
}
