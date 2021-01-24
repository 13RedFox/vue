// vue.config.js
module.exports = {
	//	options...
	publicPath: process.env.NODE_ENV === 'production'
		? '/notes/'
		: '/',
	assetsDir: '',
	productionSourceMap: false,
	filenameHashing: true

}