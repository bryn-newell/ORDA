<template>
	<section>
		<section class="home" :style="{ backgroundImage: `url(${hero})` }">
			<div class="headline">
				<iGPSLogo class="igps-logo" role="presentation" />
				<span class="sr-only">iGPS</span>
				<p>A cutting edge organizational assessment tool at your fingertips.</p>
			</div>
			<div class="cta">
				<p>What can iGPS do for your organization?</p>
				<router-link class="cta-btn" to="/services">Learn More</router-link>
			</div>
			<p class="quote"><q>More than anything else we've done, iGPS is responsible for the irrevocable transformation of our organization.</q><br>-- satisfied client</p>
		</section>
		<Company />
	</section>
</template>

<script>
import iGPSLogo from '../assets/iGPSLogo.svg';
import hero from '../assets/hero.png';
import Company from './Company.vue';

export default {
	components: {
		Company,
		iGPSLogo
	},
	data() {
		return {
			hero
		};
	}
};
</script>

<style lang="scss">
	.home {
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		font-size: $font-size-18;
		padding: 48px 24px;
		.headline {
			.igps-logo {
				width: 200px;
				margin-bottom: 12px;
			}
		}
		.cta {
			margin: 32px 0;
			text-align: center;
			.cta-btn {
				border-radius: 5px;
				background-color: $gray-600;
				color: $white;
				display: inline-block;
				font-weight: 600;
				margin-top: 12px;
				padding: 8px 10px;
				&:hover {
					background-color: $gray-400;
					text-decoration: none;
				}
			}
		}
		.quote {
			max-width: 300px;
			margin-left: auto;
		}
	}
</style>
