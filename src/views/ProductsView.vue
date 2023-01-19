<template>
  <div class="products-view">
    <div>
      <Loading v-if="isLoadingCategories" />
      <template v-else>
        <div
          v-for="category in categories"
          :key="category"
          :class="{active: activeCategory === category}"
          class="category"
          @click="toggleCategory(category)"
        >
          {{ category }}
        </div>
      </template>
    </div>
    <ProductsList v-if="!isLoadingProducts" :list="collection" />
    <Loading v-else />
  </div>
</template>

<script>
import {mapState} from "vuex";
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
      activeCategory: null,
    };
  },
  async created() {
    await this.fetchData();
    await this.$store.dispatch("categories/getCollection");
  },
  computed: {
    ...mapState({
      collection: s => s.products.collection,
      isLoadingProducts: s => s.products.isRequestPending,
      categories: s => s.categories.collection,
      isLoadingCategories: s => s.categories.isRequestPending,
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
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100%;
  max-height: 100%;
  height: 100%;
  .category {
    &.active {
      font-weight: bold;
    }
  }
}
</style>
