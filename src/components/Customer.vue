<script>
import Store from "../Data/store.js";
export default {
	name: "Customer",
	data() {
		return {
			Store,
		};
	},
	methods: {
		getImgPath(path) {
			let risultato = new URL(`../assets/Img/${path}`, import.meta.url);
			return risultato.href;
		},
	},
};
</script>

<template>
	<div id="customer" class="p-5 text-white text-center">
		<!-- <div class="w-75 mx-auto"> -->
		<i class="fa-regular fa-thumbs-up"></i><br />
		<i class="fa-regular fa-star"></i>
		<i class="fa-regular fa-star"></i>
		<i class="fa-regular fa-star"></i>
		<h3>{{ Store.customer.title }}</h3>
		<p>{{ Store.customer.subtitle }}</p>
		<div class="row flex-nowrap py-3 overflow-x-auto my_bar">
			<div
				v-for="testimonial in Store.customer.testimonial"
				class="col-3"
			>
				<div class="my_card rounded">
					<p>
						{{ testimonial.comment }}
					</p>
					<img :src="getImgPath(testimonial.img)" alt="" />
					<p>{{ testimonial.name }}</p>
				</div>
			</div>
		</div>
		<!-- </div> -->
	</div>
</template>

<style scoped>
#customer {
	background-image: url("../assets/Img/comment-bg-autocar.jpg");
	background-position: center;
	background-size: cover;
}

.my_card {
	background-color: white;
	color: black;
	padding: 2rem 1rem;
}

p {
	font-size: 12px;
}

img {
	width: 50%;
	display: inline-block;
}

.fa-thumbs-up {
	font-size: 2rem;
}

.my_bar::-webkit-scrollbar {
	height: 6px;
	width: 20%;
}
.my_bar::-webkit-scrollbar-thumb:horizontal {
	background: #000;
	border-radius: 10px;
}
.my_bar::-webkit-scrollbar-thumb:vertical {
	background: #000;
	border-radius: 10px;
}
</style>
