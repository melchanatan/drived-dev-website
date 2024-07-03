import FolderCanvas from "@/components/FolderCanvas";
import Footer from "@/components/common/Footer";
import HeroHeader from "@/components/Home/HeroHeader";
import HeroParagraph from "@/components/Home/HeroParagraph";

export default function Home() {
  return (
    <>
      <main className="w-full h-[calc(100vh-60px)] bg-background overflow-hidden relative">
        <FolderCanvas />
        <HeroHeader />
        <HeroParagraph />
      </main>
    </>
  );
}
