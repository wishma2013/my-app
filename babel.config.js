module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    /*支持组件内()=>{}匿名函数定义写法*/
    '@babel/plugin-proposal-class-properties'
  ]
};
