/**
 * Created by eilir on 2020/3/3.
 */
/*
* 假设filename是"Shop.1.react.js"
*
* */
const myimport = function(file){
    const fs = require('fs')
    let mainName = file.split(".")[0];
    //搜索文件夹所有mainName开头的文件
    const app = require('../components/App.react')
    if(!!app){
        console.log("可以用")
    }
    console.log(file)
    /*最后要返回一个jsx的页面模型！[F_105] # 2020-03-03 02:37:25*/

}
export default myimport