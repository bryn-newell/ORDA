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
@import './styles/styles.scss';
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
		text-align: left;
	}
</style>
