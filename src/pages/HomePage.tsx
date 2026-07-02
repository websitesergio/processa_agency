import Hero from '../components/Hero';
import StatBar from '../components/StatBar';
import RevenueCalculator from '../components/RevenueCalculator';
import ThreePillars from '../components/ThreePillars';
import Timeline from '../components/Timeline';
import Qualification from '../components/Qualification';
import FAQAccordion from '../components/FAQAccordion';
import CTABand from '../components/CTABand';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatBar />
      <RevenueCalculator />
      <ThreePillars />
      <Timeline />
      <Qualification />
      <FAQAccordion />
      <CTABand />
    </main>
  );
}
