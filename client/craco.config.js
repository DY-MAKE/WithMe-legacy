const CracoAlias = require('craco-alias');
const CracoSwcPlugin = require('craco-swc');

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
        { plugin: CracoSwcPlugin }
    ],
};