import express from 'express';
import path from 'path';
import open from 'open';
const app = express();
import webpack from 'webpack';
import config from '../webpack.config.dev';
const port = process.argv.slice(2)[0] || 3030 ;

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
  if(err){
    console.log("Error: ",err);
    return;
  }
  open('http://localhost:'+port);
});
