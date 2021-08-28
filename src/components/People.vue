<template>
	<section class="people">
		<h2 class="heading">Our People</h2>
		<div class="people-container">
			<div v-for="(person, index) in people" :key="index" class="person-container">
				<div class="img-container">
					<img :src="person.img" alt="Wayne Boss Headshot" role="presentation">
				</div>
				<div>
					<h3 class="sub-heading">{{ person.name }}</h3>
					<p>{{ person.bio }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Bob from '@/assets/Bob_Newell.jpg';
import David from '@/assets/David_Boss.jpg';
import Jim from '@/assets/Jim_Foltz.jpg';
import Wayne from '@/assets/Wayne_Boss.jpg';

export default {
	data() {
		return {
			people: [
				{
					name: 'Wayne Boss',
					bio: 'R. Wayne Boss, President and Chief Executive Officer of Organization Research and Development Associates, is a Professor of Management in the Leeds School of Business at the University of Colorado, Boulder Campus. He received his Bachelor\'s and Master\'s degrees from Brigham Young University and his Ph.D. from the University of Georgia. Dr. Boss is the editor of the Organization Development and Change Newsletter for the Academy of Management and serves on the editorial boards of several major professional journals. He is the author of four books and over 100 articles. A selected list of his recent clients includes numerous organizations in both the public and private sectors in the United States, South America, Europe, and the Pacific Rim. He has also served as a consultant for the People\'s Republic of China. He specializes in organization development and the management of organizational change in healthcare, and he currently teaches a six-course sequence in organization development and consultation skills to masters and doctoral students. He is married, has four children, and lives in Boulder, Colorado.',
					img: Wayne
				},
				{
					name: 'Jim Foltz',
					bio: 'Jim Foltz is Chief Technology Officer for Organization Research and Development Associates. Prior to ORDA, Jim has held technical positions at a variety of high tech companies, including Netscape Communications, America Online, and Sun Microsystems. He received his Bachelor\'s Degree at Oberlin College, and Master\'s Degree at Stanford University. Jim and his family live in Boulder, Colorado.',
					img: Jim
				},
				{
					name: 'Robert Newell',
					bio: 'Robert Newell is the Creative Director for the iGPS suite of online tools. Robert has over 17 years of design experience across a number of industries. Most recently, Robert was designing online applications for several major financial brokerages and hedge funds including Reuters, Charles Schwab, Fidelity, Merril Lynch, Wellington Management, and Goldman Sachs. He received his Bachelor\'s of Arts Degree from Brigham Young University, and he lives with his family in Boulder, Colorado.',
					img: Bob
				},
				{
					name: 'David Boss',
					bio: 'David S. Boss, Marketing and Strategy Director of Organization Research and Development Associates, is an Assistant Professor of Strategic Management in the College of Business at Ohio University. He received his Bachelor\'s degree from Brigham Young University, his MBA from Babson College, and his Ph.D. from Texas A&M University. Dr. Boss has worked in the consulting field for over ten years. He specializes in organizational resource management, and he currently teaches a strategic management capstone course to undergraduate seniors. He is married and has three children.',
					img: David
				}
			]
		};
	}
};
</script>

<style lang="scss">
.people {
	padding: 12px;
	.heading {
		font-size: $font-size-32;
	}
	.people-container {
		display: flex;
		flex-wrap: wrap;
		margin-right: -32px;
		.person-container {
			display: flex;
			margin: 24px 32px 24px 0;
			.sub-heading {
				font-size: $font-size-20;
				margin-bottom: 8px;
			}
			.img-container {
				width: 240px;
				margin-right: 24px;;
			}
			img {
				border-radius: 10px;
				width: 100%;
				height: auto;
			}
			p {
				max-width: 500px;
			}
		}
	}
}
</style>
