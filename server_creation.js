const http = require('http');

http.createServer(dataControl
//     (req,resp) => {
//     resp.write("Hello ");
//     resp.end(); 
// }
).listen(4500);

function dataControl(req,resp)
{
    resp.write("Hello kiran sharma");
    resp.end();
}
