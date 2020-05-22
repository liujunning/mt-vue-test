// 公用混合文件

/**
 * 响应式高度
 * */
const innerHeight = {
	data() {
		return {
			innerHeight: 0, // 窗口高度
		}
	},
	mounted() {
		this.innerHeight = window.innerHeight;
		window.addEventListener('resize', this.handleResize);
	},
	beforeDestory() {
		window.removeEventListener('resize', this.handleResize)
	},
	methods: {
		/**
		 * 更改浏览器窗口高度
		 * */
		handleResize() {
			this.innerHeight = window.innerHeight;
		}
	}
}


export {
	innerHeight
}