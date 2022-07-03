import 'dotenv/config'; // necessary for env value be read...
import http, { Server } from 'http';




const port = 3000 || process.env.PORT;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write('Hello World!'); //write a response to the client
    // res.write('<h1>Hello, world!</h1>'); 
    res.end(); //end the response
});



server.listen(port, () => {
    console.log(`server running at port ${port}`);
})









