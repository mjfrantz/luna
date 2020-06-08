/* eslint-disable */

require('dotenv').config();

const path = require('path');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const withCss = require('@zeit/next-css');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/theme.less'), 'utf8'),
);

module.exports = withCss(
  withLess({
    env: {
      key: process.env.AWS_ACCESS_KEY_ID,
    },
    target: 'serverless',
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
    webpack: function(config, { isServer }) {
      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }

      return config;
    },
  }),
);
