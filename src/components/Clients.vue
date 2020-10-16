<template>
	<section class="clients">
		<h2>Client List</h2>
		<p>Our consultants have experience working with the following <strong>selected</strong> list of clients:</p>
		<div class="cards">
			<div class="client-card" v-for="(client, index) in clients" :key="index">
				<h3>{{client.industry}}</h3>
				<ul>
					<li v-for="(company, index) in client.companies" :key="index">{{company}}</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			clients: [
				{
					industry: 'Communications',
					companies: ['AT&T', 'Global Crossing', 'Nokia, Switzerland', 'T-Mobile, Germany', 'Citizen\'s Comm.', 'QWest']
				},
				{
					industry: 'Manufaturing',
					companies: ['Alcoa, Inc.', 'Huhtamaki', 'Vista Chemicals', 'Natural Resources', 'Maraven Oil Company', 'IBM']
				},
				{
					industry: 'Financial Services',
					companies: ['Bank of America', 'E*Trade', 'Goldman Sachs', 'Janus Capital Mgmt.', 'MaterCard', 'Merrill Lynch', 'Morgan Stanley', 'NASDAQ', 'Standard & Poors']
				},
				{
					industry: 'Government',
					companies: ['LBJ Space Center', 'NASA', 'National Inst. of Standards', 'NCAR', 'People\'s Republic of China', 'State of Colorado', 'State of Georgia']
				},
				{
					industry: 'Judicial/Criminal Justice',
					companies: ['Boulder Cty. Sheriff\'s Dept.', 'City of Boulder Police Dept.', 'Colorado State Judicial Dept.', 'National Institute of Corrections']
				},
				{
					industry: 'Techonology',
					companies: ['4R Systems', 'Fujitsu Network Comm.', 'IBM Landmark Graphics', 'IDX', 'Intel', 'Microsoft', 'Netscape', 'Nokia', 'Sun Microsystems']
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
					industry: 'Healthcare',
					companies: ['Ascension Health', 'American College of Emergency Physicians', 'Aurora Presbyterian Hosptial', 'Catholic Health Initiatives', 'Culpepper Regional Hospital', 'Denver Cardiologists', 'Denver Presbyterian/St. Lukes Hosptial', 'Erlanger Health System', 'Kaiser Permanente', 'Lee Memorial Health System', 'LSU Medical Center', 'Memorial Health System', 'Memrorial Hospital, Colorado Springs, CO', 'Republic Health Corporation', 'Routte Memorial Hospital', 'Saint Elizabeth\'s Hospital', 'Saint Francis Hospital', 'Sisters of Charity of Nazareth Heatlh Corporation', 'Sisters of Providence, Seattle, WA', 'Spartanburg Regional Healthcare System', 'Via Christi Regional Medical Center']
				},
			]
		};
	}
};
</script>

<style lang="scss">
	.clients {
		.cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			.client-card {
				border: 1px solid black;
				border-radius: 5px;
				height: fit-content;
				margin-bottom: 20px;
				min-width: 300px;
				padding: 10px;
				h3 {
					margin-top: 0;
				}
				ul {
					list-style: none;
					margin: 0;
					padding: 0;
				}
			}
		}
	}
</style>
