<template>
	<div class="product">
		<template v-if="!isLoadingProduct">
			<div class="product__title">{{ product.title }}</div>
			<div class="product__box">
				<div class="product__wrapImg">
					<img :src="product.image" class="product__img" />
				</div>
				<div>
					<div class="product__item">
						<strong>Price: </strong> {{ product.price }} EUR
					</div>
					<div class="product__item">
						<strong>Description: </strong> {{ product.description }}
					</div>
					<div>
						<strong class="product__item">Rating: </strong>
						{{ product.rating.rate }} ({{ product.rating.count }}
						votes)
					</div>
				</div>
			</div>
			<div class="product__button">
				<AppButtons
					class="
						header__search header__search-sign_up header__search-sign_up-link
					"
					@click="$router.push('/')"
					>Back</AppButtons
				>
			</div>
		</template>
		<Loading v-else />
	</div>
</template>
<script>
import { mapState } from "vuex";
import Loading from "@/components/common/LoadingBlock.vue";
import AppButtons from "../components/common/AppButtons.vue";
export default {
	components: {
		Loading,
		AppButtons,
	},
	computed: {
		...mapState({
			product: (s) => s.product.product,
			isLoadingProduct: (s) => s.product.isRequestPending,
		}),
	},
	async created() {
		try {
			await this.$store.dispatch("product/getProduct", this.$route.params.id);
		} catch (e) {
			this.$router.push("/not-found");
		}
	},
};
</script>
<style lang="scss" scoped>
.product {
	width: 100%;
	height: 100%;
	padding: 0px 25px;
	&__box {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		font-family: "SF UI Display Light";
		font-size: larger;
		line-height: 28px;
	}
	&__item {
		margin: 10px;
	}
	&__wrapImg {
		padding: 30px;
		border: 1px solid #fd665e;
		border-radius: 20px;
		margin-right: 6%;
	}
	&__img {
		width: 350px;
		height: 350px;
	}
	&__title {
		padding: 10px 15px;
		font-family: "SF UI Display Semibold";
		margin-bottom: 20px;
	}
	&__button {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
}
</style>
