import { Navbar } from "@/components/Navbar";
import { MatrixBackground } from "@/components/MatrixBackground";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { GlitchText } from "@/components/GlitchText";
import { siteData } from "@/data";
import { 
  Terminal, 
  Github, 
  Download, 
  ChevronRight,   Code, 
  Cpu, 
  ShieldAlert, 
  ExternalLink,
  Award,
  GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactMessageSchema } from "@shared/schema";

export default function Home() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof insertContactMessageSchema>>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

const onSubmit = async (data: z.infer<typeof insertContactMessageSchema>) => {
  const formData = {
    ...data,
    access_key: "b07f0c4a-62f4-439a-8bb0-a3d8c5c945ac"
  };
  
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message Transmitted",
        description: "Your encrypted message has been received.",
        className: "bg-black border-primary text-primary font-mono",
      });
      form.reset();
    } else {
      // Dacă Web3Forms returnează succes: false
      throw new Error("API Error");
    }

  } catch (error) {
    toast({
      title: "Transmission Error",
      description: "Signal lost. Please check your connection and try again.",
      className: "bg-black border-red-600 text-red-500 font-mono",
    });
  }
};

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono overflow-x-hidden selection:bg-primary selection:text-black">
      <MatrixBackground />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-primary text-[8px] sm:text-[10px] md:text-xs leading-[1.1] md:leading-[1.1] whitespace-pre font-mono overflow-hidden mb-8 opacity-70 hidden sm:block select-none"
          >
            {siteData.hero.asciiArt}
          </motion.div>

          <div className="text-center sm:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary font-medium mb-4"
            >
              Hi, my name is
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              <GlitchText text={siteData.hero.title} />
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-3xl md:text-5xl font-bold text-gray-400 mb-8"
            >
              {siteData.hero.subtitle}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild
                className="bg-primary text-black hover:bg-primary/80 font-bold border-2 border-primary rounded-none px-8 py-6 text-lg"
              >
                <a href={siteData.cv.path} download={siteData.cv.filename}>
                  <Download className="mr-2 h-5 w-5" /> Download CV
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-none px-8 py-6 text-lg bg-transparent"
              >
                <a href={siteData.about.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> GitHub Profile
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary/50"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="ABOUT_ME" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="font-light leading-relaxed text-gray-400 text-lg border-l-2 border-primary/30 pl-6"
            >
              <p>{siteData.about.summary}</p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldAlert, label: "Penetration Testing" },
                { icon: Terminal, label: "Scripting (Bash/Py)" },
                { icon: Code, label: "Exploit Dev" },
                { icon: Cpu, label: "System Admin" },
              ].map((skill, index) => (
                <Card key={index} delay={index * 0.1} className="flex flex-col items-center justify-center p-6 text-center">
                  <skill.icon className="h-10 w-10 text-primary mb-3" />
                  <span className="text-sm font-medium text-white">{skill.label}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="EXPERIENCE_&_EDUCATION" align="left" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <GraduationCap className="mr-3 text-primary" /> Education History
              </h3>
              <div className="space-y-8 border-l border-primary/20 ml-3 pl-8 relative">
                {siteData.experience.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-black border-2 border-primary" />
                    <span className="text-primary text-sm font-bold tracking-widest">{edu.period}</span>
                    <h4 className="text-xl text-white font-bold mt-1">{edu.institution}</h4>
                    <p className="text-gray-400 mt-2">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Award className="mr-3 text-primary" /> Achievements
              </h3>
              <div className="space-y-4">
                {siteData.experience.achievements.map((achievement, idx) => (
                  <Card key={idx} delay={idx * 0.1} className="py-4 px-6 border-l-4 border-l-primary/50">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-primary text-xs font-bold">{achievement.date}</span>
                      <span className="text-gray-500 text-xs uppercase">{achievement.level}</span>
                    </div>
                    <h4 className="text-white font-medium">{achievement.title}</h4>
                    {achievement.details && <p className="text-gray-400 text-sm mt-1">{achievement.details}</p>}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Certifications Section */}
      <section id="projects" className="py-24 bg-black/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="PROJECTS_&_TOOLS" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {siteData.projects.map((project, idx) => (
              <Card key={idx} delay={idx * 0.1} className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Terminal className="h-8 w-8 text-primary" />
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.date}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Full Project Portfolio</h3>
            <Button 
              asChild
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
            >
              <a href={siteData.identity.contact.github} target="_blank" rel="noopener noreferrer">
                View on GitHub <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="border-t border-gray-800 pt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <ShieldAlert className="mr-3 text-primary" /> CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteData.certifications.map((cert, idx) => (
                <Card key={idx} delay={idx * 0.1} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                  </div>
                  <span className="text-primary font-mono text-sm border border-primary/30 px-3 py-1">
                    {cert.date}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="INITIATE_CONTACT" align="center" />
          
          <Card className="bg-black/80 backdrop-blur-sm border-primary/20">
            <p className="text-center text-gray-400 mb-8">
              My inbox is always open. Whether you have a question about security, 
              want to collaborate on a pentest, or just want to say hi, I'll try my best to get back to you!
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">User.Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            {...field} 
                            className="bg-black/50 border-primary/30 focus:border-primary text-white rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">User.Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="name@example.com" 
                            {...field} 
                            className="bg-black/50 border-primary/30 focus:border-primary text-white rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary">Message.Payload</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Encrypt your message here..." 
                          className="min-h-[150px] bg-black/50 border-primary/30 focus:border-primary text-white rounded-none resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-black transition-all duration-300 py-6 text-lg font-bold rounded-none"
                >
                  {form.formState.isSubmitting ? "TRANSMITTING..." : "SEND_TRANSMISSION"}
                </Button>
              </form>
            </Form>
          </Card>
          
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>Designed & Built by Serafim Lupan;</p>
            <p>Copyright (c) 2022-2026 Lupan Serafim (<a href="https://serafimlupan.com">serafimlupan.com</a>)</p>
            <p className="mt-2 font-mono text-xs opacity-50">System.Version: 1.1.4</p>
          </div>
        </div>
      </section>
    </div>
  );
}
