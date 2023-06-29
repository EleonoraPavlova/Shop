<template>
  <div class="loading">
    <MdIcon name="loading" :spin="true" size="xxlg" />
  </div>
</template>

<script>
import MdIcon from "./MdIcon.vue";
export default {
  components: {
    MdIcon,
  },
};
</script>


<style>
.loading {
  width: 100%;
  height: 100%;
  color: var(--base-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
