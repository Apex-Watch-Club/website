"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Roboto_Slab, Readex_Pro } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const readexPro = Readex_Pro({ weight: "200", subsets: ["latin"] });

const FEATURED_WATCHES = [
  {
    name: "5167R_001",
    company: "Patek Philippe",
    path: "/watch1.png",
  },
  {
    name: "336933wio",
    company: "Rolex",
    path: "/watch2.png",
  },
  {
    name: "5905R_001",
    company: "Patek Philippe",
    path: "/watch3.png",
  },
];

const KEY_BENEFITS = [
  {
    name: "INNOVATION",
    path: "/innovation.svg",
    description:
      "We’re not just a club; we’re a movement. By integrating NFT’s and cryptocurrency into the luxury watch market, we’re pioneering a new era of ownership and trading.",
  },
  {
    name: "EXCLUSIVITY",
    path: "/exclusivity.svg",
    description:
      "With limited memberships available, the demand for our club’s benefits and privileges ensures a high value for our NFTs and a dedicated, passionate community.",
  },
  {
    name: "SECURITY",
    path: "/security.svg",
    description:
      "Our state-of-the-art vaulting system guarantees the safety of physical assets, while the blockchain ensures the authenticity and provenance of every watch-NFT.",
  },
  {
    name: "GROWTH POTENTIAL",
    path: "/growth.svg",
    description:
      "The luxury watch market has consistently shown resilience and appreciation over time. By introducing a novel approach to buying, selling, and travelling, we’re poised to capture a significant share of this lucrative market.",
  },
];

const SOCIALS = [
  {
    name: "Twitter",
    url: "/",
    path: "/twitter.svg",
  },
  {
    name: "Instagram",
    url: "/",
    path: "/instagram.svg",
  },
  {
    name: "Facebook",
    url: "/",
    path: "/facebook.svg",
  },
  {
    name: "Telegram",
    url: "/",
    path: "/telegram.svg",
  },
];

