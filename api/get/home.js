module.exports = {
	path: '/',
	method: 'get',
	run: async (req , res) => {
    res.sendFile("/app/index.html");
  }
}