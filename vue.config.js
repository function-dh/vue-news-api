module.exports = {
	publicPath: '/vue-news-api',
	outputDir: 'docs',
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