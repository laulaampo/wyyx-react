const { override, fixBabelImports ,addDecoratorsLegacy,addLessLoader} = require('customize-cra');
module.exports = override(
     fixBabelImports('import', {
       libraryName: 'antd-mobile',
       style: 'css',
     }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    },
  }),
  // ES7 装饰器语法兼容
  // @babel/plugin-proposal-decorators
  addDecoratorsLegacy()
   );