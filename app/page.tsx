import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import ServicesSection from "@/components/sections/services-section";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Process from "@/components/sections/process";
import FeaturedWork from "@/components/sections/featured-work";
import Testimonials from "@/components/sections/testimonials";
import CTABanner from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Introduction />
      <ServicesSection />
      <WhyChooseUs />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
