import express from 'express';
const app = express();


app.get('/', (req, res) => {
    res.send("Success");
})

const port  = 3000;
app.listen(port,() =>{
    console.log( `\nServer running on ---> http://localhost:${port}\n`)
});