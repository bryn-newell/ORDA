<template>
	<footer class="footer">
		<div class="contact">
			<h3>ORDA</h3>
			<ul>
				<li>Main Office:</li>
				<li>Organization Research and Development Associates</li>
				<li>5530 Racquet Lane Boulder CO 80303</li>
				<li>Attn: Robert Newell</li>
				<li><a href="mailto:sales@orda-us.com">sales@orda-us.com</a></li>
			</ul>
		</div>
		<div class="footer-text">
			<ul>
				<li>Terms of Use</li>
				<li>Privacy Policy</li>
				<li>Home</li>
			</ul>
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
		.contact {
			text-align: left;
			h3 {
				margin-left: 40px;
			}
		}
		.footer-text {
			display: flex;
			justify-content: space-between;
			ul {
				display: flex;
				margin: 0;
				padding: 0;
				li {
					margin: 0 10px;
				}
			}
			p {
				margin: 0;
			}
		}
		ul {
			list-style: none;
		}
	}
</style>
