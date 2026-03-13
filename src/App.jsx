import React, { useMemo, useState } from "react";

const artworks = [
  {
    id: 1,
    title: "Forest Witch",
    category: "Characters",
    year: "2026",
    description:
      "Character design focused on fantasy appeal and a strong silhouette for game readability.",
    tags: ["Fantasy", "RPG", "Sprite"],
    accent: "from-emerald-400 to-teal-600",
    symbol: "✦",
  },
  {
    id: 2,
    title: "Dungeon Entrance",
    category: "Environments",
    year: "2026",
    description:
      "Top-down environment with a limited palette and a moody adventure atmosphere.",
    tags: ["Top-down", "Dungeon", "Tileset"],
    accent: "from-slate-400 to-slate-700",
    symbol: "▦",
  },
  {
    id: 3,
    title: "Potion Shop UI",
    category: "UI",
    year: "2025",
    description:
      "Pixel art interface for a shop menu with clear iconography and strong hierarchy.",
    tags: ["UI", "Game UI", "Icons"],
    accent: "from-fuchsia-400 to-violet-700",
    symbol: "⌘",
  },
  {
    id: 4,
    title: "Cyber Brawler",
    category: "Characters",
    year: "2025",
    description: "Concept sprite with arcade energy and bold contrast.",
    tags: ["Arcade", "Action", "Character"],
    accent: "from-cyan-400 to-blue-700",
    symbol: "⚔",
  },
  {
    id: 5,
    title: "Moon Shrine",
    category: "Environments",
    year: "2025",
    description:
      "Atmospheric environment with a centered composition and fast visual readability.",
    tags: ["Shrine", "Adventure", "Scenery"],
    accent: "from-amber-300 to-orange-600",
    symbol: "◈",
  },
  {
    id: 6,
    title: "Monster Drops",
    category: "Items",
    year: "2024",
    description: "Item and loot set designed for clarity at small sizes.",
    tags: ["Items", "Icons", "Loot"],
    accent: "from-rose-400 to-red-700",
    symbol: "⬢",
  },
];

const categories = ["All", "Characters", "Environments", "UI", "Items"];

