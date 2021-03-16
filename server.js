const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const queryString = require('query-string');
const fs = require('fs')
app.use(bodyParser.json());
app.listen(3000)

        const requests = fs.readdirSync(`./api/`).filter(file => file.endsWith(".js"));


    fs.readdirSync("./api/").forEach(dir => {
        const requests = fs.readdirSync(`./api/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of requests) {
            let request = require(`./api/${dir}/${file}`);
if(request.method && request.path){
app[request.method](request.path , (req , res) =>{
 
return request.run(req, res)
})
}} 

})