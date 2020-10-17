<template>
	<footer class="footer">
		<div class="contact">
			<h3>ORDA</h3>
			<ul>
				<li>Organization Research and Development Associates</li>
				<li>5530 Racquet Lane Boulder CO 80303</li>
				<li>Attn: Robert Newell</li>
				<li><a href="mailto:sales@orda-us.com">sales@orda-us.com</a></li>
			</ul>
		</div>
		<div class="footer-text">
			<nav>
				<router-link to="/terms">Terms of Use</router-link>
				<router-link to="/privacyPolicy">Privacy Policy</router-link>
			</nav>
			<p>© {{year}} ORDA</p>
		</div>
	</footer>
</template>

<script>
export default {
	computed: {
		year() {
			return new Date().getFullYear();
		}
	}
};
</script>

<style lang="scss">
	.footer {
		margin-top: 20px;
		background-color: $blue-600;
		color: $white;
		padding: 10px 40px 10px 60px;
		a {
			color: $white;
		}
		.contact {
			text-align: left;
			ul {
				list-style: none;
				padding: 0;
			}
		}
		.footer-text {
			display: flex;
			justify-content: space-between;
			nav a:first-child {
				margin-right: 20px;
			}
			p {
				margin: 0;
			}
		}
	}
</style>
