import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14]">
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}