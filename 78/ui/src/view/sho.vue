<template>
	<div>
		<div style="width:100%;height: 10.25rem; position: absolute; top: 0rem;">
			<div>
				<img src="../assets/a7312cc24ad3b80f77a0156132765204.jpeg" style="width: 100%;height: 42.75rem;" />
			</div>
			<div>
				<router-link to="/whole">
					<van-icon name="arrow-left" style="position: absolute;left: 0rem;width: 100%; top: 1rem;text-align: left;font-size: 2.5rem;" />
				</router-link>
			</div>
		</div>
		<div style="width: 100%; position: absolute;bottom: 1.125rem;border: #F7F8FA;height:9.375rem;text-align: left;">
			<van-cell-group>
				<h1><van-cell title="广东四会砂糖橘约两斤装" label="比水果店性价比更高!味甜,易拨还新鲜!"/></h1>
				<van-cell title="￥26元/份" value="已售16万份	"  />
			</van-cell-group>
			<van-cell-group style="text-align: left;">
				<van-cell title="收货地址" value="海淀区中关村SOHO大夏16层1688室小李子(先生)1522****662" des="" />
				<van-cell title="配送方式" value="准时达" des="" />
			</van-cell-group>
		</div>
		<div>
			<van-goods-action>
				<van-goods-action-icon icon=" chat-o" text="客服" dot />
				<van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
				<van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
				<van-goods-action-button type="warning" text="加入购物车" />
				<van-goods-action-button type="danger" text="立即购买" />
			</van-goods-action>
		</div>

	</div>
</template>

<script>
</script>

<style>

</style>
