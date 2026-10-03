import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import Contribute from "@/components/Contribute";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getInsights } from "@/lib/insights";

// Picks up newly published Insights within five minutes.
export const revalidate = 300;

export default async function Home() {
  const recentInsights = (await getInsights()).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Capabilities />
        <Contribute />
        <Insights cards={recentInsights} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
