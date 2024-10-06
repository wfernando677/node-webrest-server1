import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
// import http from 'http';


// const server = http.createServer((req,res) =>{
//   console.log(req.url);
//   res.writeHead(200,{'Content-ype':'text/html'});
//   res.write('<h1> hola mundo((</h1>');
//   res.end();
// })


// server.listen(8080,()=>{
//   console.log('server runing on port 8080');
  
// })
(()=>{
  main();
})();


function main() {
  const server = new Server({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH,
    routes:AppRoutes.routes
  });
  server.star();
}