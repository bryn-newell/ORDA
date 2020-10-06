<template>
	<header class="header">
		<h1>ORDA</h1>
		<nav>
			<ul>
				<li>Our Company</li>
				<li>Our Services</li>
				<li>iGPS</li>
				<li>Our Clients</li>
				<li>Publications</li>
				<li>Our People</li>
				<li>Contact Us</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.header {
	align-items: center;
	display: flex;
	h1 {
		margin: 0 20px 0 0;
		padding: 0;
	}
	nav {
		flex-grow: 1;
		ul {
			display: flex;
			justify-content: space-between;
			list-style: none;
			margin: 0;
			padding: 0;
		}
	}
}
</style>
