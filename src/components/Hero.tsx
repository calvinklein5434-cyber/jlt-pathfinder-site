import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Video } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen gradient-hero hero-glow overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/2b76a1dd-7abe-4465-ba29-d5660cc0d79c.png" 
            alt="JLT Academy Logo" 
            className="h-12 md:h-16 shadow-hero"
          />
        </div>
        
        <div className="flex items-center space-x-6 md:space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="nav-link hidden md:block"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('courses')} 
            className="nav-link flex items-center space-x-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Courses</span>
          </button>
          <button 
            onClick={() => scrollToSection('webinars')} 
            className="nav-link flex items-center space-x-2"
          >
            <Video className="w-4 h-4" />
            <span className="hidden md:block">Webinars</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="nav-link hidden md:block"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="nav-link hidden md:block"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-8 pt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Empowering</span>
            <span className="gradient-gold bg-clip-text text-transparent">Legal Minds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert legal education with 15+ years of experience in bar examination preparation, 
            legal drafting, and judicial training.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('courses')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-card"
            >
              Explore Courses
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-300">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-300">Expert Courses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;