var http = require('http');
var fs = require('fs');
var documentRoot = 'F:/work/picture/pictureView/WebServer'; //设置文件的根目录，可以修改为个人的自定义目录。
var server = http.createServer(function(req,res) {
    var url = req.url;
    var file = documentRoot + url;
    console.log(url);
    fs.readFile(file,function(err,data) {
        if(err){
            res.writeHeader(404,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type':'text/html;charset=utf-8"'
            });
            res.write(data);
            res.end();
        }
    });
}).listen(8888);//设置的端口号，建议为6000以上。
console.log('服务器开启成功');