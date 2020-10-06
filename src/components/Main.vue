<template>
	<section class="main" :style="`backgroundImage: url(${heroImg})`">
		<div class="headline">
			<img :src="iGPS" alt="iGPS">
			<p>A cutting edge organizational assessment tool at your fingertips.</p>
		</div>
		<div class="cta">
			<p>What can iGPS do for your organization?</p>
			<button>Learn More</button>
		</div>
		<p class="quote"><q>More than anything else we've done, iGPS is responsible for the irrevocable transformation of our organization.</q><br>-- satisfied client</p>
	</section>
</template>

<script>
import heroImg from '../assets/hero.png';
import iGPS from '../assets/iGPS.png';

export default {
	data() {
		return {
			heroImg,
			iGPS
		};
	}
};
</script>

<style lang="scss">
	.main {
		background-size: cover;
		background-position: 0%;
		display: flex;
		flex-direction: column;
		height: 50vh;
		justify-content: space-between;
		.headline {
			text-align: left;
			p {
				margin: 0 0 0 10px;
			}
		}
		.cta {
			p {
				margin-top: 0;
				margin-bottom: 5px;
			}
			button {
				border: none;
				border-radius: 5px;
				padding: 8px 10px;
			}
		}
		.quote {
			max-width: 300px;
			margin-left: auto;
		}
	}
</style>
