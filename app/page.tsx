import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import Offering from "@/components/Offering";
import ScrollImage from "@/components/ScrollImage";
import WinityExperiences from "@/components/WinityExperiences";
import WinityJoinSection from "@/components/WinityJoinSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden relative ">
      <Hero />
      <ScrollImage />
      <CTASection />
      <CardGrid />
      <Offering />
      <WinityExperiences/>
      <WinityJoinSection/>
    </main>
  );
}
