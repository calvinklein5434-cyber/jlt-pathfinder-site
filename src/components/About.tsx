import { Card } from "@/components/ui/card";
import { Award, BookOpen, Users, Target, Scale, FileText } from "lucide-react";

const About = () => {
  const specialties = [
    {
      icon: Scale,
      title: "Bar Examinations",
      description: "Comprehensive AIBE preparation and success strategies"
    },
    {
      icon: FileText,
      title: "Legal Drafting",
      description: "Professional document preparation and contract writing"
    },
    {
      icon: BookOpen,
      title: "Judicial Training",
      description: "Judgment writing and legal reasoning development"
    },
    {
      icon: Target,
      title: "Competitive Exams",
      description: "Strategic preparation for various legal competitive examinations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-gold bg-clip-text text-transparent">JLT Academy</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              JLT Academy is a premier legal education institution dedicated to empowering the next generation 
              of legal professionals. With over 15 years of expertise in legal education and competitive 
              examination preparation, we provide comprehensive training in all aspects of legal practice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">15+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">1000+ Students</div>
                  <div className="text-sm text-muted-foreground">Successfully Trained</div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Our academy specializes in bar examination preparation, legal drafting, judicial training, 
              and comprehensive coverage of the new Indian legal system including Bharatiya Nyaya Sanhita, 
              Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam.
            </p>
          </div>

          {/* Educator Profile */}
          <div className="text-center lg:text-left">
            <Card className="p-8 shadow-card">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg">
                  <img 
                    src="/lovable-uploads/cb2f6ffc-195a-4d19-a086-e47ef4f3b2b3.png" 
                    alt="Lead Educator" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">Lead Educator</h3>
                <div className="text-primary font-semibold mb-4">B.Com, M.Com + LLB</div>
                
                <div className="bg-accent p-4 rounded-lg mb-6 w-full">
                  <div className="text-3xl font-bold text-accent-foreground mb-1">15+</div>
                  <div className="text-accent-foreground">Years Experience</div>
                </div>

                <p className="text-muted-foreground text-center lg:text-left leading-relaxed">
                  Expert legal educator with extensive experience in bar examination preparation, 
                  legal drafting, and judicial training. Dedicated to empowering the next generation 
                  of legal professionals with practical knowledge and strategic insights.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Specialties */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {specialties.map((specialty, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <specialty.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{specialty.title}</h4>
                <p className="text-sm text-muted-foreground">{specialty.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;