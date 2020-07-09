<template>
	<div style="height: 850px;">

		<div style="position: fixed;top: 0rem;">

			<img :src='imgUrl' alt="" style="width: 100%;height: 200px;">

		</div>

		<div>
			<router-link to="/whole">
				<van-icon name="arrow-left" style="position: fixed;right: 10rem;width: 100%;top: 1rem;" />
			</router-link>
		</div>

		<div>
			<van-cell title="订单已在路上>" size="large" label="订单配送中,感谢您的耐心等待" style="height: 100px;width: 95%;margin: 0 auto;border-radius: 50px;" />
		</div>

		<div class="di" style="margin-top: 0.625rem;">
			<van-cell title="大马哥" label="快马加鞭的配送小哥" icon="manager" style="width: 100%;height: 80px;text-align: left;">
				<template #right-icon>
					<van-icon name="phone" style="line-height: inherit;" />联系
				</template>
			</van-cell>
		</div>
		<div>
			<van-card num="3" price="33.00" desc="规格:800g" title="湖南麻阳冰糖橙*6约500g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
			<van-card num="2" price="23.00" desc="规格:500g" title="四川安阳黄柠檬*6约2斤" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
			<van-card num="1" price="22.00" desc="规格:500g" title="湖南麻辣冰淇淋6*500g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
		</div>
		<div>
			<van-cell-group style="text-align: left;">
				<van-cell title="配送费" value="$999" />
				<van-cell title="优惠" value="$-40" />
				<van-cell title="" value="共计￥1077.60" />
				<van-icon />
			</van-cell-group>
		</div>
		<div>

			<van-cell-group style="text-align: left;">
				<van-cell value="配送信息" />
				<van-cell title="送达时间" value="准时达12:18" des="" />
				<van-cell title="收货地址" value="海淀区中关村SOHO大夏16层1688室小李子(先生)1522****662" des="" />
				<van-cell title="配送方式" value="准时达" des="" />
			</van-cell-group>
		</div>
		<div style="text-align: left;">
			<van-cell value="订单信息" style="font-weight: bolder;font-size: 25px;" />
			<van-cell title="订单号" value="660201810263009168" des="" />
			<van-cell title="下单时间" value="2018-01-26 10:21" des="" />
			<van-cell title="支付方式" value="快捷支付" des="" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'orange',
		date() {
			return {

				imgUrl: '',
			}
		},
		created() {
			let urlTemp = "assets/)~3UEAN(`A]KYDY966K8D0V.png";
			this.imgUrl = require("@/" + urlTemp);
		}
	}
</script>

<style>
	.di .van-icon::before {
		color: red;
		font-size: 2rem;
		font-size: 1rem;
	}
</style>
