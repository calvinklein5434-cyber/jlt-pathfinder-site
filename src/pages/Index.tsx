import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Webinars from "@/components/Webinars";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Courses />
      <Webinars />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
