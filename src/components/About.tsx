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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-gold bg-clip-text text-transparent">JLT Academy</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              JLT Academy is a premier legal education institution dedicated to empowering the next generation 
              of legal professionals. With over 15 years of expertise in legal education and competitive 
              examination preparation, we provide comprehensive training in all aspects of legal practice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Award className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">15+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">1000+ Students</div>
                  <div className="text-sm text-muted-foreground">Successfully Trained</div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our academy specializes in bar examination preparation, legal drafting, judicial training, 
              and comprehensive coverage of the new Indian legal system including Bharatiya Nyaya Sanhita, 
              Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam.
            </p>
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