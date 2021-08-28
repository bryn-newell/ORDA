<template>
	<section class="company">
		<div class="company-container bg-dark-blue">
			<h2 class="title">Improve Employee Satisfaction & <br/>Overall Accountability</h2>
			<employeeSatisfaction role="presentation" />
			<p>While on the surface, the overall health of a company may be on target, underlying dissatisfaction in hidden areas can lead to unforeseen drops in profitability due to lack of engagement, burnout and turnover. An example from the Healthcare industry, specifically hospital systems, is the loss of one nurse. This loss can cost a hospital $90,000 to $145,000 per nurse, depending on specialty.</p>
		</div>
		<div class="company-container">
			<div class="text-left">
				<h3>Reduce burnout, increase job involvement, improve trust, and increase customer satisfaction. Clients report significant results:</h3>
				<ul>
					<li>Decreased voluntary turnover from 24.1% to 3.8%</li>
					<li>Increased customer satisfaction 209%</li>
					<li>Reduced temporary labor costs $5.3 million</li>
					<li>Increased employee giving 187%</li>
					<li>Increased total margin 231%</li>
				</ul>
			</div>
			<manageCorpCulture class="corp-svg" role="presentation" />
			<h2 class="title">Proactively manage corporate culture</h2>
		</div>
		<div class="company-container bg-light-blue">
			<h2>Quickly identify issues and how to solve them</h2>
			<identifyIssues role="presentation" />
			<p>We provide cutting edge organizational assessments and support systems to enable executive committees and front line managers all the resources necessary to improve the organizational culture and profitability. We use assessment instruments and face to face interviews to diagnose an organization’s strengths and areas of opportunity. We then facilitate action planning and do periodic progress checks to ensure your organization is realizing maximum improvement and overall health. This process of “culture measurement and management” provides results as detailed as any financial report.</p>
		</div>
		<div class="company-container bg-dark-blue">
			<h2 class="title">Provide leaders with real time information</h2>
			<realtimeInfo class="realtime-svg" role="presentation" />
			<div class="text-left">
				<h3>Our purpose is focused solely on providing leaders with real time information and top-of-class consulting services that allow them to:</h3>
				<ul>
					<li>Focus their leadership efforts in areas that will provide the highest benefit to their organization and their customers.</li>
					<li>Harvest the seeds of innovation and creative collaboration that already exist in their organization.</li>
					<li>Access higher levels of employee motivation than ever experienced before.</li>
				</ul>
			</div>
		</div>
		<div class="company-container">
			<div class="text-left">
				<h3>Further, through our services, we provide our customers with:</h3>
				<ul>
					<li>Immediate access to assessment data.</li>
					<li>Reliable and predictive ability in the scales measured to identify “hotspots”.</li>
					<li>The ability to drill into data and manipulate it in whatever manner desired.</li>
					<li>Screener capabilities or the ability to quickly identify individual groups (departments or demographics) that need focus.</li>
					<li>Measurable and sustainable profitability in a short period of time.</li>
					<li>Quick tips for managers on how to immediately improve in identified areas of opportunity.</li>
					<li>Decreased turnover.</li>
					<li>Decreased temporary agency costs.</li>
					<li>Increased customer satisfaction.</li>
					<li>Increased net revenue per FTE.</li>
					<li>Increased total margin profitability.</li>
				</ul>
			</div>
			<wideRangeBenefits class="widerange-svg" role="presentation" />
			<h2 class="title">Wide range of benefits</h2>
		</div>
	</section>
</template>

<script>
import employeeSatisfaction from '../assets/1-EmployeeSatisfaction.svg';
import manageCorpCulture from '../assets/2-ManageCorpCulture.svg';
import identifyIssues from '../assets/3-IdentifyIssues.svg';
import realtimeInfo from '../assets/4-RealtimeInfo.svg';
import wideRangeBenefits from '../assets/5-WideRangeBenefits.svg';

export default {
	components: {
		employeeSatisfaction,
		manageCorpCulture,
		identifyIssues,
		realtimeInfo,
		wideRangeBenefits
	}
};
</script>

<style lang="scss">
	.company {
		color: $blue;
		.company-container {
			align-items: center;
			display: flex;
			justify-content: space-between;
			min-height: 380px;
			padding: 48px 24px;
			text-align: center;
			&.bg-dark-blue {
				background-color: $blue;
				color: white;
			}
			&.bg-light-blue {
				background-color: $blue-200;
				color: $blue;
			}
			svg {
				flex-shrink: 0;
				margin: 0 24px;
				width: 170px;
			}
			.title {
				font-size: $font-size-36;
				max-width: 400px;
			}
			p {
				max-width: 400px;
			}
			ul {
				list-style-type: '-';
				list-style-position: outside;
			}
		}
	}
</style>
