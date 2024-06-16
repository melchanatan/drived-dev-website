import MyCanvas from "@/components/Folder3d";

export default function Home() {
  return (
    <main className="w-full h-screen bg-background">
      <MyCanvas />
      <div className="flex items-center justify-center ">
        <div className="absolute left-page bottom-page flex flex-col gap-2 [&>*]:flex [&>*]:gap-3 [&>*]:items-center">
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
      <h1> hello</h1>
    </main>
  );
}
