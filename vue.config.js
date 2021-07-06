module.exports = {
	publicPath: '/vue-news-api',
	outputDir: 'docs',
	lintOnSave: false,
	css : {
		loaderOptions : {
			sass : {
        additionalData: `
          @import "@/assets/scss/abstracts/abstracts.scss";
        `
			}
		}
	}
}