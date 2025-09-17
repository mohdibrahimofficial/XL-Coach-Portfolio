import Banner from "../components/Homepage/Banner";
import About from "../components/Homepage/About";
import Events from "../components/Homepage/Events";
import VideoTestimonials from "../components/Homepage/VideoTestimonials";
import Contact from "../components/Homepage/Contact";
import Footer from "../components/Homepage/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Banner />
      <About />
      <Events />
      <VideoTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}