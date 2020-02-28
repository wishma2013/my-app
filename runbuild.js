/**
 * Created by eilir on 2020/2/28.
 */
const path = require('path');
const express = require('express');

const app = express();
//const compiler = webpack(webpackConfig);

var requestTime = function (req, res, next) {
    console.log(Date.now())
    next()
}

app.use(requestTime);

app.get('*', (req, res) => {
    if(req.url === '/'){
        res.sendFile(path.join(__dirname, '/build/index.html'));
    }else{
        res.sendFile(path.join(__dirname, '/build'+req.url));
    }
});

app.listen(5002, '0.0.0.0', (err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log('serve build', 'http://127.0.0.1:5002');
});