<template>
	<header class="header">
		<router-link to="/"><h1 class="sr-only">ORDA Home</h1><ORDALogo class="orda-logo" role="presentation" /></router-link>
		<nav>
			<router-link to="/services">Our Services</router-link>
			<router-link to="/igps">iGPS</router-link>
			<router-link to="/clients">Clients & Publications</router-link>
			<router-link to="/people">Our People</router-link>
		</nav>
		<div role="presentation" class="decorative-div"></div>
	</header>
</template>

<script>
import ORDALogo from '../assets/ORDALogoWhite.svg';

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
	min-height: 140px;
	padding: 10px 0px 10px 20px;
	position: relative;
	.orda-logo {
		width: 180px;
	}
	nav {
		display: flex;
		justify-content: space-between;
		a {
			color: $white;
			font-size: $font-size-18;
			font-weight: 500;
			margin-right: 20px;
		}
	}
}
</style>
