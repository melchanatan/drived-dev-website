import FolderCanvas from "@/components/FolderCanvas";
import Footer from "@/components/common/Footer";
import HeroHeader from "@/components/Home/HeroHeader";
import HeroParagraph from "@/components/Home/HeroParagraph";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-background overflow-hidden">
        <FolderCanvas />

        <HeroHeader />
        <HeroParagraph />
      </main>
    </>
  );
}
