<template>
	<div id="app">
		<Header />
		<main class="main">
			<router-view></router-view>
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss">
	*, *:before, *:after {
		box-sizing: border-box
	}

	body {
		margin: 0;
		color: $black;
	}

	h1, h2, h3, h4 {
		font-weight: normal;
	}

	a {
			color: $black;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main {
		padding: 20px;
		text-align: left;
		flex-grow: 1;
	}
</style>
