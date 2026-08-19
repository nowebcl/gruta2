import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { EditorialBreak } from './components/EditorialBreak';
import { StudioSection } from './components/StudioSection';
import { ApproachSection } from './components/ApproachSection';
import { ReviewsSection } from './components/ReviewsSection';
import { JournalSection } from './components/JournalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Project, JournalArticle } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-red-600 selection:text-white font-sans antialiased">
      {/* Scroll indicator */}
      <ScrollProgressBar />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <Hero />

        {/* Selected Projects Grid */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Editorial Pull Quote Break */}
        <EditorialBreak />

        {/* Studio / Nosotros */}
        <StudioSection />

        {/* Servicios / ¿Por Qué Elegirnos? */}
        <ApproachSection />

        {/* Real Customer Reviews */}
        <ReviewsSection />

        {/* Journal & Technical Articles */}
        <JournalSection onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* Contact & Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
};

export default App;
