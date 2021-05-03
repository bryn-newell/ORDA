<template>
	<div class="company">
      <div class="holderone">
        <div class="howdy">Improve Employee Satisfaction & Overall Accountability</div>
        <employeeSatisfaction />
        <div class="hdtime">While on the surface, the overall health of a company may be on target, underlying dissatisfaction in hidden areas can lead to unforeseen drops in profitability due to lack of engagement, burnout and turnover. An example from the Healthcare industry, specifically hospital systems, is the loss of one nurse. This loss can cost a hospital $90,000 to $145,000 per nurse, depending on specialty.</div>
      </div>
      <div class="holdertwo">
        <div class="hdtime"><p>Reduce burnout, increase job involvement, improve trust, and increase customer satisfaction. Clients report significant results:</p>
		<ul>
				<li>Decreased voluntary turnover from 24.1% to 3.8%</li>
				<li>Increased customer satisfaction 209%</li>
				<li>Reduced temporary labor costs $5.3 million</li>
				<li>Increased employee giving 187%</li>
				<li>Increased total margin 231%</li>
			</ul></div>
        <manageCorpCulture />
        <div class="howdy">Proactively manage corporate culture</div>
      </div>
	<div class="holderthree">
        <div class="howdy">Quickly identify issues and how to solve them</div>
        <identifyIssues />
        <div class="hdtime">We provide cutting edge organizational assessments and support systems to enable executive committees and front line managers all the resources necessary to improve the organizational culture and profitability. We use assessment instruments and face to face interviews to diagnose an organization’s strengths and areas of opportunity. We then facilitate action planning and do periodic progress checks to ensure your organization is realizing maximum improvement and overall health. This process of “culture measurement and management” provides results as detailed as any financial report.</div>
      </div>
	<div class="holderone">
        <div class="howdy">Provide leaders with real time information</div>
        <realtimeInfo />
        <div class="hdtime">Our purpose is focused solely on providing leaders with real time information and top-of-class consulting services that allow them to:<ul>
				<li>Focus their leadership efforts in areas that will provide the highest benefit to their organization and their customers.</li>
				<li>Harvest the seeds of innovation and creative collaboration that already exist in their organization.</li>
				<li>Access higher levels of employee motivation than ever experienced before.</li>
			</ul></div>
      </div>
	<div class="holdertwo">
        <div class="hdtime"><p><p>Further, through our services, we provide our customers with:</p>
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
			</ul></div>
				<wideRangeBenefits />
        <div class="howdy">Wide range of benefits</div>
      </div>
		<section>
    </section>
	</div>
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
		text-align: left;
		section {
			max-width: 850px;
		}
		.purpose {
			margin-left: auto;
		}
	}
  .holderone {
  background-color: #5C6495;
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.holdertwo {
  background-color: #fff;
  width: 100%;
  color: #5C6495;
  text-align: center;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.holderthree {
  background-color: #B3BCF2;
  width: 100%;
  color: #5C6495;
  text-align: center;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.howdy {
  width: 30%;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 240%;
  font-family: Tahoma;
  margin-left: auto;
  margin-right: auto;
}
.doody {
  width: 30%;
  margin: 15px;
}
.hdtime {
  width: 30%;
  margin: 15px;
  font-family: tahoma;
}
</style>
