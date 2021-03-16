module.exports = {
	path: '/test',
	method: 'get',
	run: async (req , res) => {
    res.sendFile("/app/index1.html");
  }
}