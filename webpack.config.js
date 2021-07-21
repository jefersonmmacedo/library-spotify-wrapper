import path,{ join } from "path"

const __dirname = path.resolve()

export default () => ( {
    mode: 'development',
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library:'spotifyWrapper',
    },
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader',
          },
        ],
      },
});
