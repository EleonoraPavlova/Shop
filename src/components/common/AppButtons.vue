<template>
	<button
		class="btn m-1"
		:class="[`btn-${color}`, `btn-${size}`]"
		@click="$emit('click')"
	>
		<slot />
	</button>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: "primary",
		},
		size: {
			type: String,
			default: "lg",
		},
		type: {
			type: String,
			default: "button",
		},
	},
	emits: ["click"],
};
</script>

<style lang="scss">
</style>
