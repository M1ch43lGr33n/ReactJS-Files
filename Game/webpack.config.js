module.exports = {
// Identify the entry file
entry: './scripts/main.js',
output: {
path: __dirname,
filename: 'index.js'
},
resolve: {
// Be able to import from file regardless of extension
extensions: ['.js', '.jsx']
},
// Set up the webpack-dev-server for use
devServer: {
inline: true, // Auto-refresh page on the fly
port: 8080 // Arbitrarily chosen for demo
},
module: {
loaders: [
{
// All files that end with '.js' and '.jsx'
test: /\.jsx?$/,
// Do not use files in node_modules folder
exclude: /node_modules/,
// Use babel as the loader (-loader needed
// from webpack 2.3.0+)
loader: 'babel-loader',
// Pass arguments/queries to the loader
query: {
presets: ['es2015', 'react']
}
}
]
 }
}