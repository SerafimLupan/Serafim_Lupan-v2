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

// Mock data (În mod normal aici ai face un fetch sau ai importa din fișiere)
const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Infiltrating the Mainframe",
    date: "2026-02-10",
    summary: "A deep dive into modern buffer overflow protection bypasses.",
    content: "# Tutorial \n\n Acest text este scris în **Markdown**. Poți edita conținutul aici."
  },
  {
    id: "2",
    title: "The Silent Watcher: AI in SecOps",
    date: "2026-01-25",
    summary: "How machine learning models are detecting anomalies faster than humans.",
    content: "Content for post 2..."
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
