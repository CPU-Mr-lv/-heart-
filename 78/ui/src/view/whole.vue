<template>
	<div style="position: absolute;top: 0rem;width: 100%;margin-bottom: 4.25rem;min-width: 20rem;">

		<div style="width: 100%;min-width: 20rem;height:1.875rem;line-height: 1.875rem;">
			
			
				<div >
						<router-link to="/my"><p align="left" style="width: 30%;padding-left: 5%;">
						<van-icon name="arrow-left" style="position: absolute;right: 11rem;width: 100%;top: 1rem;" />
						<van-icon name="arrow-left" />返回</p>
					</router-link>
				</div>		
				<div style="position: absolute;top: 0rem;left: 40%;">
					<h1>全部订单</h1>
				</div>
		</div>
		<div class="while">
			<van-tabs v-model="active">
				<van-tab title="全部" style="flex-basis: 20%;">
					<div style="width: 100%;height: 2rem;margin-top: 1.25rem;">
						<div style="width: 70%;float: left;border-radius: 1.875rem;text-align: left;">
							<div style="width: 30%;float: left;border-radius: 1.875rem;text-align: left;line-height: 2.5rem;">
								<van-tag mark type="warning">准时达</van-tag>
							</div>
							<div style="width: 40%;float: left;border-radius: 1.875rem;text-align: left;line-height:1rem;">
								<span>
									<p>约12.35送达</p>
								</span>
							</div>

						</div>
						<div style="width: 30%;float: left;">
							<div>
								<p style="color: #ED6A0C;">配送中</p>
							</div>
						</div>
					</div>
					<div>
						<van-card num="2" tag="hot" price="23.00" desc="规格:约800克" title="法国嘎啦苹果*6" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="40.00" />
						<van-card num="2" tag="hot" price="50.00" desc="规格:约500克" title="江西赣南橙子*6" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="70.00" />
						<van-card num="2" tag="hot" price="70.00" desc="规格:约800克" title="湖南麻阳冰糖橙*6" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="110.00" />
						<div>
							<van-submit-bar :price="14300" button-text="提交订单" @submit="onSubmit">
								<van-checkbox v-model="checked">全选</van-checkbox>
								<template #tip>
									你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
								</template>
							</van-submit-bar>
						</div>
					</div>
					<div style="width: 100%;height: 2.625rem;">
						<div style="width: 100%;height: 2.625rem;">
							<div style="float: right; font-size: 0.5rem;height: 2.625rem;line-height: 2.625rem;">
								<div style="float: left; padding-right: 1.25rem;">
									<p>共三件商品</p>
								</div>
								<div style="float: left; padding-right: 0.625rem;">
									<h1 style="font-size: 0.95rem;">合计：￥143.00</h1>
								</div>

							</div>

						</div>
					</div>
					<div style="width: 100%;height: 2rem;margin-top: 1.25rem;">
						<div style="width: 70%;float: left;border-radius: 1.875rem;text-align: left;">
							<div style="width: 30%;float: left;border-radius: 1.875rem;text-align: left;line-height: 2.5rem;">
								<van-tag mark type="warning">次日达</van-tag>
							</div>
							<div style="width: 40%;float: left;border-radius: 1.875rem;text-align: left;line-height:1rem;">
								<span>
									<p>约明日18.10送达</p>
								</span>
							</div>

						</div>
						<div style="width: 30%;float: left;">
							<div>
								<p style="color: #ED6A0C;">自提配送中</p>
							</div>
						</div>
					</div>
					<div>
						<van-card num="2" tag="hot" price="23.00" desc="规格:约800克" title="甘肃黄蕉苹果*6" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="40.00" />
						<div style="width: 100%;height: 2.625rem;">
							<div style="width: 100%;height: 2.625rem;">
								<div style="float: right; font-size: 0.5rem;height: 2.625rem;line-height: 2.625rem;">
									<div style="float: left; padding-right: 1.25rem;color: #A0A0A0;">
										<h1>再来一单</h1>
									</div>
									<div style="float: left;">
										<h1 style="font-size: 0.95rem;color: #A0A0A0;padding-right: 0.625rem;">确认送达</h1>
									</div>

								</div>

							</div>
						</div>
					</div>
					<div>
						<div style="width: 100%;height: 3.125rem;">
							<div style="width: 100%;height: 2rem;margin-top: 1.25rem;">
								<div style="width: 70%;float: left;border-radius: 1.875rem;text-align: left;">
									<div style="width: 30%;float: left;border-radius: 1.875rem;text-align: left;line-height: 2.5rem;">

									</div>
									<div style="width: 40%;float: left;border-radius: 1.875rem;text-align: left;line-height:1rem;">
										<span>
											<p style="padding-left: 1.25rem;color: #A0A0A0;">2020-07-08</p>
										</span>
									</div>

								</div>
								<div style="width: 30%;float: left;">
									<div>
										<p style="color: #ED6A0C;color: #A0A0A0;">订单完成</p>
									</div>
								</div>
							</div>
						</div>
						<van-card num="2" tag="hot" price="23.00" desc="规格:约800克" title="甘肃黄蕉苹果*6" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"  origin-price="40.00" />
						<div style="width: 100%;height: 2.625rem;">
						</div>
					</div>
				</van-tab>
				<van-tab title="待支付" style="flex-basis: 20%;" to="/sho"></van-tab>
				<van-tab title="待配送"></van-tab>
				<van-tab title="配送中" to='distribution'>


				</van-tab>
				<van-tab title="待评价" to="dden"></van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	export default {
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				Toast('按钮');
			},
		},
	};
</script>

<style>

</style>
