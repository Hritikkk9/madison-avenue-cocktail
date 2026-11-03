import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-main">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
