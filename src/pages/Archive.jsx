import { Link } from 'react-router-dom';
import { Archive as ArchiveIcon, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import Nav from '@/components/Nav';
import Footer from '@/components/sections/Footer';
import CrisisSection from '@/components/sections/CrisisSection';
import CrisisNews from '@/components/sections/CrisisNews';

export default function Archive() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted px-6">
        <div className="text-center max-w-md">
          <h1 className="font-playfair text-3xl font-bold text-foreground mb-3">Access restricted</h1>
          <p className="font-inter text-sm text-muted-foreground mb-6">
            This page is reserved for site administrators.
          </p>
          <Link to="/" className="font-inter text-sm text-teal hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-inter">
      <Nav />
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ArchiveIcon className="w-4 h-4 text-amber-700 shrink-0" />
            <p className="font-inter text-xs text-amber-800">
              <span className="font-semibold">Archive:</span> Discontinued section preserved for reference.
            </p>
          </div>
          <Link to="/" className="flex items-center gap-1.5 font-inter text-xs font-medium text-amber-800 hover:text-amber-900 transition-colors whitespace-nowrap">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to live site
          </Link>
        </div>
      </div>
      <CrisisSection />
      <section id="crisis-headlines" className="bg-white pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <CrisisNews />
        </div>
      </section>
      <Footer />
    </div>
  );
}