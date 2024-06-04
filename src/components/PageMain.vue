<script>
import Carosello from "./Carosello.vue";
import SearchCar from "./SearchCar.vue";
import CardAuto from "./CardAuto.vue";
import InfoCar from "./InfoCar.vue";
import Customer from "./Customer.vue";
import Recent from "./Recent.vue";

export default {
	name: "PageMain",
	components: {
		Carosello,
		SearchCar,
		CardAuto,
		InfoCar,
		Customer,
		Recent,
	},
};
</script>

<template>
	<Carosello />
	<SearchCar />
	<CardAuto />
	<InfoCar />
	<Customer />
	<Recent />
</template>

<style scoped></style>
