import IPDisplay from "@/components/IPDisplay";
import GeoDetails from "@/components/GeoDetails";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12" style={{ background: "var(--color-black)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1
            className="text-4xl font-bold tracking-tight mb-3"
            style={{ color: "var(--color-white)" }}
          >
            IP<span style={{ color: "var(--color-red)" }}>-Insight</span>
          </h1>
          <p className="text-lg" style={{ color: "var(--color-stone)" }}>
            Discover your public IP address and network identity instantly.
          </p>
        </header>

        {/* IP Display */}
        <section className="mb-8">
          <IPDisplay />
        </section>

        {/* Geographic Details */}
        <section className="mb-8">
          <GeoDetails />
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <FAQ />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm mt-12" style={{ color: "var(--color-stone)" }}>
          <p>
            Source code on{" "}
            <a
              href="https://github.com/vuhung16au/find-my-ip"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-law-purple)" }}
              className="hover:underline"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
