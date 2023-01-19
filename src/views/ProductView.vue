<template>
  <div class="product">
    <template v-if="!isLoadingProduct">
      <div>title: {{ product.title }}</div>
      <div>price {{ product.price }} UAH</div>
      <div>description: {{ product.description }}</div>
      <img :src="product.image" />
      <div>
        rating: {{ product.rating.rate }}({{ product.rating.count }} votes)
      </div>
    </template>
    <Loading v-else />
  </div>
</template>
<script>
import {mapState} from "vuex";
import Loading from "@/components/common/LoadingBlock.vue";
export default {
  components: {
    Loading,
  },
  computed: {
    ...mapState({
      product: s => s.product.product,
      isLoadingProduct: s => s.product.isRequestPending,
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
}
</style>
