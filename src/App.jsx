import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import OurApproach from "./components/OurApproach";
import Certifications from "./components/Certifications";
import WhyUs from "./components/WhyUs";
import QualityIntegrity from "./components/QualityIntegrity";
import WorkingWithRiqs from "./components/WorkingWithRiqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import MobileCta from "./components/MobileCta";

function App() {
  return (
    <>
      {/* Scroll target for the logo and footer "Home" links. It can't be the
          navbar itself: that's position:fixed, so it is always "in view" and
          jumping to it never scrolls. */}
      <div id="top" />
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Industries />
      <OurApproach />
      <Certifications />
      <WhyUs />
      <QualityIntegrity />
      <WorkingWithRiqs />
      <Contact />
      <Footer />
      <BackToTop />
      <MobileCta />
    </>
  );
}

export default App;
