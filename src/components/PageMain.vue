<script>
import Customer from "./Customer.vue";
import Recent from "./Recent.vue";

export default {
	name: "PageMain",
	components: {
		Customer,
		Recent,
	},
};
</script>

<template>
	<Customer />
	<Recent />
</template>

<style scoped></style>
