/*
 * File: vue.config.js
 * Project: rh-vue-ui
 * Author: ruihuag
 * File Created: Saturday, 31st July 2021 9:52:38 pm
 * Modified By: ruihuag
 * Last Modified: Saturday, 31st July 2021 9:53:24 pm
 */
const path = require('path')
module.exports = {
	pages: {
		index: {
			// 修改项目的入口文件
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	// 扩展 webpack 配置，使 packages 加入编译
	chainWebpack: config => {
		config.module
			.rule('js')
			.include.add(path.resolve(__dirname, 'packages')).end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				// 修改它的选项...
				return options
			})
	}
}
