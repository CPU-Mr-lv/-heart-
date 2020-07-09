<template>
	<div>
		<div style="width: 100%;height: 9.375rem; background: #000000;position: absolute;top: 0rem;min-width: 20rem;">
			<div class="my" style="position: absolute;top: 1.625rem;right: 1.625rem;">
				<van-icon name="comment-o" />
			</div>
		</div>
		<div class="li" style="position: fixed;bottom: 31rem;width: 100%;background: #FAFAFA;width: 90%;min-width: 20rem; margin:  auto;margin-left: 5%;">
			<van-row gutter="20">
				<van-col span="8">
					<van-image width="5rem" height="5rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				</van-col>
				<van-col span="8">鲜果小王子</van-col>
				<van-col span="8">
					<van-icon name="enlarge" size="40" />
				</van-col>
			</van-row>

		</div>

		<div class="my" style="position: fixed;bottom: 31rem;width: 100%; min-width: 20rem;">
			<van-row>
				<van-col span="8">200</van-col>
				<van-col span="8">8</van-col>
				<van-col span="8">1600</van-col>
			</van-row>
			<van-row>
				<van-col span="8">账户余额</van-col>
				<van-col span="8">优惠券</van-col>
				<van-col span="8">积分</van-col>
			</van-row>
		</div>

		<div class="big" style="position: fixed;bottom: 21rem;min-width: 20rem;">
			<van-tabbar v-model="active">
				<van-tabbar-item badge="3">
					<span>自定义</span>
					<template #icon="props">
						<img :src="props.active ? icon.active : icon.inactive" />
					</template>
				</van-tabbar-item>
				<van-tabbar-item icon="pending-payment"  to="/sho">待支付</van-tabbar-item>
				<van-tabbar-item icon="comment-o" to="/sho">待配送</van-tabbar-item>
				<van-tabbar-item icon="logistics" to='distribution'>配送中</van-tabbar-item>
				<van-tabbar-item icon="chat-o" to='/dden'>待评价</van-tabbar-item>
				<van-tabbar-item icon="orders-o" to='/whole'>全部订单</van-tabbar-item>
			</van-tabbar>

		</div>

		<div class="my3" style="position: fixed;bottom: 15rem;">
			<van-cell title="我的收藏" icon="like" />
			<van-cell title="优惠福利" icon="gift" />
			<van-cell title="会员中心" icon="gem" />
		</div>

		<div class="my2" style="position: fixed;bottom: 3rem;text-align: left;">
			<van-cell title="地址管理" icon="map-marked" />
			<van-cell title="门店/自取点" icon="shop" />
			<van-cell title="客服帮助" icon="service" />
			<van-cell title="设置" icon="setting" />
		</div>

		<div>
			<van-tabbar v-model="active">
				<van-tabbar-item badge="3">
					<span>自定义</span>
					<template #icon="props">
						<img :src="props.active ? icon.active : icon.inactive" />
					</template>
				</van-tabbar-item>
				<van-tabbar-item icon="wap-home" to='/home'>首页</van-tabbar-item>
				<van-tabbar-item icon="wap-nav" to='/cation'>分类</van-tabbar-item>
				<van-tabbar-item icon="shopping-cart" to='shopping'>购物车</van-tabbar-item>
				<van-tabbar-item icon="manager" to='/my'>我的</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,

			}
		}
	}
</script>

<style>
	.my .van-icon {
		color: #F2F3F5;
	}

	.li .van-icon {
		padding-top: 20px;
	}

	.li .van-col {
		line-height: 84px;
	}

	.my .van-col {
		color: #9E9E9E;
		padding-left: 1.5rem;
		text-align: center;
	}

	.big .van-tabbar--fixed {
		position: fixed;
		bottom: 26rem;
	}

	.big .van-tabbar-item {
		color: #FA4839;
	}



	.my3 .van-cell {
		color: #FD4C3F;
	}

	.my2 .van-cell {
		color: #0570DB;
	}
</style>
