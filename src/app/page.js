import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-background">
      <img src="/folder-image.avif" alt="folder image" />

      <div className="absolute left-4 flex flex-col gap-2 [&>*]:flex [&>*]:gap-3 [&>*]:items-center">
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
    </main>
  );
}
