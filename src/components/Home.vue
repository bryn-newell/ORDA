<template>
	<section>
		<section class="home">
			<div class="headline">
				<iGPSLogo />
				<p>A cutting edge organizational assessment tool at your fingertips.</p>
			</div>
			<div class="cta">
				<p>What can iGPS do for your organization?</p>
				<router-link to="/services">Learn More</router-link>
			</div>
			<p class="quote"><q>More than anything else we've done, iGPS is responsible for the irrevocable transformation of our organization.</q><br>-- satisfied client</p>
		</section>
		<Company />
	</section>
</template>

<script>
import iGPSLogo from '../assets/iGPSLogo.svg';
import Company from './Company.vue';

export default {
	components: {
		Company,
		iGPSLogo
	},
	data() {
		return {
		};
	}
};
</script>

<style lang="scss">
	.home {
		background-size: cover;
		background-position: 0%;
		display: flex;
		flex-direction: column;
		height: 50vh;
		justify-content: space-between;
		.headline {
			p {
				margin: 0 0 0 10px;
			}
		}
		.cta {
			text-align: center;
			a {
				border-radius: 5px;
				background-color: $gray-600;
				color: $white;
				display: inline-block;
				font-weight: 600;
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
