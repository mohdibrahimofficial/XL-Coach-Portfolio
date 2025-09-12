import Banner from "../components/Homepage/Banner";
import About from "../components/Homepage/About";
import Events from "../components/Homepage/Events";
import VideoTestimonials from "../components/Homepage/VideoTestimonials";
import Contact from "../components/Homepage/Contact";
import Footer from "../components/Homepage/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <div className="border-t border-white mx-6"></div>
      <About />
      <div className="border-t border-white mx-6"></div>
      <Events />
      <div className="border-t border-white mx-6"></div>
      <VideoTestimonials />
      <div className="border-t border-white mx-6"></div>
      <Contact />
      <div className="border-t border-white mx-6"></div>
      <Footer />
    </div>
  );
}