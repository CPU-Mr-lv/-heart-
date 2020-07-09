<template>
	<div style="height: 1050px;">


		<div style="position: fixed;top: 0rem;left: 0rem;right: 0rem;">
			<img :src='imgUrl' alt="" style="width: 100%;height: 200px;">
		</div>
		<router-link to="/whole">
			<div>
				<van-icon name="arrow-left" style="position: fixed;right: 11rem;width: 100%;top: 1rem;" />
			</div>
		</router-link>

		<router-link to="/goodsroad">
			<div>
				<van-cell title="订单已完成>" size="large" label="感谢您的支持和信任,期待您的再次光临" style="height: 80px;width: 95%;margin: 0 auto;border-radius: 40px;" />

			</div>
		</router-link>
		<div style="margin-top: 0.625rem;">
			<van-card num="3" price="42.5" desc="规格:800g" title="湖南麻阳冰糖橙*6约500g"  thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
			<van-card num="2" price="45" desc="规格:500g" title="四川安阳黄柠檬*6约2斤" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
			<van-card num="1" price="250" desc="规格:500g" title="湖南麻辣冰淇淋6*500g"  thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
		</div>
		<div>
			<van-cell-group style="text-align: left;">
				<van-cell title="配送费" value="￥999" />
				<van-cell title="优惠" value="￥-40" />
				<van-cell title="" value="总计 ￥1334.50" />

				<van-icon />
			</van-cell-group>
		</div>
		<div>

			<van-cell-group style="text-align: left;">
				<van-cell value="配送信息" style="font-weight: bolder;font-size: 25px;" />
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
	.van-card {
		line-height: 1px;
	}
</style>