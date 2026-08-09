import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Highlight from '@/components/Highlight';
import WhyUs from '@/components/WhyUs';
import HowToBuy from '@/components/HowToBuy';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollObserver from '@/components/ScrollObserver';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Highlight />
      <WhyUs />
      <HowToBuy />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
      <ScrollObserver />
    </main>
  );
}
