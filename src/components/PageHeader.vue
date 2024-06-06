<script>
import AutocarNavbar from "./AutocarNavbar.vue";
import store from "../Data/store.js";

export default {
	components: {
		AutocarNavbar,
	},

	data() {
		return {
			store,
		};
	},
	methods: {},
	created() {},
	mounted() {},
	computed: {},
};
</script>

<template>
	<AutocarNavbar />
</template>

<style scoped></style>
