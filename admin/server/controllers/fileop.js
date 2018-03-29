var Busboy = require('busboy');
module.exports.routes = {
    'POST /adhar': async (req, res) => {
        var busboy = new Busboy({ headers: req.headers });
        var name = '';
        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            name = 'adhar-'+(new Date().getTime())+'.'+filename.split('.')[1];
            let upload = db.grid.openUploadStreamWithId(name); //uniquely name the file with user's id
            upload.on('finish',function(){
                busboy.emit('uploadComplete')
            })
            file.pipe(upload);
        });
        busboy.on('uploadComplete', function () {
            res.json({ok:true,message:"Upload Complete", fileName: name});
        });
        return req.pipe(busboy);
    },
    'POST /pan': async (req, res) => {
        var busboy = new Busboy({ headers: req.headers });
        var name = '';
        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            name = 'pan-'+(new Date().getTime())+'.'+filename.split('.')[1];
            let upload = db.grid.openUploadStreamWithId(name,name,{contentType:'image/'+filename.split('.')[1]}); //uniquely name the file with user's id
            upload.on('finish',function(){
                busboy.emit('uploadComplete')
            })
            file.pipe(upload);
        });
        busboy.on('uploadComplete', function () {
            res.json({ok:true,message:"Upload Complete", fileName: name});
        });
        return req.pipe(busboy);
    },
    'GET /getFile': async (req,res) => {
        if(req.query.hasOwnProperty('id')){
            let download = db.grid.openDownloadStream(req.query.id)
            let result = await db.files.findOne({_id:req.query.id},{contentType:1})
            console.log(result)
            res.set('Content-Type',result.contentType)
            download.pipe(res);
        } else {
            res.json({ok:false,message:"Missing params"})
        }
        
    }
    /*
    ***How to use file upload***
    var fs = require("fs");
    var request = require("request");

    var options = { method: 'POST',
    url: 'http://localhost:5000/auth/v0.1/upload',
    headers: 
    { 'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData: 
    { '': 
        { value: 'fs.createReadStream("/Users/rohan/Documents/fridge.jpg")',
            options: 
            { filename: '' //give unique file name,
            contentType: null } } } };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    });
    */
}