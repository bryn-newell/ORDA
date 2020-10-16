<template>
	<section>
		<h2>Publications</h2>
		<h3>Books</h3>
		<ul>
			<li>Boss, R. W. (1988). Organization development in health care settings. New York: Human Sciences Press.</li>
			<li>Boss, R. W. (1989). Organization development in health care. Reading, Mass.: Addison-Wesley.</li>
		</ul>
		<h3>Published Research</h3>
		<p><a :href="publications" target="_blank" download>Download the PDF for the full list of publications</a></p>
	</section>
</template>

<script>
import publications from '../assets/publication-list.pdf';

export default {
	data() {
		return {
			publications
		};
	}
};
</script>
