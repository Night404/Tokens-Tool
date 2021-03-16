
module.exports = {
	path: '/css/style.css',
	method: 'get',
	run: async (req , res) => {
    res.sendFile("/app/css/style.css");
  }
}