import express from 'express';
import path from 'path';
interface Options {
  port: number;
  publicPath:string;
}

export class Server {

  private app =  express();

  private readonly port:number;
  private readonly publicPath: string;

  constructor(options:Options){
    const {port,publicPath='public'} = options;
    this.port=port;
    this.publicPath=publicPath;
  }


  async star(){

    //* Middlewares

    //* Public Folder
    this.app.use(express.static(this.publicPath));

    this.app.get('*',(req,res)=>{
      const indexPaht = path.join(__dirname + `../../../${this.publicPath}/index.html`);
      res.sendFile(indexPaht);
    })

    this.app.listen(this.port, ()=>{
      console.log(`Server running on port ${this.port}`);
      
    })
  }
}