import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
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
        <ValueProp />
        <CaseStudies />
        <Services />
        <Insights posts={recentPosts} />
      </main>
      <Footer />
    </div>
  );
}
