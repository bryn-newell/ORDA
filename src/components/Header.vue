<template>
	<header class="header">
		<router-link to="/"><h1>ORDA</h1></router-link>
		<nav>
			<router-link to="/company">Our Company</router-link>
			<router-link to="/services">Our Services</router-link>
			<router-link to="/igps">iGPS</router-link>
			<router-link to="/clients">Our Clients</router-link>
			<router-link to="/publications">Publications</router-link>
			<router-link to="/people">Our People</router-link>
		</nav>
	</header>
</template>

<style lang="scss">
.header {
	align-items: center;
	display: flex;
	a {
		text-decoration: none;
		color: black;
		&:hover {
			text-decoration: underline;
		}
	}
	h1 {
		margin: 0 20px 0 0;
		padding: 0;
	}
	nav {
		display: flex;
		flex-grow: 1;
		justify-content: space-between;
	}
}
</style>
