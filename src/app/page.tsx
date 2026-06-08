import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Portfolio from "@/components/Portfolio/Portfolio";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Section
          id="services"
          title="Our Services"
          description="Three core pillars that power intelligent, automated businesses."
        >
          <Benefits />
        </Section>

        <Section
          id="portfolio"
          title="Portfolio & Case Studies"
          description="Real-world systems we've engineered end to end."
        >
          <Portfolio />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
