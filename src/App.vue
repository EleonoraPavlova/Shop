<template>
	<div class="app">
		<NavigationBar />
		<div class="content">
			<router-view />
		</div>
		<AppFooter />
	</div>
</template>
<script>
import NavigationBar from "@/components/common/NavigationBar.vue";
import AppFooter from "@/components/common/AppFooter.vue";
export default {
	components: { NavigationBar, AppFooter },
};
</script>


<style lang="scss">
.app {
	font-family: "SF UI Display Thin";
	padding: 13px 30px;
	display: grid;
	margin: 10px;
	.content {
		// overflow-y: scroll;
		margin: 10px 30px 50px 10px;
	}
}
</style>
