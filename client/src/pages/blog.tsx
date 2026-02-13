import { Navbar } from "@/components/Navbar";
import { MatrixBackground } from "@/components/MatrixBackground";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { GlitchText } from "@/components/GlitchText";
import { motion } from "framer-motion";
import { Calendar, BookOpen, ChevronLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Tip pentru postările noastre
interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "My progress in CYBERSECURITY",
    date: "2026-02-12 12:10 PM",
    summary: "What is going on with my CYBERSECURITY learning journey?",
    content: `
      ## My Progress
      Well, yesterday, February 12th, for the preparation of **UNbreakable in Bootcamp**
    
    `
    
  },
  {
    id: "2",
    title: "My progress in CYBERSECURITY",
    date: "2026-02-12 12:10 PM",
    summary: "What is going on with my CYBERSECURITY learning journey?",
    content: "## My Progress \n\n Well, yesterday, February 11th, for the preparation of **UNbreakable in Bootcamp**, I started some courses, the first course I started was **\"Introduction to Cybersecurity\"** where I only completed Module 2. Are you wondering, why one Module in one day? In fact, I took the Module around 8:00 PM, after finishing my college classes at 7:30 PM and I finished around 12:00 AM. \n\n ## What did I learn in the first module? \n\n I learned things that I actually knew, but I didn't know them as deeply as it was explained in the course. There were many sections, such as: \n * Why is cybersecurity relevant to you? \n * What will you learn in this course? \n * What you will NOT learn in this course \n * Glossary of essential terms \n\n ## Then some terms that we absolutely need to know \n\n ### Fundamental security terms: \n * **Vulnerability** - A weakness or flaw in a system, application, or process that can be exploited by attackers to gain unauthorized access or cause damage. \n * **Exploit** - A code, script, or technique that uses a vulnerability to gain unauthorized access, steal data, or cause damage to a system. \n * **Malware** - Malicious software (virus, trojan, ransomware, spyware, etc.) designed to harm, steal information, or gain unauthorized access to systems.\n * **Penetration Testing (Pentesting)** - Authorized and legal testing of the security of a system to identify vulnerabilities before real attackers discover them. \n * **Firewall** - A security system that monitors and controls network traffic (incoming and outgoing) based on predefined security rules. \n * **Encryption** - The process of transforming data into an encoded format that cannot be read without a decryption key, protecting the confidentiality of information. \n * **Hash** - A mathematical function that transforms data of any size into a fixed-length string of characters (e.g. MD5, SHA-256), used to verify data integrity. \n * **Zero-day** - A vulnerability unknown to the public or the software manufacturer, which has no patch available, making it extremely dangerous. \n * **Patch** - A software update that corrects a vulnerability or improves the security of a system. \n\n ### Terms about attacks and threats: \n * **Phishing** - A social engineering attack where attackers send fake emails, messages, or links that appear legitimate in order to steal credentials or install malware. \n * **Ransomware** - A type of malware that encrypts a victim's files and demands a sum of money (ransom) to decrypt them. \n * **DDoS (Distributed Denial of Service)** - An attack that overloads a server or network with excessive traffic, making it inaccessible to legitimate users. \n * **Brute-force attack** - An attack method that tries all possible password combinations until it finds the correct one, using automation. \n * **Keylogger** - Malicious software that records every keystroke on the keyboard, used to steal passwords and sensitive information. \n * **Social Engineering** - The psychological manipulation of people to obtain confidential information or cause victims to perform actions that compromise security. \n\n ### Defense and Protection Terms: \n * **Antivirus** - Software that detects, prevents, and removes malware from a system. \n * **SIEM (Security Information and Event Management)** - System that collects, analyzes, and reports security events across the entire IT infrastructure. \n * **IDS/IPS** - Intrusion Detection System (detects attacks) and Intrusion Prevention System (detects and blocks attacks) - systems that monitor the network for suspicious activity. \n * **2FA/MFA** - Two-Factor Authentication / Multi-Factor Authentication - authentication that requires two or more verification methods (password + SMS code, e.g.). \n * **VPN (Virtual Private Network)** - An encrypted connection that creates a secure \"tunnel\" for internet traffic, protecting data and hiding the IP address. \n\n ### Competition and Learning Terms: \n * **CTF (Capture The Flag)** - Cybersecurity competitions where participants solve practical challenges to find \"flags\" (secret codes), learning by doing. \n * **Flag** - In the context of CTFs, a secret code (usually in the format CTF{...} or flag{...}) that represents the solution to a challenge. \n * **Write-up** - Written documentation explaining how a CTF challenge or vulnerability was solved, used for learning and sharing knowledge. \n * **Bug Bounty** - Programs where companies offer financial rewards for finding and reporting vulnerabilities in their applications. \n\n ### Intelligence and Research Terms: \n * **OSINT (Open Source Intelligence)** - The collection and analysis of information from publicly available sources (websites, social media, public databases) for security purposes. \n * **Reconnaissance** - The reconnaissance phase in which attackers gather information about a target before launching an attack. \n * **Footprinting** - The process of gathering information about an organization or system to identify potential entry points. \n\n ### Modern terms (2025): \n * **Deepfake** - Video, audio, or images created with artificial intelligence that look extremely realistic, often used for manipulation or disinformation. \n * **AI Security** - The field that deals with the security of artificial intelligence systems and the use of AI for defense or cyberattacks. \n * **Adversarial AI** - Attacks against AI systems that exploit vulnerabilities in machine learning models. \n * **Disinformation** - False or misleading information intentionally distributed to manipulate opinions, create panic, or influence decisions. \n * **Cloud Security** - The security of data, applications, and infrastructure stored or run in the cloud (AWS, Azure, Google Cloud, etc.). \n\n ### Terms about teams and roles: \n * **Red Team** - The team that simulates attackers to test the security of a system (penetration testers, ethical hackers). \n * **Blue Team** - The defense team that protects the organization, monitors threats, and responds to incidents (security analysts, SOC operators). \n * **Purple Team** - The hybrid team that combines attack (Red) and defense (Blue) to improve overall security. \n * **White Hat Hacker** - Ethical hacker who finds vulnerabilities with permission and reports them for correction. \n * **Black Hat Hacker** - Malicious hacker who exploits vulnerabilities for personal or malicious gain. \n\n And finally a quiz to check if we learned anything."
  },
  {
    id: "3",
    title: "How I learn CYBERSECURTY",
    date: "2026-02-11 8:25 PM",
    summary: "How, when and where I learnd CYBERSECURTY?",
    content: "## When did I start learning CYBERSECURITY? \n\n Well, I started learning the field of Cyber Security at the end of 2023. \n\n ## Where did I learn and where am I learning now? \n\n There are many platforms and sources where I learned, such as: \n * [TryHackMe](https://tryhackme.com) \n * [CyberEdu](https://cyber-edu.co) \n * [HackTheBox](https://hackthebox.com) \n * [HackerRank](https://www.hackerrank.com) \n\n ## Where am I currently studying and what am I learning? \n\n I am currently participating in [UNbreakable Romania Bootcamp - 2026 Edition](https://app.cyber-edu.co/competition/unr26-bootcamp?tenant=unbreakable) and [UNbreakable Romania Teams - 2026 Edition](https://app.cyber-edu.co/competition/unr26-echipe?tenant=unbreakable). I am participating because I want to gain experience and develop in the field. \n\n ## Where would I like to participate in the future? \n\n In the future I want to participate in the **County Cybersecurity Olympiad** and **ROCSC 2026 - Qualification**"
  },
  {
    id: "4",
    title: "My progress in CYBERSECURITY",
    date: "2026-02-11 11:25 PM",
    summary: "What is going on with my CYBERSECURITY learning journey?",
    content: "## My Progress \n\n Well, is fun. Today I implemnted the **blog section** to be able to note my progress on the path to learning and progressing in **CYBERSECURITY**"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono overflow-x-hidden selection:bg-primary selection:text-black">
      <MatrixBackground />
      <Navbar />

      <main className="pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {!selectedPost ? (
            // Lista de postări
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <SectionHeading title="ENCRYPTED_LOGS" align="left" />
              <div className="grid gap-6 mt-12">
                {BLOG_POSTS.map((post, idx) => (
                  <Card 
                    key={post.id} 
                    delay={idx * 0.1}
                    className="cursor-pointer group border-primary/20 hover:border-primary/60 transition-all"
                  >
                    <div onClick={() => setSelectedPost(post)}>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-primary text-xs flex items-center gap-2">
                          <Calendar className="h-3 w-3" /> {post.date}
                        </span>
                        <BookOpen className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400">{post.summary}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          ) : (
            // Vizualizare postare individuală
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/40 backdrop-blur-md p-8 border border-primary/20"
            >
              <Button 
                variant="ghost" 
                onClick={() => setSelectedPost(null)}
                className="mb-8 text-primary hover:text-white hover:bg-primary/10 p-0"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> RETURN_TO_FILES
              </Button>

              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                  <GlitchText text={selectedPost.title} />
                </h1>
                <div className="text-primary text-sm font-bold border-b border-primary/20 pb-4">
                  TIMESTAMP: {selectedPost.date}
                </div>
              </div>

              <div className="prose prose-invert prose-primary max-w-none 
                prose-headings:text-primary prose-strong:text-white prose-code:text-primary-foreground prose-code:bg-primary/20 prose-code:px-1">
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </div>
            </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}
