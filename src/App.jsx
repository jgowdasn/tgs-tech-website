import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const DiwaliSection = lazy(() => import('./components/DiwaliSection'));
const Services = lazy(() => import('./components/Services'));
const Products = lazy(() => import('./components/Products'));
const Gallery = lazy(() => import('./components/Gallery'));
const OurWork = lazy(() => import('./components/OurWork'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <DiwaliSection />
        <Services />
        <Products />
        <Gallery />
        <OurWork />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}

export default App;
