<template>
	<header class="header">
		<router-link to="/"><h1 class="sr-only">ORDA Home</h1><ORDALogo class="orda-logo" /></router-link>
		<nav>
			<router-link to="/services">Our Services</router-link>
			<router-link to="/igps">iGPS</router-link>
			<router-link to="/clients">Our Clients</router-link>
			<router-link to="/publications">Publications</router-link>
			<router-link to="/people">Our People</router-link>
		</nav>
	</header>
</template>

<script>
import ORDALogo from '../assets/ORDALogo.svg';

export default {
	components: {
		ORDALogo
	}
};
</script>

<style lang="scss">
.header {
	align-items: center;
	background-color: $blue-800;
	display: flex;
	justify-content: space-between;
	padding: 10px 0px 10px 20px;
	a {
		color: $white;
	}
	h1 {
		margin: 0 20px 0 0;
		padding: 0;
	}
	.orda-logo {
		width: 200px;
	}
	nav {
		display: flex;
		justify-content: space-between;
		a {
			margin-right: 20px;
		}
	}
}
</style>
