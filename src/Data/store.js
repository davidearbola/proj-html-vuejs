import { reactive } from "vue";

const iMieiDati = reactive({
	customer: {
		title: "What Are Our Customer Saying ?",
		subtitle: "Opinion from our Happy Customers.",
		testimonial: [
			{
				name: "Adam",
				comment:
					"We are a gallery vehicle dealer. Before we met this site, our sales were sluggish.",
				img: "man1.png",
			},
			{
				name: "Christian",
				comment:
					"One of the quality websites apply to rent a car. There are hundreds of different tools.",
				img: "testimonial2-1.png",
			},
			{
				name: "Robert",
				comment:
					"I was trying to sell my car. And I put it here and sold it for more than it was worth.",
				img: "man2.png",
			},
			{
				name: "Elizabeth",
				comment:
					"A fast and reliable vehicle selling site. Rare quality website with hundreds of model vehicles.",
				img: "testimonial4-1.png",
			},
			{
				name: "Adam",
				comment:
					"We are a gallery vehicle dealer. Before we met this site, our sales were sluggish.",
				img: "man1.png",
			},
		],
	},
	recent: {
		title: "Resent Articles",
		subtitle: "Useful information about car.",
		articleCar: [
			{
				release: "06/07/2022 - Autocar",
				title: "Why is BMW loved?",
				article_text:
					"BMWs have a different line with their designs and almost [...]",
				img: {
					small: "news-autocar-1-300x180.jpg",
					medium: "news-autocar-1-373x223.jpg",
					large: "news-autocar-1-600x359.jpg",
				},
			},
			{
				release: "06/07/2022 - Autocar",
				title: "How solid is Audi?",
				article_text:
					"According to Euro NCAP data with different test organizations, there [...]",
				img: {
					small: "news-autocar-2-300x180.jpg",
					medium: "news-autocar-2-373x223.jpg",
					large: "news-autocar-2-600x359.jpg",
				},
			},
			{
				release: "06/07/2022 - Autocar",
				title: "What brand is Skoda?",
				article_text:
					"Skoda is one of the leading automotive manufacturers on the [...]",
				img: {
					small: "news-autocar-5-300x180.jpg",
					medium: "news-autocar-5-373x223.jpg",
					large: "news-autocar-5-600x359.jpg",
				},
			},
			{
				release: "06/07/2022 - Autocar",
				title: "Is the Auris Diesel?",
				article_text:
					"You will have a quieter vehicle that burns less than [...]",
				img: {
					small: "news-autocar-6-300x180.jpg",
					medium: "news-autocar-6-373x223.jpg",
					large: "news-autocar-6-600x359.jpg",
				},
			},
		],
	},
});

export default iMieiDati;
