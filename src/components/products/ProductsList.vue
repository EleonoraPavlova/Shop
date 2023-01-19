<template>
	<div class="product-list">
		<ProductCard v-for="product in list" :key="product.id" :product="product" />
	</div>
</template>


<script>
import ProductCard from "./ProductCard.vue";
export default {
	components: {
		ProductCard,
	},
	props: {
		list: {
			type: Array,
			default: () => [],
		},
	},
};
</script>


<style lang="scss" scoped>
.product-list {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 10px;
}
</style>
