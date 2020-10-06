<template>
	<div id="app">
		<Header />
		<Main />
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		Header,
		Main,
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
