const CracoAlias = require('craco-alias');
const CracoEsbuildPlugin = require('craco-esbuild');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const path = require('path');

const smp = new SpeedMeasurePlugin();

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: './tsconfig.paths.json',
            },
        },
        // { plugin: CracoSwcPlugin }
        { plugin: CracoEsbuildPlugin },
        // {
        //     plugin: new HtmlWebpackPlugin({
        //         template: path.resolve('./public/index.html'),
        //         filename: path.resolve('./index.html'),
        //         favicon: path.resolve('./public/favicon.ico')
        //     })
        // }
    ],
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            paths.appBuild = webpackConfig.output.path = path.resolve('..', './build_react');
            return webpackConfig;
            // return smp.wrap(webpackConfig);  // Important: return the modified config
        }
    }
};