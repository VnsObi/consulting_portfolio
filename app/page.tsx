import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import Contribute from "@/components/Contribute";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 4);

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
        <Insights posts={recentPosts} />
      </main>
      <Footer />
    </div>
  );
}