export default function Home() {
  return (
    <main className="w-screen bg-black">
      {/* SECTION: HEADER */}
      <section className="w-full bg-gradient-to-right from-dark-gold to-light-gold">
        <div className="w-full items-center flex justify-center flex-col absolute">
          <nav className="w-full px-8 py-24 items-center justify-center flex flex-col">
            <img
              className="w-full max-w-[139px] h-auto"
              src="/logo.png"
              alt="Apex Watch Club Logo"
            />
          </nav>
          <h1 className="text-4xl text-center max-w-[600px] mb-8 text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
            THE FUTURE OF LUXURY WATCH OWNERSHIP AND TRADING
          </h1>
          <button
            className={`bg-gradient-to-r text-black from-dark-gold to-light-gold px-16 py-4 rounded-sm ${robotoSlab.className}`}
          >
            MINT COMING SOON
          </button>
        </div>

        <img
          className="w-full h-auto"
          src="/hero_desktop.jpg"
          alt="Hero Watch"
        />
      </section>

      {/*SECTION: LUXURY BLACK*/}
      <section className="flex flex-col items-center bg-luxury-black px-4 py-32 border-dark-gold border-y-2">
        <h1 className="text-4xl text-center max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
          APEX WATCH CLUB IS A GROUNDBREAKING VENTURE
        </h1>
        <img className="my-8" src="/line.svg" alt="Line Graphic" />
        <p className={`max-w-[600px] text-center ${readexPro.className}`}>
          that fuses the timeless allure of luxury watch collecting with the
          innovative world of NFTs and cryptocurrency
        </p>
      </section>

      {/*SECTION: OFFERING*/}
      <section className="flex flex-col items-center px-4 py-16 border-dark-gold border-b-2">
        <h1 className="text-4xl text-center max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
          OUR CLUB OFFERS AN EXCLUSIVE MEMBERSHIP
        </h1>
        <p className={`max-w-[600px] text-center mb-16 ${readexPro.className}`}>
          accessible only through our uniquely minted NFTs, which serves as a
          passport to a realm of unparalleled benefits and privileges in the
          world of horology.
        </p>

        <div className="w-full flex items-center max-w-[800px] justify-between">
          <img src="/vip.png" alt="VIP Pass" />
          <img src="/regular.png" alt="Regular Pass" />
        </div>
      </section>

      {/*SECTION: GIVEAWAY*/}
      <section className="m-16">
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-between items-center max-w-[900px]">
            <aside className="max-w-[400px]">
              <h1 className="text-[24px] max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
                MONTHLY GIVEAWAYS
              </h1>
              <img className="mt-2 mb-8" src="/line2.png" alt="Line Graphic" />

              <p className={`text-[14px] ${readexPro.className}`}>
                Every month, members stand a chance to win iconic timepieces
                from revered brands such as Rolex, Audemars Piguet, Patek
                Philippe, and more. These aren’t just watches; they are
                legacies, stories, and art pieces that appreciate over time.
              </p>
            </aside>

            <img src="/image_1.png" alt="Watch Giveaway" />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full flex justify-between items-center max-w-[900px]">
            <img src="/image_2.png" alt="Watch Giveaway" />

            <aside className="max-w-[400px]">
              <h1 className="text-[24px] max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
                EXCLUSIVE PURCHASE OPPORTUNITIES
              </h1>
              <img className="mt-2 mb-8" src="/line2.png" alt="Line Graphic" />

              <p className={`text-[14px] ${readexPro.className}`}>
                Members have the privilege to purchase watches at prices that
                are unheard of in the traditional market. Whether you’re looking
                to expand your personal collection or capitalize on the
                opportunity to sell to other enthusiasts, the potential for
                profit and pleasure is immense.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/*SECTION: CATCHY LINE*/}
      <section className="bg-rolex bg-center h-[600px]">
        <div className="bg-dim border-dark-gold border-y-2 h-full flex items-center justify-center bg-center">
          <h1 className="text-4xl text-center max-w-[600px] mb-8 text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
            ANOTHER CATCHY LINE
          </h1>
        </div>
      </section>

      {/*SECTION: PERKS*/}
      <section className="m-16">
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-between items-center max-w-[900px]">
            <aside className="max-w-[400px]">
              <h1 className="text-[24px] max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
                NFT VAULTING
              </h1>
              <img className="mt-2 mb-8" src="/line2.png" alt="Line Graphic" />

              <p className={`text-[14px] ${readexPro.className}`}>
                In a world’s first, members can securely vault their physical
                watches with us and receive an NFT representation of their
                prized possession. This NFT can be traded, sold, or showcased in
                the digital realm. When the time comes, the NFT can traded,
                sold, reclaim the physical watch. This revolutionary approach
                ensures liquidity, security, and flexibility for every watch
                owner.
              </p>
            </aside>

            <img src="/image_3.png" alt="Watch Giveaway" />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full flex justify-between items-center max-w-[900px]">
            <img src="/image_4.png" alt="Watch Giveaway" />

            <aside className="max-w-[400px]">
              <h1 className="text-[24px] max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
                PRIVATE DISCORD ACCESS
              </h1>
              <img className="mt-2 mb-8" src="/line2.png" alt="Line Graphic" />

              <p className={`text-[14px] ${readexPro.className}`}>
                Members gain exclusive entry to a private Discord community, a
                hub for networking with other watch aficionados. This platform
                will host watch experts, influencers, and enthusiasts, offering
                a unique opportunity for knowledge exchange, collaboration, and
                networking.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/*SECTION: WATCH SHOWCASE*/}
      <section className="flex flex-col items-center m-16">
        <h2 className={readexPro.className}>FEATURED PRODUCTS</h2>
        <h1 className="text-4xl text-center max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
          WATCH SHOWCASE
        </h1>
        <img className="my-8" src="/line.svg" alt="Line Graphic" />
        <div className="grid grid-cols-3 gap-16">
          {FEATURED_WATCHES.map((e, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center py-6 px-12 text-center border-gold border-2 rounded-xl bg-dim-gold"
            >
              <img src={e.path} alt={e.name} />
              <h1 className="text-[24px] max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
                {e.name}
              </h1>
              <p>{e.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/*SECTION: BENEFITS

      <section className="flex flex-col items-center m-16">
        <h2 className={readexPro.className}>KEY BENEFITS</h2>
        <h1 className="text-4xl text-center max-w-[600px] text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
          BENEFIT HEADER
        </h1>
        <img className="my-8" src="/line.svg" alt="Line Graphic" />
        <div></div>
      </section>
      */}

      {/*SECTION: CTA*/}
      <section className="bg-patek bg-center h-[600px]">
        <div className="bg-dim border-dark-gold border-y-2 h-full flex flex-col items-center justify-center bg-center">
          <h1 className="text-4xl text-center max-w-[600px] mb-8 text-transparent bg-gradient-to-r from-dark-gold to-light-gold bg-clip-text">
            THE FUTURE OF LUXURY WATCH OWNERSHIP AND TRADING
          </h1>
          <button
            className={`bg-gradient-to-r text-black from-dark-gold to-light-gold px-16 py-4 rounded-sm ${robotoSlab.className}`}
          >
            MINT COMING SOON
          </button>
        </div>
      </section>

      <footer className="flex flex-col items-center p-32">
        <img
          className="w-full max-w-[139px] h-auto"
          src="/logo.png"
          alt="Apex Watch Club Logo"
        />
        <div className="flex justify-center gap-6 my-16">
          {SOCIALS.map((e, idx) => (
            <a key={idx} href={e.url}>
              <img src={e.path} alt={e.name} />
            </a>
          ))}
        </div>
        <p className="text-xs text-gray">
          &copy; Apex Watch Club All Rights Reserved {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
