<template>
	<div id="app">
		<Header />
		<router-view></router-view>
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

<style>
	*, *:before, *:after {
		box-sizing: border-box
	}

	body {
		margin: 0;
	}

	h1, h2, h3, h4 {
		font-weight: normal;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
</style>
