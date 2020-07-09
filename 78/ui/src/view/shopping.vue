<template>
	<div>
		<div style="position: fixed;top: 0;width: 100%;line-height: 84px;">
			<van-row gutter="20">
				<van-col span="8"></van-col>
				<van-col span="8">
					<h1>购物车</h1>
				</van-col>
				<van-col span="8">
					<p>编辑</p>
				</van-col>
			</van-row>
		</div>

		<div style="margin-top: 7rem;">
			<van-row>
				<van-col span="8">满减</van-col>
				<van-col span="8">满69元，减10元</van-col>
				<van-col span="8">查看活动></van-col>
			</van-row>
		</div>

		<div style="margin-top: 1rem;">
			<van-card  price="26.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
				<template #footer>
					<van-button size="mini">+</van-button>
					<van-button size="mini">-</van-button>
				</template>
			</van-card>
			<van-card   price="26.00" desc="描述信息" title="商品标题"  thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
				<template #footer>
					<van-button size="mini">+</van-button>
					<van-button size="mini">-</van-button>
				</template>
			</van-card>
			<van-card  price="26.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
				<template #footer>
					<van-button size="mini">+</van-button>
					<van-button size="mini">-</van-button>
				</template>
			</van-card>
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
	#app {
		font-size: 12px;
	}
</style>