function PixelCard({ item, onClick }) {
  return (
    <button
      onClick={() => onClick(item)}
      className="group w-full text-left transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="h-full overflow-hidden rounded-3xl border-2 border-zinc-800 bg-zinc-900">
        <div className={`relative h-52 bg-gradient-to-br ${item.accent}`}>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              imageRendering: "pixelated",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-6xl text-white drop-shadow-lg">
            {item.symbol}
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-black/40 bg-black/35 px-3 py-2 backdrop-blur-sm">
            <p className="truncate text-sm font-black uppercase tracking-[0.2em] text-white">
              {item.title}
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-black uppercase tracking-[0.08em] text-white">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400">
                {item.category} • {item.year}
              </p>
            </div>
            <span className="text-zinc-500 transition group-hover:text-white">↗</span>
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

export default function PixelArtPortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredArtworks = useMemo(() => {
    return artworks.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const haystack = `${item.title} ${item.description} ${item.tags.join(" ")} ${item.category}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          imageRendering: "pixelated",
        }}
      />

      <header className="sticky top-0 z-30 border-b-4 border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Pixel Art Portfolio
            </p>
            <h1 className="text-xl font-black uppercase tracking-[0.2em] sm:text-2xl">
              Your Name / Studio
            </h1>
          </div>

          <nav className="hidden gap-6 md:flex">
            <a href="#work" className="text-sm text-zinc-300 hover:text-white">
              Gallery
            </a>
            <a href="#about" className="text-sm text-zinc-300 hover:text-white">
              About
            </a>
            <a href="#services" className="text-sm text-zinc-300 hover:text-white">
              Services
            </a>
            <a href="#contact" className="text-sm text-zinc-300 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pt-20">
          <div>
            <div className="mb-5 inline-block rounded-none border-2 border-emerald-400 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
              Available for commissions and indie projects
            </div>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-[0.08em] sm:text-6xl">
              Pixel art with personality, atmosphere, and cartridge-era soul.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              This is where your work lives: characters, environments,
              interfaces, and assets ready for games, covers, or any project
              that needs more charm and fewer boring visuals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="border-2 border-white bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-zinc-950 transition hover:bg-zinc-200"
              >
                View gallery
              </a>
              <a
                href="#contact"
                className="border-2 border-zinc-600 bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-900"
              >
                Request a commission
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-none border-2 border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Palettes
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Limited, cohesive, and intentional.
                </p>
              </div>
              <div className="rounded-none border-2 border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Game Ready
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Sprites, tilesets, UI, and props.
                </p>
              </div>
              <div className="rounded-none border-2 border-zinc-800 bg-zinc-900/70 p-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-300">
                  Style
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Retro, clean, and full of mood.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border-4 border-zinc-800 bg-zinc-900 p-5 shadow-2xl shadow-black/30">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="grid grid-cols-2 gap-4 rounded-2xl border-4 border-zinc-950 bg-zinc-950 p-4 sm:grid-cols-3">
                {artworks.slice(0, 6).map((art) => (
                  <div key={art.id} className="space-y-2">
                    <div
                      className={`aspect-square rounded-lg border-2 border-zinc-900 bg-gradient-to-br ${art.accent} p-2`}
                    >
                      <div className="flex h-full items-center justify-center border-2 border-black/50 text-3xl text-white">
                        {art.symbol}
                      </div>
                    </div>
                    <p className="truncate text-xs uppercase tracking-[0.18em] text-zinc-400">
                      {art.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 border-2 border-emerald-400 bg-zinc-950 px-4 py-2 text-xs uppercase tracking-[0.25em] text-emerald-300">
              Online portfolio
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Selected work
              </p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-[0.14em]">
                Gallery
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by project, style, or category"
                className="w-full border-2 border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 sm:w-80"
              />

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={
                      activeCategory === category
                        ? "border-2 border-white bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-950"
                        : "border-2 border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 hover:border-zinc-600"
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredArtworks.map((item) => (
              <PixelCard key={item.id} item={item} onClick={setSelected} />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              About me
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-[0.14em]">
              The artist behind the pixels
            </h2>
            <p className="mt-5 leading-7 text-zinc-300">
              Replace this text with your real bio: who you are, what kind of
              style you work with, what kinds of projects you enjoy, and why
              your work has that extra spark that makes someone say, “yep, I
              want to hire this person.”
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">
                Specialties
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
                <li>• Sprites and animation sheets</li>
                <li>• Tilesets and environments</li>
                <li>• Game UI</li>
                <li>• Props, items, and icons</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">
                Tools
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
                <li>• Aseprite</li>
                <li>• Photoshop / Procreate</li>
                <li>• Game-ready exports</li>
                <li>• Asset organization</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 p-6 sm:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">
                Great fit for
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Indie games, covers, key art, promotional material, visual
                novels, RPGs, platformers, and ambitious personal projects with
                brave dreams and emotionally questionable budgets.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-[0.14em]">
            What you can hire me for
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 p-6">
              <p className="text-lg font-black uppercase tracking-[0.1em]">
                Personal commissions
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Portraits, avatars, characters, or pixel illustrations for
                social media, streams, or personal projects.
              </p>
            </div>

            <div className="rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 p-6">
              <p className="text-lg font-black uppercase tracking-[0.1em]">
                Game assets
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Sprites, props, tilesets, effects, and UI designed to work
                inside real development pipelines.
              </p>
            </div>

            <div className="rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 p-6">
              <p className="text-lg font-black uppercase tracking-[0.1em]">
                Package-based work
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Complete sets for demos, pitch decks, vertical slices, or
                projects that are ready to look serious.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-16">
          <div className="grid gap-8 rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-[0.14em]">
                Let&apos;s talk about your project
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
                Replace these with your real links. Ideally, you&apos;ll want a
                visible email, Instagram, maybe Behance or ArtStation, and a
                WhatsApp button or contact form.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:youremail@example.com"
                  className="border-2 border-white bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-zinc-950 transition hover:bg-zinc-200"
                >
                  Send email
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-zinc-700 bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-800"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border-4 border-zinc-950 bg-zinc-950 p-5">
              <div className="grid gap-4 text-sm text-zinc-300">
                <div className="border-b border-zinc-800 pb-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Email
                  </p>
                  <p className="mt-1 font-medium text-white">
                    youremail@example.com
                  </p>
                </div>

                <div className="border-b border-zinc-800 pb-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Instagram
                  </p>
                  <p className="mt-1 font-medium text-white">@yourhandle</p>
                </div>

                <div className="border-b border-zinc-800 pb-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Response time
                  </p>
                  <p className="mt-1 font-medium text-white">24 to 72 hours</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Status
                  </p>
                  <p className="mt-1 inline-block border-2 border-emerald-400 px-2 py-1 font-bold uppercase tracking-[0.16em] text-emerald-300">
                    Commissions open
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Your Name. Made with lots of pixels and probably coffee.
      </footer>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-3xl rounded-[2rem] border-4 border-zinc-800 bg-zinc-900 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  {selected.category}
                </p>
                <h3 className="mt-1 text-2xl font-black uppercase tracking-[0.12em]">
                  {selected.title}
                </h3>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="rounded-full border border-zinc-700 px-3 py-2 text-zinc-400 hover:text-white"
              >
                X
              </button>
            </div>

            <div className={`relative h-72 rounded-2xl bg-gradient-to-br ${selected.accent}`}>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                  imageRendering: "pixelated",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-7xl text-white">
                {selected.symbol}
              </div>
            </div>

            <p className="mt-5 leading-7 text-zinc-300">{selected.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
