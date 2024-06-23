import FolderCanvas from "@/components/FolderCanvas";
import Footer from "@/components/common/Footer";
export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-background">
        <FolderCanvas />
        <div className="flex items-center justify-center ">
          <div className="absolute left-page bottom-page flex flex-col gap-2 [&>*]:flex [&>*]:gap-3 [&>*]:items-center z-20">
            <span>
              <h1 className="hero-header__sub">Your</h1>
              <h1 className="hero-header highlight">path:// </h1>
            </span>
            <span>
              <h1 className="hero-header highlight">to something</h1>
            </span>
            <span>
              <h1 className="hero-header__sub">digitally</h1>
              <h1 className="hero-header highlight">special</h1>
            </span>
          </div>
        </div>
        <p className="absolute right-page bottom-page text-primary w-[35ch] text-right text-md  font-raster">
          {" "}
          We strive to be your trusted technology partner. We turn your ideas
          into reality with boundless creativity and expertise. Enjoy peace of
          mind knowing you're getting fair pricing and exceptional service.
        </p>
      </main>
    </>
  );
}
