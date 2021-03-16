const fs = require('fs')

module.exports = {
	path: '/api/data',
	method: 'get',
	run: async (req , res) => {
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))

res.status(200).json({errors: [], data:{
"use": con['use'] + 1
}})

con['use'] = con['use'] + 1
fs.writeFile("./config.json", JSON.stringify(con, null, 5), function(err) {if(err) console.log(err)});

  }
}