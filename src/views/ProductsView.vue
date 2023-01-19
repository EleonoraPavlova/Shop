<template>
	<div class="products-view">
		<div class="products-view__title">
			<h1 class="products-view__h1">
				<span> Most </span>
				<span class="products-view__h1-color"> Popular </span>
				<span class="products-view__span"> Items</span>
			</h1>
			<div class="products-view__filters">
				<Loading v-if="isLoadingCategories" />
				<template v-else>
					<h4 class="products-view__h4">Categories:</h4>
					<div
						v-for="category in categories"
						:key="category"
						:class="{ active: activeCategory === category }"
						class="category"
						@click="toggleCategory(category)"
					>
						{{ category }}
					</div>
				</template>
			</div>
		</div>
		<ProductsList v-if="!isLoadingProducts" :list="collection" />
		<Loading v-else />
	</div>
</template>

<script>
import { mapState } from "vuex";
import ProductsList from "@/components/products/ProductsList.vue";
import Loading from "@/components/common/LoadingBlock.vue";

export default {
	name: "ProductsView",
	components: {
		ProductsList,
		Loading,
	},
	data() {
		return {
			// selectedCategory: "",
			activeCategory: null,
		};
	},
	async created() {
		await this.fetchData();
		await this.$store.dispatch("categories/getCollection");
	},
	computed: {
		...mapState({
			collection: (s) => s.products.collection,
			isLoadingProducts: (s) => s.products.isRequestPending,
			categories: (s) => s.categories.collection,
			isLoadingCategories: (s) => s.categories.isRequestPending,
		}),
	},
	methods: {
		async fetchData(params) {
			await this.$store.dispatch("products/getCollection", params);
		},
		toggleCategory(category) {
			if (this.activeCategory === category) {
				this.activeCategory = null;
				this.fetchData();
			} else {
				this.activeCategory = category;
				this.fetchData({
					category,
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.products-view {
	// display: grid;
	// grid-template-columns: 185px 1fr;
	// height: 100%;
	max-height: 100%;
	height: 100%;
	&__title {
		display: grid;
		grid-template-columns: 56% 42%;
		grid-gap: 20px;
		justify-items: end;
		align-items: center;
		margin-bottom: 19px;
	}
	&__h4 {
		margin: 10px 0px;
		color: #fd665e;
		font-size: 20px;
	}
	&__h1 {
		font-family: "New York Extra Large Bold";
		line-height: 100px;
		font-size: 70px;
		margin-left: 10%;
		// margin-bottom: 50px;
		&-color {
			color: #fd665e;
		}
	}
	&__filters {
		margin: 0 10px;
	}
	&__span {
		margin-left: 70%;
	}
	.category {
		font-family: "SF UI Display Ultralight";
		font-size: 20px;
		margin: 10px 0;
		cursor: pointer;
		&:hover {
			color: #fd665e;
		}
		&.active {
			font-weight: bold;
		}
	}
}
</style>
