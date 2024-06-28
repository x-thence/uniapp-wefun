<template>
	<view>
		<view class="avatarWrap">

			<view v-if="hasLogin" class="wrapper">
				<u-avatar :src='userInfo.avatarUrl' :size="80"></u-avatar>
				<text class="nameText" text="thence">{{ userInfo.nickName }}</text>
			</view>
			<view v-else class="wrapper">
				<u-avatar @click="handleLogin" :size="80"></u-avatar>
				<u--text @click="handleLogin" type="info" align="center" :size="22" text="点击头像登录"></u--text>
			</view>
		</view>
		<u-cell-group>

			<u-cell icon="share" title="邀请好友" @click="share">
				<!-- <view slot="title">
					<u--text text="邀请好友" openType="share" align="left" type="success" @click="clickHandler"></u--text>
				</view> -->
			</u-cell>
			<u-cell icon="chat" title="联系客服" @click="todo"></u-cell>
			<u-cell icon="plus-people-fill" title="注册账号" @click="todo"></u-cell>
			<u-cell icon="setting-fill" title="退出登录" @click="needLoginOut = true"></u-cell>
			<u-cell icon="info-circle" title="版本信息" @click="todo"></u-cell>
		</u-cell-group>
		<u-modal :show="needLoginOut" :showCancelButton="true" title="提示" content='是否确认退出？' @cancel="needLoginOut = false"
			@confirm="loginOut"></u-modal>
	</view>
</template>

<script>
import { mapState, mapGetters } from 'vuex';


export default {
	data() {
		return {
			needLoginOut: false,
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		}),
		...mapGetters(['hasLogin'])
	},
	methods: {
		handleLogin() {
			const that = this;
			uni.login({
				provider: 'weixin', //使用微信登录
				success: function (loginRes) {
					uni.getUserInfo({
						provider: 'weixin',
						withCredentials: true,
					}).then(res => {
						console.log(res);
						that.$store.commit('setUserInfo', res.userInfo)
					});
				}
			});

		},
		loginOut() {
			this.$store.commit('clearUserInfo');
			this.needLoginOut = false;
		},
		share() {
			//#ifdef MP-WEIXIN
			uni.share({
				provider: "weixin",
				scene: "WXSceneSession",
				type: 1,
				summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				success: function (res) {
					console.log("success:" + JSON.stringify(res));
				},
				fail: function (err) {
					console.log("fail:" + JSON.stringify(err));
				}
			});
			//#endif
		},
		todo() {
			uni.showToast({
				icon: 'none',
				title: '此功能暂未实现，敬请期待……',
				duration: 2000
			});
		}
	},
	mounted() {
	}
}
</script>

<style lang="scss" scoped>
.avatarWrap {
	width: 100%;
	height: 30vh;
	padding-top: 40rpx;
	background-color: rgb(66, 202, 182);

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;

	}

}

.loginBtn {
	width: 100px !important;
}
</style>
