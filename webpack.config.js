const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rulesForJavascript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic' // default classic
                }
            ]
        ]
    }
}

const rulesForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'] //style-loader encargado de entender los import y estilos, css-loader, encargado de entender rutas de imagenes en tu proyecto.

}

const rulesForImages = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: 'file-loader',
    options: {
        name: 'public/[name].[ext]'
    }
}

const rules = [rulesForJavascript, rulesForStyles, rulesForImages]

module.exports = (env, argv) => {
    const { mode } = argv
    const isProduction = mode === 'production'

    return {
        //entry: './src/index.js'
        output: {
            filename: isProduction
                ? '[name].[contenthash].js'
                : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'public/index.html' })
        ],
        module: { rules },
        devServer: {
            open: true, //abre el navegador
            port: 3000,
            compress: true
        }
    }
}