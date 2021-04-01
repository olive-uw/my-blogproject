import express from "express";
import bodyParse from "body-parser";
import AuthRout from'./Server/Route/AuthRout';
import Route from'./server/Route/BlogRoute';
import dotenv from "dotenv"
dotenv.config({path:"./.env"});
const app = express();

app.use(bodyParse.json());

app.use('/api/v1/blogpost',AuthRout);
app.use('/api/v1/blog/',Route);

//app.use('/ signin', (req, res) => {
    //res.status(200).send({
      //  name:jane,
        //password:123567
        

    //})
//})



app.use('/signin', (req, res) => {
    res.status(200).send({
        statu: 200,
        message: "this is my signin blogpost Api"
        
    })
    })
const port=process.env.PORT;
    app.listen(port,()=>{
        console.log(`server is running in port ${port}`);
})

export default Route;
