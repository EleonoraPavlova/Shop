<template>
	<div class="product-card" @click="$router.push(`/products/${product.id}`)">
		<div
			class="product-card__image"
			:style="{
				backgroundImage: `url(${product.image})`,
			}"
		></div>

		<div class="product-card__content">
			<div class="product-card__title">
				{{ product.title }}
			</div>
			<div class="product-card__description" @click="toggleExpanded">
				<span>Description</span>
				<Icon :name="isExpanded ? 'chevron-up' : 'chevron-down'" />
			</div>
			<div v-if="isExpanded" class="product-card__description-content">
				{{ product.description }}
			</div>
		</div>
	</div>
</template>
<script>
import Icon from "@/components/common/MdIcon.vue";
export default {
	components: {
		Icon,
	},
	props: {
		product: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {
			isExpanded: false,
		};
	},
	methods: {
		toggleExpanded(e) {
			e.stopPropagation();
			this.isExpanded = !this.isExpanded;
		},
	},
};
</script>

<style lang="scss" scoped>
.product-card {
	padding: 19px;
	border: 1px solid #fd665e;
	border-radius: 5px;
	&:hover {
		border-color: #585858;
		cursor: pointer;
	}
	&__content {
		padding: 10px;
	}
	&__title {
		padding-bottom: 5%;
		line-height: 23px;
	}
	&__image {
		margin-bottom: 6px;
		width: 100%;
		height: 80px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
	}
	&__description {
		display: flex;
		align-items: center;
		padding: 15px 0;
		cursor: pointer;
		&:hover {
			color: #fd665e;
		}
		&-content {
			line-height: 23px;
		}
	}
}
</style>
