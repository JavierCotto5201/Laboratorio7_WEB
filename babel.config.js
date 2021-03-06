const presets = [
        [
            "@babel/env",
            {
                useBuiltIns:"usage",
                corejs:"3",
            },
        ],
];

const plugins = ["@babel/plugin-transform-arrow-functions",
                "@babel/plugin-transform-duplicate-keys",
                "@babel/plugin-transform-classes",
                ]; 

module.exports = { presets, plugins };