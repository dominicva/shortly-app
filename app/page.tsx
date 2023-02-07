import Header from '@/components/Header';
import Hero from '@/components/Hero';
import UrlForm from '@/components/UrlForm';

export default function Home() {
  return (
    <main className="bg-ghost-white px-6 py-10">
      <Header />
      <Hero />
      <UrlForm />
    </main>
  );
}
