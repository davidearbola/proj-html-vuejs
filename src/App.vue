<script>
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
	components: {
		PageHeader,
		PageMain,
		PageFooter,
	},
	methods: {},
	mounted() {
		let outline = document.querySelector(".outline");
		let cursor = document.querySelector(".cursor");
		document.addEventListener("mousemove", function (e) {
			let x = e.clientX;
			let y = e.clientY;

			outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
			cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
		});
		document.addEventListener("mouseleave", function () {
			outline.style.display = "none";
			cursor.style.display = "none";
		});

		document.addEventListener("mouseenter", function () {
			outline.style.display = "block";
			cursor.style.display = "block";
		});
	},
};
</script>

<template>
	<div class="cursor"></div>
	<div class="outline"></div>
	<PageMain />
</template>

<style scoped>
.outline {
	width: 64px;
	height: 64px;
	border-radius: 100%;
	border: 1px solid grey;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	pointer-events: none;
	transform: translate(-64px, -64px);
}

.cursor {
	width: 8px;
	height: 8px;
	border-radius: 100%;
	background-color: grey;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	pointer-events: none;
	transform: translate(-8px, -8px);
}
</style>
