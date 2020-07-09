<template>
	<div>
		<div style="position: absolute;top:0rem;width: 100%;min-width: 20rem;">
			<van-search v-model="value" show-action placeholder="车厘子" @search="onSearch" left-icon="location">
				<van-button type="default">默认按钮</van-button>
				<template #action>
					<div @click="onSearch">
						<van-icon name="enlarge" />
					</div>
				</template>
			</van-search>
		</div>

		<div style="width: 90%; margin:  auto;min-width: 20rem;" class="ve">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>
					<van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				</van-swipe-item>
				<van-swipe-item>
					<van-image width="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				</van-swipe-item>
				<van-swipe-item>
					<van-image width="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				</van-swipe-item>
			</van-swipe>
		</div>

		<div style="position: absolute;top: 20rem;left: 5%; width: 90%; margin: auto;text-align: center;min-width: 20rem;" class="div_i">
			<div style="width: 45%; border: 1px solid #E1685D;height: 6.25rem;float: left;border-radius: 0.875rem; background: #E1685D;">
				<h2 align="center">专题预售</h2>
				<p align="center">带来偏远地区的原生鲜果<br>送去一份份温暖</p>
			</div>
			<div style="width: 24%; height: 6.25rem;float: left;margin-left: 2%;border-radius: 0.875rem;background: #FF994F;">
				<h2 align="center">邀请好友</h2>
				<p align="center">30元红包<br>等你拿</p>
			</div>
			<div style="width: 25%; height: 6.25rem;float: left;margin-left: 2%;border-radius: 0.875rem; background: #FEC750;">
				<h2 align="center">扶贫助困</h2>
				<p align="center">带来自热鲜果<br>送去温暖爱心</p>
			</div>
		</div>

		<div style="width: 90%;height: 1.875rem; margin: auto;position: absolute;top: 27.5rem;left: 5%;min-width: 20rem;">
			<div style="width: 30%;height: 1.875rem;float: left;">
				<h1 style="color: red;">鲜果快报</h1>
			</div>
			<div style="width: 70%;height: 1.875rem;float: right;border: 0.0625rem solid #E46A61;border-radius: 1.375rem; line-height: 1.875rem;margin-top: -0.8625rem;">
				<marquee>今年的砂糖橘，为何如此清甜！</marquee>
			</div>
		</div>

		<div class="my" style="min-width: 20rem;width: 90%;height: 1.875rem; margin: auto;position: absolute;top: 31.5rem;left: 5%;text-align: left;">
			<div style="width: 100%;height: 3.125rem;">
				<div style="width: 30%; height: 3.125rem; line-height: 3.125rem;text-align: left;float: left;">
					<h2>拼团预售</h2>
				</div>
				<div style="width: 70%; height: 3.125rem; line-height: 3.125rem;text-align: right;float: left;">
					<p>产地直采·品质保证</p>
				</div>
			</div>
			<van-card  desc="30/元一份" title="甘肃静宁苹果*6约两斤" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
				<template #tags>
					<div>
						<div style="border: 0.1625rem solid red;width: 70%;border-radius: 1.875rem;float: left;"></div>
						<div style="width: 25%;float: right; color: #9F9F9F;">92%</div>
					</div>
					<div style="width: 100%;  margin-top: 1.25rem;">
						<div style="width: 50%;height: 1.875rem;float: left;line-height: 1.875rem;color: #9F9F9F;text-align: left;">
							<van-icon name="smile-o" />已售2600份		
						</div>
						<div style="width: 50%;height: 1.875rem;float: left;line-height: 1.875rem;color: #9F9F9F;text-align: left;">
							<van-icon name="underway-o" />6天内发货
						</div>
						
					</div>
				</template>
			</van-card>
		</div>
		
		<div class="my" style="min-width: 20rem;width: 90%;height: 1.875rem; margin: auto;position: absolute;top: 41.5rem;left: 5%;text-align: left;">
			<div style="width: 100%;height: 3.125rem;">
				<div style="width: 30%; height: 3.125rem; line-height: 3.125rem;text-align: left;float: left;">
					<h2>热卖优惠</h2>
				</div>
				<div style="width: 70%; height: 3.125rem; line-height: 3.125rem;text-align: right;float: left;">
					<p>人气热销·大众喜欢</p>
				</div>
			</div>
		</div>
		
		<div style="width: 90%; margin: auto; min-width: 20rem; text-align: center; position: absolute;top: 45.1875rem;height: 18.75rem;padding-left: 5%;">
			<div style="width: 33%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
			<div style="width: 33%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
			<div style="width: 33%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
		</div>
		<div style="width: 90%; margin: auto; min-width: 20rem; text-align: center; position: absolute;top: 55.1875rem;height: 18.75rem;padding-left: 5%;">
			<div style="width: 33%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
			<div style="width: 33%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
			<div style="width: 33%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
		</div>
		
		<div class="my" style="min-width: 20rem;width: 90%;height: 1.875rem; margin: auto;position: absolute;top: 63.5rem;left: 5%;text-align: left;">
			<div style="width: 100%;height: 3.125rem;">
				<div style="width: 30%; height: 3.125rem; line-height: 3.125rem;text-align: left;float: left;">
					<h2>时令新上</h2>
				</div>
				<div style="width: 70%; height: 3.125rem; line-height: 3.125rem;text-align: right;float: left;">
					<p>应季鲜果·优质果园</p>
				</div>
			</div>
		</div>
		
		<div style="margin-top: 1rem;min-width: 20rem;width: 90%;height: 1.875rem; margin: auto;position: absolute;top: 66.5rem;left: 5%;text-align: left;">
			<van-card num="2" price="26.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
				<template #footer>
					+
				</template>
			</van-card>
			<van-card num="2" price="26.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
				+
			</van-card>
		</div>
		
		
		<div  style="width: 90%; margin: auto; min-width: 20rem; text-align: center; position: absolute;top: 81.1875rem;height: 18.75rem;padding-left: 5%;">
			<div style="width: 50%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
			<div style="width: 50%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
		</div>
		<div style="margin-bottom: 1.25rem; width: 90%; margin: auto; min-width: 20rem; text-align: center; position: absolute;top: 91.1875rem;height: 13.75rem;padding-left: 5%;">
			<div style="width: 50%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
			<div style="width: 50%;height: 9.375rem;float: left;text-align: center;">
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<p>广东凉茶<br>￥26元/一份</p>
			</div>
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
				msg: "我是home页面"
			}
		}
	}
	
	
</script>

<style>
	.my .van-card__desc{
		color:  #EE0A24;
	}
	.div_i {
		margin: auto;
	}

	.ve {
		width: 90%;
		height: 9.375rem;
	}

	.ve .my-swipe .van-swipe-item {
		background: aliceblue;
	}

	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
</style>
