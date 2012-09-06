var BufferedWriter = require("buffered-writer"),
    fs = require("fs"),
    util = require("util");

function acceptData(req, res) {

    //console.log( util.inspect(req, true, 5, true) );

    var data = req.body,
        response;

    if (!data.fileName || !data.bytes || !data.bytePosition || !data.bytesTotal) {
        return;
    }

    fs.open(__dirname + "/upload/" + data.fileName, "a", function (err, fd) {

        if (err) {
            throw err
        }
        ;


        var buffer = new Buffer(data.bytes, "base64"),
            pos = parseInt(data.bytePosition);

        //fs.write(fd, buffer, offset, length, position, [callback])
        fs.write(fd, buffer, 0, buffer.length, pos, function (err, written, buffer) {

            if (err) {
                throw err
            }
            ;

            fs.close(fd, function (err) {

                response = {
                    "fileName":data.fileName,
                    "bytePosition":pos + buffer.length, "status":(pos + buffer.length === parseInt(data.bytesTotal)) ? "complete" : "success"
                };


                res.writeHead(200, {"content-type":"application/json"});
                res.end(JSON.stringify(response));
            });


        });

    });

}

exports.acceptData = acceptData;