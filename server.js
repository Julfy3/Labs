var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',           
  port: 1337,                 
  host: '10.0.0.100',       
  cors: '*',               
  followSymlink: true,      

});
 
