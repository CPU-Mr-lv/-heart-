<template>
	<div style="position: absolute; top: 0;margin-bottom: 3.125rem;">
		<div class="cation">
			<van-search v-model="value" show-action placeholder="搜索商品" @search="onSearch">
				<template #action>
					<div @click="onSearch">
						<van-icon name="filter-o" />
					</div>
				</template>
			</van-search>
			<van-tree-select height="38rem" :items="items" :main-active-index.sync="active">
				<template #content>
					<!-- <div></div> -->
					<van-card price="34.0/份" desc="酸酸甜甜根本停不下来" title="海南陵水圣女果 2斤装" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">
								<van-icon name="add-o" />
							</van-button>
						</template>
					</van-card>
					<van-card price="80.0/份" desc="再吃等一年!蜜一样的甜滋味!" title="智利JJ级蕾尼Rainier黄金车厘子约500g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">
								<van-icon name="add-o" />
							</van-button>
						</template>
					</van-card>
					<van-card price="29.0/份" desc="水分超多,脆嫩清香,浓浓甜可口" title="江西赣南脐橙*3约500g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">
								<van-icon name="add-o" />
							</van-button>
						</template>
					</van-card>
					<van-card price="56.0/份" desc="不亚于水蜜桃的高颜值冬桃" title="澳大利亚油桃*6约800g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">
								<van-icon name="add-o" />
							</van-button>
						</template>
					</van-card>
					<van-card price="12.5/份" desc="好比冰糖的高甜度,细嫩可口!" title="湖南麻阳冰糖橙*6约500g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">
								<van-icon name="add-o" />
							</van-button>
						</template>
					</van-card>
					<van-card price="45.0/份" desc="清脆爽口,真的有奶香味" title="台湾牛奶蜜枣*6约2斤" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">
								<van-icon name="add-o" />
							</van-button>
						</template>
					</van-card>

				</template>
			</van-tree-select>
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
				active1: 1,
				/* active2: 2,
				active3: 3,
				active4: 4,
				active5: 5,
				active6: 6,
				active7: 7,
				active8: 8,
				active9: 9,
				active10: 10, */
				items: [{
					text: '今日优惠'
				}, {
					text: '进口鲜果'
				}, {
					text: '今日鲜果'
				}, {
					text: '车厘子'
				}, {
					text: '柑橘橙柚'
				}, {
					text: '奇异果/猕猴桃'
				}, {
					text: '草莓/蓝莓'
				}, {
					text: '葡萄/提子'
				}, {
					text: '桃杏李'
				}, {
					text: '苹果/梨子'
				}, {
					text: '瓜类'
				}, {
					text: '果干/零食'
				}],
			};
		},
	};
</script>

<style>
	.cation .van-card__title {
		font-size: 0.755416rem;
		max-height: 32px;
		line-height: 16px;
		font-weight: 0.0625rem;
	}

	.van-image__img {
		width: 50%;
		height: 20%;

	}

	.van-card__title {
		font-size: 15px;
		font-weight: bolder;
	}
</style>
