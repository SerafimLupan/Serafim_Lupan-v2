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
    id: "6",
    title: "Cheat Sheets for CTFs",
    date: "2026-02-21 1:40 PM",
    summary: "Some cheat sheets for CTFs",
    content: `
Capturing the Flag (CTF) is as much about having the right commands at your fingertips as it is about problem-solving. Since you can't memorize everything, a good "cheat sheet" is really a collection of specialized lists.

\n\n --- \n\n

A useful list of resources:
  * **[volatility](https://github.com/volatilityfoundation/volatility)**
  * **[Web-CTF-Cheatsheet](https://github.com/w181496/Web-CTF-Cheatsheet)**
  * **[XSS-LOADER](https://github.com/capture0x/XSS-LOADER)**
  * **[reverse-engineering](https://github.com/wtsxDev/reverse-engineering)**
  * **[CTF-Katana](https://github.com/JohnHammond/ctf-katana)**
  * **[PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)**
  * **[CTF-CheatSheet](https://github.com/RajChowdhury240/CTF-CheatSheet)**
  * **[HackTricks](https://book.hacktricks.wiki/en/index.html)**
  * **[GTFOBins](https://gtfobins.org/)**
  `
  },
  {
    id: "5",
    title: "Top 10 tool from Kali Linux for CTFs ",
    date: "2026-02-19 2:25 PM",
    summary: "A presentation of top 10 tool from Kali Linux for CTFs",
    content: `
In the world of Capture The Flag (CTF) competitions, your speed and familiarity with your toolkit are just as important as your technical knowledge. Kali Linux comes pre-loaded with hundreds of tools, but these 10 are the \"bread and butter\" for solving challenges across most categories.

 \n\n --- \n\n

### 1. Nmap (Network Mapper) \n\n
The undisputed king of **Reconnaissance**. In \"Boot-to-Root\" or network-based CTFs, Nmap is almost always your first step. It helps you discover open ports, services, and OS versions.

  * **CTF Pro Tip:** Use the \`-sC -sV\` flags to run default scripts and version detection simultaneously. \n\n

### 2. Burp Suite \n\n
The go-to tool for **Web Exploitation**. It acts as a proxy between your browser and the target server, allowing you to intercept, modify, and replay HTTP requests. 

  * **Key Feature:** The **Repeater** module is essential for manually testing payloads on a specific web form or header. \n\n

### 3. Ghidra / Radare2 \n\n
Essential for **Reverse Engineering (RE)**. Ghidra (developed by the NSA) provides a powerful decompiler that turns complex binary code back into human-readable C-like code. If you prefer the command line, **Radare2** is its lightweight, high-speed rival.

### 4. Pwntools \n\n
A Python library specifically designed for **Binary Exploitation (Pwn)**. It automates the \"boring\" parts of exploit development, like converting integers to little-endian strings or managing remote socket connections. 
  * **Best For:** Creating rapid scripts to send overflow payloads to a vulnerable service. 
    
\n\n  ### 5. Wireshark \n\n
The gold standard for **Network Forensics**. Many CTFs give you a \`.pcap\` file and ask you to find a hidden flag within the traffic. Wireshark allows you to filter and inspect every packet to see what was communicated. \n\n

### 6. John the Ripper / Hashcat \n\n
The heavy hitters for **Password Cracking**. When you find a hash (MD5, SHA256, etc.) in a database or a \`/etc/shadow file\`, these tools use wordlists like \`rockyou.txt\` to brute-force the plaintext password. 

   * **Distinction:** Use Hashcat if you have a powerful GPU; use John for quick CPU-based cracking. \n\n

### 7. SQLmap \n\n
An automated tool for **Database Exploitation**. If you find a potential SQL injection point, SQLmap can automatically dump the entire database, find the \"users\" table, and extract the flag for you. \n\n

### 8. Binwalk / ExifTool \n\n
The primary tools for **Forensics and Steganography**. 

  * **Binwalk:** Scans files (like images) for hidden embedded files (like a secret ZIP or another image). 
  * **ExifTool:** Reads the metadata of a file, where flags are often hidden in the \"Comment\" or \"Author\" fields. \n\n

### 9. Metasploit Framework (MSF) \n\n
The \"Swiss Army Knife\" of **Exploitation**. While some CTFs discourage its use (to test your manual skills), Metasploit is invaluable for quickly launching known exploits or generating reverse shell payloads using \`msfvenom\`. \n\n

### 10. CyberChef \n\n
Technically a web-based utility (but pre-installed/bookmarked in Kali), CyberChef is the \"Cyber Swiss Army Knife.\" It is perfect for **Cryptography** and **Encoding challenges**. 

  * **Common Use:** Decoding nested Base64 strings, XORing data, or converting Hex to string in seconds. 
  `
  },
  {
    id: "4",
    title: "My progress in CYBERSECURITY",
    date: "2026-02-13 1:30 PM",
    summary: "What is going on with my CYBERSECURITY learning journey?",
    content: `
## My Progress
Well, yesterday, February 12th, for the preparation of **UNbreakable in Bootcamp** I continued the course I started on February 11th. I finished Modules 3, 4, 5 and 6, all in one evening from 9 PM to around 12 AM. Modules 3 and 4 were from the **\"Threats\"** category, and 5 and 6 from the **\"Career\"** category. It was very informative, I did a speedrun, the fact that I didn't write it down in a notebook saved me some time, I mean if you still have and write down the terms, some information, well the same situation was repeated as with Module 2 that I had learned in one evening, because I had written down the terms in my notebook, and rightly so because Module 2 had many terms and their definitions.\n\n
 --- \n\n ### Module 3 Social Engineering Attacks and Techniques \n\n Terms such as: \n * **What are social engineering attacks and techniques?** - Social engineering is the term used to summarize all malicious activities carried out through human interactions. Social engineering techniques are built on the basis of psychological manipulation methods and applied by attackers or malicious employees with the aim of obtaining unauthorized access, critical data or executing illicit money transfers. \n * **What are the steps in a social engineering attack?** \n * **Social engineering attack techniques** \n * **Baiting** - Baiting attacks use a false promise to pique the victim's greed or curiosity. This technique aims to lure users into a trap that steals their personal information or infects their operating systems with malware. \n * **Scareware** - This type of attack involves bombarding victims with false alarms and fictitious threats. Users are tricked into believing that their system is infected with malware, leading them to install software that has no real benefit, software that is malware in itself. \n * **Pretexting** - This attack involves obtaining information through a series of clever lies. \n * **Phishing** - This type of attack is one of the most popular social engineering techniques, which represents a great risk for small and large companies, therefore training employees in this direction is a vital step. \n * **Spear phishing** - This type of attack is very similar in execution to phishing attack techniques, the difference between them is that spear phishing involves an additional step, namely obtaining information about the potential victim, which can be a system, individual, company, etc., using technologies and tools such as: OSINT, Shodan, Frida, etc. \n * **Methods for preventing social engineering attacks** - Social engineers manipulate human feelings, such as curiosity or fear, to carry out attack schemes and lure victims into their traps, therefore, be careful whenever you feel alarmed by an email, attracted by an offer displayed on a website, etc.
\n\n --- \n\n ### Module 4 Modern Threats: Gaming, Disinformation, and Deepfakes \n\n Terms like:
* **Why are these threats important to you?** - For starters, as a student or college student, you probably spend a lot of time online: playing games, using social media, watching news and video content. It is essential to understand the modern threats that can directly affect you.
* **1. Threats in gaming**:
  * Account hijacking
  * Cheating and malware in games
  * Scams in item trading
* **2. Online disinformation and manipulation** - Disinformation is not just about fake news - it is a cyber weapon used to manipulate opinions, influence elections, create panic, or destroy reputations. Understanding this phenomenon is part of cybersecurity:
  * What is disinformation?
  * Disinformation techniques
  * How to identify disinformation?
* **3. Deepfakes: Reality in Danger** - Deepfakes are videos or images created with artificial intelligence that look extremely realistic. The technology has become so advanced that it is almost impossible to distinguish a deepfake from a real video without specialized tools:
  * What are deepfakes?
  * Risks and malicious uses
  * How to identify deepfakes?
* **Protection and responsibility**:
  * **Why will these threats increase in the future?**
  * **More accessible AI** - The technology is becoming cheaper and easier to use
  * **New platforms** - Every new platform (metaverse, VR, etc.) brings new vulnerabilities
  * **Growing gaming ecosystem** - As gaming grows, the more attractive it becomes for attackers
  * **Information warfare** - Nation states use disinformation as a weapon
  
---

\n\n ### Module 5 Career Paths and Specializations in Cybersecurity \n\n Terms like:
* **Why are there so many options?** - For Beginners Cybersecurity is a vast field with many different niches. You don't have to know everything - in fact, specialization is often more valuable than general knowledge. Find your passion and build expertise there!
* **Main Career Categories**: 

    > **1. Red Team (Ethical Attackers / Penetration Testing)**: 
    >> What they do: Simulate attacks to test system security 
    >> 
    >> * **Penetration Tester** - Tests the security of applications, networks, systems 
    >> * **Ethical Hacker** - Finds vulnerabilities legally and ethically 
    >> * **Bug Bounty Hunter** - Searches for vulnerabilities for financial rewards 
    >> * **Red Team Operator** - Be part of a team that simulates real attackers \n\n 
    >> 
    >> Skills needed: Programming, networking, operating systems, creativity, lateral thinking \n\n
    >> 
    >> Average salary (Romania): 5,000-15,000 RON/month (junior-mid), 15,000-30,000+ RON/month (senior) \n\n
    >> 
    >> Perfect for: People who love puzzles, creative thinking, and want to "break" things (legally!)  \n\n

    > **2. Blue Team (Defenders / Security Operations)** 
    >> 
    >> What they do: Protect organizations from attacks, monitor and respond to incidents 
    >> 
    >> * **Security Analyst** - Monitors systems for threats, analyzes alerts 
    >> * **SOC Analyst** - Works in the Security Operations Center, the first line of defense 
    >> * **Incident Response Specialist** - Responds to active cyber attacks 
    >> * **Threat Hunter** - Actively searches for hidden threats in systems 
    >> * **Security Engineer** - Builds and maintains security systems \n\n 
    >> 
    >> Skills needed: Networking, operating systems, log analysis, SIEM tools, patience 
    >> 
    >> Average salary (Romania): 5,000-15,000 RON/month (junior), 15,000-30,000+ RON/month (senior) 
    >> 
    >> Perfect for: Organized, detail-oriented people who want to protect and help \n\n

    > **3. Purple Team (Hybrid)**
    >>
    >>What they do: Combine attack and defense to improve security
    >>
    >> * **Security Consultant** - Provides strategic security consulting
    >> * **Security Architect** - Designs security architectures
    >> * **DevSecOps Engineer** - Integrates security into the development process \n\n
    >>
    >> Perfect for: People who understand both attack and defense and want to build solutions \n\n
    
    > **4. Technical Specializations**
    >> * **Web Application Security** \n\n
    >>> - Web Vulnerability Expertise (OWASP Top 10)
    >>> - Web Application Security Testing
    >>> - Perfect if you love web programming \n\n
    
    >> * **Mobile Security** \n\n
    >>> - Mobile Application Security (iOS, Android)
    >>> - Mobile Malware Analysis
    >>> - Perfect if you're passionate about mobile \n\n
    
    >> * **Cloud Security** \n\n
    >>> - Cloud Infrastructure Security (AWS, Azure, GCP)
    >>> - Highly sought after in the future - the cloud is growing rapidly
    >>> - Perfect for the future - everything is moving to the cloud \n\n
    
    >> * **Cryptography** \n\n
    >>> - Cryptographic Algorithm Development and Analysis
    >>> - Highly technical, requires advanced mathematics
    >>> - Perfect if you love math and complex puzzles \n\n
    
    >> * **Reverse Engineering & Malware Analysis** \n\n
    >>> - Analyze malware to understand how it works
    >>> - Malicious code disassembly and debugging
    >>> - Perfect if you're passionate about low-level programming \n\n
    
    >> * **Digital Forensics** \n\n
    >>> - Digital investigations, evidence analysis
    >>> - Work with the police or private companies
    >>> - Perfect if you like solving mysteries and finding evidence \n\n
    
    >> * **IoT Security** \n\n
    >>> - Security of IoT devices (smart home, wearables, etc.)
    >>> - Fast growing field
    >>> - Perfect if you are passionate about hardware and embedded systems \n\n

    > **5. Non-Technical Careers (But Still Important!)** \n\n
    >> * **Security Awareness & Training** \n\n
    >>> - Educate people about security
    >>> - Develop training programs
    >>> - Perfect if you like teaching and communicating \n\n
    
    >> * **Compliance & Risk Management** \n\n 
    >>> - Ensure compliance with regulations (GDPR, etc.)
    >>> - Assess security risks
    >>> - Perfect if you are organized and like working with processes \n\n
    
    >> * **Security Sales & Business Development** \n\n
    >>> - Sell security solutions
    >>> - Build customer relationships
    >>> - Perfect if you are sociable and like business \n\n
    
* **Emerging Niches in the Future**

    * AI Security Specialist
    * Quantum Security Researcher
    * Supply Chain Security
    
* **How ​​to Choose Your Path?**

    * Thinking Questions
    * Exploration Strategy
    
* **Career Development: From Beginner to Expert**

    > **Typical Levels** \n\n
    >>
    >> - Junior (0-2 years) - Learn, work under supervision, solve simple problems
    >> - Mid-level (2-5 years) - Work independently, solve complex problems, maintain systems
    >> - Senior (5-10 years) - Design solutions, maintain teams, work on strategic problems
    >> - Expert/Principal (10+ years) - Set technical direction, research, innovate \n\n
    
    > **Useful (but not mandatory!) Certifications** \n\n
    >>
    >> - For beginners: CompTIA Security+, CEH (Certified Ethical Hacker)
    >> - For intermediates: OSCP (Offensive Security), CISSP, GSEC
    >> - For advanced: OSCE, GSE, SANS certifications
    >> - Important note: Certifications help, but practical experience and portfolio are more important! \n\n

* **Opportunities in Romania vs International**

    > **Romanian market** \n\n
    >> - Fast growing market
    >> - Many international companies have teams in Romania
    >> - Competitive salaries for the regional level
    >> - Remote work opportunities for international companies \n\n

    > **International opportunities** \n\n
    >> - Higher salaries in the USA, Switzerland, UK
    >> - More specialization opportunities
    >> - Possibility of relocation or remote work
    >> - Valuable experience for your CV \n\n

* **The future of security careers** - Cybersecurity is one of the safest career fields. The demand for specialists is growing faster than the supply, and technology will continue to evolve, constantly creating new needs.

---

\n\n ### Module 6 Developing a Business or Startup in Cybersecurity \n\n Terms like:
* **What is a Startup?** - A startup is a company, partnership, or temporary organization that exists to seek a replicable and scalable business model. An important characteristic that differentiates a startup from a company at the beginning of its journey is the potential for exponential growth, which is why, generally, when we hear the term startup, we think of a company that develops technology.
* **What are the development stages that a startup goes through?**
    - 1 Finding the idea
    - 2 Forming the team
    - 3 Market testing
    - 4 Creating a prototype
    - 5 Developing the business model
    - 6 **Developing the marketing strategy** - The marketing strategy describes the way in which the startup aims to sustainably develop its competitive advantage over the long term, by understanding and serving customer needs.
    - 7 **Attracting funding** - In order to test product and business hypotheses more quickly, to grow faster, and to develop a valuable team more quickly, startups may choose to attract external funding.
    - 8 **Scaling** - After a startup reaches the point of product-market fit (proving that it is developing a valuable product that is bought by a large enough category of people or companies so that the company can be profitable) it is time for the team to focus on scaling the business.
    - 9 Exit strategy
    `    
  },
  {
    id: "3",
    title: "My progress in CYBERSECURITY",
    date: "2026-02-12 12:10 PM",
    summary: "What is going on with my CYBERSECURITY learning journey?",
    content: "## My Progress \n\n Well, yesterday, February 11th, for the preparation of **UNbreakable in Bootcamp**, I started some courses, the first course I started was **\"Introduction to Cybersecurity\"** where I only completed Module 2. Are you wondering, why one Module in one day? In fact, I took the Module around 8:00 PM, after finishing my college classes at 7:30 PM and I finished around 12:00 AM. \n\n --- \n\n ## What did I learn in the first module? \n\n I learned things that I actually knew, but I didn't know them as deeply as it was explained in the course. There were many sections, such as: \n * Why is cybersecurity relevant to you? \n * What will you learn in this course? \n * What you will NOT learn in this course \n * Glossary of essential terms \n\n --- \n\n ## Then some terms that we absolutely need to know \n\n ### Fundamental security terms: \n * **Vulnerability** - A weakness or flaw in a system, application, or process that can be exploited by attackers to gain unauthorized access or cause damage. \n * **Exploit** - A code, script, or technique that uses a vulnerability to gain unauthorized access, steal data, or cause damage to a system. \n * **Malware** - Malicious software (virus, trojan, ransomware, spyware, etc.) designed to harm, steal information, or gain unauthorized access to systems.\n * **Penetration Testing (Pentesting)** - Authorized and legal testing of the security of a system to identify vulnerabilities before real attackers discover them. \n * **Firewall** - A security system that monitors and controls network traffic (incoming and outgoing) based on predefined security rules. \n * **Encryption** - The process of transforming data into an encoded format that cannot be read without a decryption key, protecting the confidentiality of information. \n * **Hash** - A mathematical function that transforms data of any size into a fixed-length string of characters (e.g. MD5, SHA-256), used to verify data integrity. \n * **Zero-day** - A vulnerability unknown to the public or the software manufacturer, which has no patch available, making it extremely dangerous. \n * **Patch** - A software update that corrects a vulnerability or improves the security of a system. \n\n ### Terms about attacks and threats: \n * **Phishing** - A social engineering attack where attackers send fake emails, messages, or links that appear legitimate in order to steal credentials or install malware. \n * **Ransomware** - A type of malware that encrypts a victim's files and demands a sum of money (ransom) to decrypt them. \n * **DDoS (Distributed Denial of Service)** - An attack that overloads a server or network with excessive traffic, making it inaccessible to legitimate users. \n * **Brute-force attack** - An attack method that tries all possible password combinations until it finds the correct one, using automation. \n * **Keylogger** - Malicious software that records every keystroke on the keyboard, used to steal passwords and sensitive information. \n * **Social Engineering** - The psychological manipulation of people to obtain confidential information or cause victims to perform actions that compromise security. \n\n ### Defense and Protection Terms: \n * **Antivirus** - Software that detects, prevents, and removes malware from a system. \n * **SIEM (Security Information and Event Management)** - System that collects, analyzes, and reports security events across the entire IT infrastructure. \n * **IDS/IPS** - Intrusion Detection System (detects attacks) and Intrusion Prevention System (detects and blocks attacks) - systems that monitor the network for suspicious activity. \n * **2FA/MFA** - Two-Factor Authentication / Multi-Factor Authentication - authentication that requires two or more verification methods (password + SMS code, e.g.). \n * **VPN (Virtual Private Network)** - An encrypted connection that creates a secure \"tunnel\" for internet traffic, protecting data and hiding the IP address. \n\n ### Competition and Learning Terms: \n * **CTF (Capture The Flag)** - Cybersecurity competitions where participants solve practical challenges to find \"flags\" (secret codes), learning by doing. \n * **Flag** - In the context of CTFs, a secret code (usually in the format CTF{...} or flag{...}) that represents the solution to a challenge. \n * **Write-up** - Written documentation explaining how a CTF challenge or vulnerability was solved, used for learning and sharing knowledge. \n * **Bug Bounty** - Programs where companies offer financial rewards for finding and reporting vulnerabilities in their applications. \n\n ### Intelligence and Research Terms: \n * **OSINT (Open Source Intelligence)** - The collection and analysis of information from publicly available sources (websites, social media, public databases) for security purposes. \n * **Reconnaissance** - The reconnaissance phase in which attackers gather information about a target before launching an attack. \n * **Footprinting** - The process of gathering information about an organization or system to identify potential entry points. \n\n ### Modern terms (2025): \n * **Deepfake** - Video, audio, or images created with artificial intelligence that look extremely realistic, often used for manipulation or disinformation. \n * **AI Security** - The field that deals with the security of artificial intelligence systems and the use of AI for defense or cyberattacks. \n * **Adversarial AI** - Attacks against AI systems that exploit vulnerabilities in machine learning models. \n * **Disinformation** - False or misleading information intentionally distributed to manipulate opinions, create panic, or influence decisions. \n * **Cloud Security** - The security of data, applications, and infrastructure stored or run in the cloud (AWS, Azure, Google Cloud, etc.). \n\n ### Terms about teams and roles: \n * **Red Team** - The team that simulates attackers to test the security of a system (penetration testers, ethical hackers). \n * **Blue Team** - The defense team that protects the organization, monitors threats, and responds to incidents (security analysts, SOC operators). \n * **Purple Team** - The hybrid team that combines attack (Red) and defense (Blue) to improve overall security. \n * **White Hat Hacker** - Ethical hacker who finds vulnerabilities with permission and reports them for correction. \n * **Black Hat Hacker** - Malicious hacker who exploits vulnerabilities for personal or malicious gain. \n\n And finally a quiz to check if we learned anything."
  },
  {
    id: "2",
    title: "How I learn CYBERSECURTY",
    date: "2026-02-11 8:25 PM",
    summary: "How, when and where I learnd CYBERSECURTY?",
    content: "## When did I start learning CYBERSECURITY? \n\n Well, I started learning the field of Cyber Security at the end of 2023. \n\n --- \n\n ## Where did I learn and where am I learning now? \n\n There are many platforms and sources where I learned, such as: \n * [TryHackMe](https://tryhackme.com) \n * [CyberEdu](https://cyber-edu.co) \n * [HackTheBox](https://hackthebox.com) \n * [HackerRank](https://www.hackerrank.com) \n * [Burp Suite Web Security Academy](https://portswigger.net/web-security) \n\n ## Where am I currently studying and what am I learning? \n\n I am currently participating in [UNbreakable Romania Bootcamp - 2026 Edition](https://app.cyber-edu.co/competition/unr26-bootcamp?tenant=unbreakable) and [UNbreakable Romania Teams - 2026 Edition](https://app.cyber-edu.co/competition/unr26-echipe?tenant=unbreakable). I am participating because I want to gain experience and develop in the field. \n\n ## Where would I like to participate in the future? \n\n In the future I want to participate in the **County Cybersecurity Olympiad** and **ROCSC 2026 - Qualification**"
  },
  {
    id: "1",
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
                                  prose-headings:text-primary 
                                  prose-strong:text-white 
                                  prose-code:text-primary-foreground 
                                  prose-code:bg-primary/20 
                                  prose-code:px-1
                                  prose-blockquote:border-l-0 
                                  prose-blockquote:pl-10 
                                  prose-blockquote:italic
                                  prose-blockquote:text-gray-400">
                    <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                  </div>
          </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}
