const fs = require('fs')
const {verify} = require('hcaptcha');
 

const fetch = require('node-fetch')
module.exports = {
	path: '/api/join',
	method: 'post',
	run: async (req , res ) => {
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))

let { body, headers } = req
if(!body.link) return res.status(403).json({errors: ['body'], message: 'Request Body'})
if(!body.link) return res.status(403).json({errors: ['body'], message: 'Request Body'})
if(!body.captcha) return res.status(403).json({errors: ['body'], message: 'Request captcha'})
if(!body.tokens) return res.status(403).json({errors: ['body'], message: 'Request Body'})
const secret = '0x51D3Fc7f7458c0Db815C6703F3f4570605f50686';
const token = body.captcha;
 
verify(secret, token)
  .then((datas) =>{
if(datas.success === false) return res.status(403).json({errors: ['captcha'], message: 'captcha wrong'})

for(const data of body.tokens){
fetch('https://discord.com/api/invites/' + body.link, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' , authorization: data.token },
    })
    .then(res => res.json())
    .then(json => {
})
}
res.status(200).json({errors: [], message: 'Done', data: datas})
con['use'] = con['use'] + 1
fs.writeFile("./config.json", JSON.stringify(con, null, 5), function(err) {if(err) console.log(err)});
})
  .catch(err =>{
return res.status(403).json({errors: ['captcha'], message: 'captcha wrong'})
});




  }
}