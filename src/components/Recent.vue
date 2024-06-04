<script>
import Store from "../Data/store.js";
export default {
	name: "Recent",
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
		removeTransform() {
			const cards = document.querySelectorAll(".my_animation");
			cards.forEach((card) => {
				card.style.transform = "rotateY(0deg) rotateX(0deg)";
			});
		},
	},
	mounted() {
		const cards = document.querySelectorAll(".my_animation");

		cards.forEach((card) => {
			card.addEventListener("mousemove", (e) => {
				let cardInnerHeight = card.clientHeight;
				let cardInnerWidth = card.clientWidth;

				let rect = card.getBoundingClientRect();
				let cardXposition = e.clientX - rect.left;
				let cardYposition = e.clientY - rect.top;

				let x = (cardInnerHeight / 2.5 - cardXposition) / 15;
				let y = (cardInnerWidth / 1.25 - cardYposition) / 15;

				card.style.transform =
					"rotateY(" + x + "deg) rotateX(" + y + "deg)";
			});
		});
	},
};
</script>

<template>
	<div id="recent" class="py-5 px-3 text-center">
		<!-- <div class="w-75 mx-auto"> -->
		<span class="icon_circle_recent">
			<i class="fa-regular fa-thumbs-up"></i><br />
		</span>
		<h3>{{ Store.recent.title }}</h3>
		<p>{{ Store.recent.subtitle }}</p>
		<div class="row flex-nowrap">
			<div
				v-for="article in Store.recent.articleCar"
				@mouseleave="removeTransform()"
				class="col-3 align-self-stretch my_animation"
			>
				<div class="my_card p-3 rounded h-100 p-">
					<img :src="getImgPath(article.img.medium)" alt="" />
					<p>
						{{ article.release }}
					</p>
					<h5>{{ article.title }}</h5>
					<p>{{ article.article_text }}</p>
					<button class="my_btn">MORE</button>
				</div>
			</div>
		</div>
		<!-- </div> -->
	</div>
</template>

<style scoped>
.icon_circle_recent {
	display: inline-block;
	height: 5rem;
	width: 5rem;
	padding: 1rem;
	background-color: black;
	color: white;
	border-radius: 50%;
}

i {
	font-size: 3rem;
}

p {
	font-size: 12px;
}

.my_card {
	background-color: white;
	color: black;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {
	width: 100%;
	display: inline-block;
}

.my_btn {
	background-color: black;
	padding: 1.5rem 3rem;
	color: white;
	border-style: none;
}
</style>
