import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-bgDARK">
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}

