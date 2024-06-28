<script>

export default {
	onLaunch: function () {
		console.log('App Launch')
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	data() {
		return {
			currentTabbar: "1",
		}
	},
	methods: {

	},
}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
</style>
