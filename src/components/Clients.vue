<template>
	<section class="clients">
		<h2 class="heading">Client List</h2>
		<p class="sub-heading">Our consultants have experience working with the following <strong>selected</strong> list of clients:</p>
		<div class="cards">
			<div class="client-card" v-for="(client, index) in clients" :key="index" :class="`${client.industry}-card`">
				<h3>{{client.industry}}</h3>
				<ul>
					<li v-for="(company, index) in client.companies" :key="index">{{company}}</li>
				</ul>
			</div>
		</div>
		<section class="comments">
			<div class="decorative-div" role="presentation"></div>
			<h2 class="heading">Client Comments</h2>
			<p>"Through iGPS™ we have more information about the emotional state of our employees than any of our competitors. This information is more accessible and more detailed than even our financial information."</p>
			<p>"iGPS™ is light years ahead of anything its competitors have on the drawing board."</p>
			<p>"iGPS™ has the power to transform how we, in health care, manage people."</p>
			<p>"More than anything else we’ve done, iGPS™ is responsible for the irrevocable transformation of our organization."</p>
			<p>"With stratifications by demographic groups and puestion groupings, we can identify that a specific demographic group of employees on the second shift are in high stages of burnout and corporate disengagement. We get them together, solved their problem and move on. Our turnover rates are 10 percentage points below the facilities around us. And as mentioned, contract labor costs were reduced by $5 million/year instantly."</p>
			<p>"An advantage iGPS™ has over its competitors is its ability, at a managerial level, to immediately see areas of necessary focus. You do not have to scroll through various parts of a CD and sift through the data to see what areas need focus to affect positive change. You are able to get results immediately upon closure of the assessment."</p>
			<p>"Hearing you describe iGPS™ doesn’t give us an appreciation for the power of the system. Seeing it really drives it home. You see the power of the tool. When you hear someone say, “We have this automated, powerful survey tool”, it’s easy to have your eyes glaze over because it sounds like rhetoric – something we’ve heard before. Seeing iGPS™ really shows the power and the difference of what you have compared to your competition."</p>
		</section>
		<section class="publications">
			<div class="decorative-div" role="presentation"></div>
			<h2 class="heading">Publications</h2>
			<h3 class="sub-heading">Books</h3>
			<ul>
				<li>Boss, R. W. (1988). Organization development in health care settings. New York: Human Sciences Press.</li>
				<li>Boss, R. W. (1989). Organization development in health care. Reading, Mass.: Addison-Wesley.</li>
			</ul>
			<h3 class="sub-heading research">Published Research</h3>
			<p><a :href="publications" target="_blank" download>Download the PDF for the full list of publications</a></p>
		</section>
	</section>
</template>

<script>
import publications from '../assets/publication-list.pdf';

export default {
	data() {
		return {
			clients: [
				{
					industry: 'Healthcare',
					companies: ['Ascension Health', 'American College of Emergency Physicians', 'Aurora Presbyterian Hosptial', 'Catholic Health Initiatives', 'Culpepper Regional Hospital', 'Denver Cardiologists', 'Denver Presbyterian/St. Lukes Hosptial', 'Erlanger Health System', 'Kaiser Permanente', 'Lee Memorial Health System', 'LSU Medical Center', 'Memorial Health System', 'Memrorial Hospital, Colorado Springs, CO', 'Republic Health Corporation', 'Routte Memorial Hospital', 'Saint Elizabeth\'s Hospital', 'Saint Francis Hospital', 'Sisters of Charity of Nazareth Heatlh Corporation', 'Sisters of Providence, Seattle, WA', 'Spartanburg Regional Healthcare System', 'Via Christi Regional Medical Center']
				},
				{
					industry: 'Financial Services',
					companies: ['Bank of America', 'E*Trade', 'Goldman Sachs', 'Janus Capital Mgmt.', 'MaterCard', 'Merrill Lynch', 'Morgan Stanley', 'NASDAQ', 'Standard & Poors']
				},
				{
					industry: 'Techonology',
					companies: ['4R Systems', 'Fujitsu Network Comm.', 'IBM Landmark Graphics', 'IDX', 'Intel', 'Microsoft', 'Netscape', 'Nokia', 'Sun Microsystems']
				},
				{
					industry: 'Communications',
					companies: ['AT&T', 'Global Crossing', 'Nokia, Switzerland', 'T-Mobile, Germany', 'Citizen\'s Comm.', 'QWest']
				},
				{
					industry: 'Manufaturing',
					companies: ['Alcoa, Inc.', 'Huhtamaki', 'Vista Chemicals', 'Natural Resources', 'Maraven Oil Company', 'IBM']
				},
				{
					industry: 'Judicial/Criminal Justice',
					companies: ['Boulder Cty. Sheriff\'s Dept.', 'City of Boulder Police Dept.', 'Colorado State Judicial Dept.', 'National Institute of Corrections']
				},
				{
					industry: 'Utilities',
					companies: ['BC Hydro', 'California Power Exchange', 'Citizens Utilities', 'Puget Sound Energy']
				},
				{
					industry: 'Professional Services',
					companies: ['PricewaterhouseCoopers', 'Deloitte & Touche']
				},
				{
					industry: 'Pharmaceuticals',
					companies: ['Johnson & Johnson', 'Novartis Pharmaceuticals', 'Schering-Plough Pharmaceuticals', 'SmithKline Beecham']
				},
				{
					industry: 'Trucking',
					companies: ['American Central Trucking', 'Combined Transport']
				},
				{
					industry: 'Government',
					companies: ['LBJ Space Center', 'NASA', 'National Inst. of Standards', 'NCAR', 'People\'s Republic of China', 'State of Colorado', 'State of Georgia']
				},
			],
			publications
		};
	}
};
</script>

<style lang="scss">
	.clients {
		padding: 12px;
		.heading {
			font-size: $font-size-36;
		}
		.sub-heading {
			font-size: $font-size-18;
			margin-bottom: 24px;
		}
		.cards {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			margin-right: -32px;
			.client-card {
				background-color: $blue-600;
				color: white;
				border: 2px solid $blue-400;
				border-radius: 8px;
				height: fit-content;
				margin-bottom: 32px;
				margin-right: 32px;
				min-width: 300px;
				padding: 10px;
				&.Healthcare-card {
					grid-row: 1 / span 3;
				}
				h3 {
					margin-top: 0;
					margin-bottom: 12px;
				}
				ul {
					list-style: none;
					margin: 0;
					padding: 0;
				}
			}
		}
		.comments {
			margin-top: 32px;
			margin-bottom: 42px;
			position: relative;
			.heading {
				font-size: $font-size-30;
				margin-bottom: 12px;
			}
			p {
				margin-bottom: 12px;
			}
		}
		.publications {
			margin-bottom: 12px;
			position: relative;
			.heading {
				font-size: $font-size-30;
				margin-bottom: 12px;
			}
			.sub-heading {
				font-size: $font-size-24;
				margin-bottom: 12px;
				&.research {
					margin-top: 12px;
				}
			}
		}
		.decorative-div {
			top: -24px;
			left: -12px;
		}
	}
</style>
