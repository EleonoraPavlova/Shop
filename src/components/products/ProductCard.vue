<template>
  <div class="product-card" @click="$router.push(`/products/${product.id}`)">
    <div
      class="product-card-image"
      :style="{
        backgroundImage: `url(${product.image})`,
      }"
    ></div>

    <!-- {{ product }} -->
    <div class="product-card-content">
      <div class="product-card-title">
        {{ product.title }}
      </div>
      <div class="product-card-description" @click="toggleExpanded">
        <span>description</span>
        <Icon :name="isExpanded ? 'chevron-up' : 'chevron-down'" />
      </div>
      <div v-if="isExpanded" class="product-card-description-content">
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
  border: 1px solid black;
  border-radius: 5px;
  .product-card-content {
    padding: 10px;
  }
  .product-card-image {
    width: 100%;
    height: 80px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .product-card-description {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
