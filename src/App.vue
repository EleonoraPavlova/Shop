<template>
	<div class="app">
		<NavigationBar />
		<div class="content">
			<router-view />
		</div>
	</div>
</template>
<script>
import NavigationBar from "@/components/common/NavigationBar.vue";
export default {
	components: { NavigationBar },
};
</script>





<style lang="scss">
.app {
	height: calc(100% - 20px);
	height: calc(100% - 20px);
	padding: 10px;
	display: grid;
	grid-template-rows: 50px 1fr;
	.content {
		overflow-y: scroll;
	}
}
</style>
