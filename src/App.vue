<template>
	<div class="app">
		<NavigationBar />
		<div class="content">
			<h1 class="content__h1">
				Most <span class="content__h1-color">Popular</span>
				Items
			</h1>
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
	font-family: "SF UI Display Thin";
	height: calc(100% - 20px);
	height: calc(100% - 20px);
	padding: 13px 30px;

	display: grid;
	.content {
		// overflow-y: scroll;
		margin: 10px 30px;
		&__h1 {
			font-family: "New York Extra Large Bold";
			line-height: 120px;
			font-size: 70px;
			margin-left: 40%;
			margin-bottom: 50px;
			&-color {
				color: #fd665e;
			}
		}
	}
}
</style>
