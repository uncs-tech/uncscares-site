/* WHY: Direct Stripe Payment Link created via API — plink_1UTA63H08e8vOI0g417MWCKi.
   The ?amount= param pre-fills the donation amount in cents.
   submit_type=donate shows "Donate" on the Stripe page.
   metadata[fund]=deckthehalls tracks this campaign in our webhook/Supabase. */
const STRIPE_LINK = "https://donate.stripe.com/test_28EfZhdyK2Ie52i2ZhaEE00";

export default function DeckTheHallsPage() {
  const tiers = [
    { amount: 50, cents: 5000, name: "FRIEND", desc: "Ornaments & lights for a common area", icon: "🎄" },
    { amount: 150, cents: 15000, name: "SUPPORTER", desc: "Light-up pathway for a shelter entrance", icon: "✨" },
    { amount: 500, cents: 50000, name: "CHAMPION", desc: "Full tree with ornaments, garland & lights", icon: "🌿" },
    { amount: 2500, cents: 250000, name: "WONDERLAND SPONSOR", desc: "Transform an entire shelter top to bottom", icon: "❄️" },
  ];

  const acceptedItems = [
    "🎄 Trees", "🎁 Ornaments", "✨ Lights & Light Sets", "🌿 Garland & Wreaths",
    "❄️ Snowflake Decor", "🏠 Home Decor", "⭐ Tree Toppers", "🧦 Stockings",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-900/95 to-teal-700/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">
            UNCS Cares Foundation &bull; Holiday 2026
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Deck the{" "}
            <span className="text-gold-400">Shelters</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-teal-100 font-light italic">
            Transform Two Homeless Shelters into Winter Wonderlands
          </p>
          <p className="mt-2 text-sm text-teal-100/60 uppercase tracking-widest font-medium">
            Benefiting Broward Partnership for the Homeless
          </p>
          <p className="mt-8 text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            This holiday season, help us bring <strong className="text-white">warmth, wonder, and joy</strong> to
            families and individuals at two Broward Partnership shelters. We&apos;re raising{" "}
            <strong className="text-gold-400">$5,000 – $10,000</strong> to fill these spaces with
            glowing walkway paths, lush garland, towering Christmas trees, and
            shimmering snowflakes — creating a magical escape for those who need it most.
          </p>
        </div>
      </section>

      {/* Giving Tiers */}
      <section className="bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
              Choose Your Impact
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto text-lg">
              Every dollar goes directly to decorating the shelters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((tier) => (
              <a
                key={tier.cents}
                href={`${STRIPE_LINK}?amount=${tier.cents}`}
                className={`bg-white rounded-xl p-6 text-center border-2 transition-all block ${
                  tier.name === "WONDERLAND SPONSOR"
                    ? "border-gold-500 shadow-md hover:shadow-lg"
                    : "border-gray-100 hover:border-teal-400 hover:shadow-md"
                }`}
              >
                <span className="text-3xl block mb-2">{tier.icon}</span>
                <p className="text-3xl font-bold text-teal-700">
                  ${tier.amount.toLocaleString()}
                </p>
                <p className="text-xs font-bold tracking-widest uppercase text-gold-500 mt-1">
                  {tier.name}
                </p>
                <p className="text-sm text-gray-500 mt-2">{tier.desc}</p>
              </a>
            ))}
          </div>

          {/* Custom amount — base Stripe link, no preset amount */}
          <div className="mt-6 text-center">
            <a
              href={STRIPE_LINK}
              className="inline-flex items-center px-8 py-4 bg-gold-500 text-white text-lg font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg"
            >
              Donate Any Amount
            </a>
          </div>
        </div>
      </section>

      {/* Amazon Wish List */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-teal-900 mb-4">
                Shop Our Wish List
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Prefer to send supplies directly? Browse our Amazon Wish List
                and ship trees, lights, ornaments, and decorations straight to
                the shelters.
              </p>
              <a
                href="/wishlist"
                className="inline-flex items-center px-8 py-4 bg-teal-900 text-white text-lg font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-lg"
              >
                View Amazon Wish List →
              </a>
            </div>
            <div className="bg-teal-50 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-teal-700">2</p>
              <p className="mt-2 text-lg font-medium text-teal-900">
                Shelters to Transform
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Light-up walkways, Christmas trees, hanging garland,
                snowflakes, ornaments — everything needed to create
                a winter wonderland for families in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drop Off */}
      <section className="bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-900">
              Got Decor? <span className="text-gold-500">Drop It Off!</span>
            </h2>
            <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
              Donating gently used holiday items? Label them <strong>&ldquo;Deck the Shelters&rdquo;</strong> and
              bring them to either location.
            </p>
          </div>

          {/* Accepted items */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {acceptedItems.map((item) => (
              <span
                key={item}
                className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Locations */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
              <p className="font-bold text-teal-900 text-lg">UNCS</p>
              <p className="text-gray-600 mt-1">
                1471 NE 26th St, 2nd Floor<br />
                Fort Lauderdale, FL 33305
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
              <p className="font-bold text-teal-900 text-lg">BPHI</p>
              <p className="text-gray-600 mt-1">
                920 NW 7th Ave<br />
                Fort Lauderdale, FL 33311
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-lg font-bold">501(c)(3) Nonprofit</p>
              <p className="text-sm text-teal-200 mt-1">
                EIN #84-4044721. Your donation is tax-deductible.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold">100% Direct Impact</p>
              <p className="text-sm text-teal-200 mt-1">
                Every dollar funds shelter decorations. UNCS covers all overhead.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold">Employee-Driven</p>
              <p className="text-sm text-teal-200 mt-1">
                Organized and run by UNCS employees who volunteer their time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Make This Holiday Magical
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            Whether you give $50 or $2,500, donate supplies, or drop off decorations —
            you&apos;re bringing the holiday spirit to families who need it most.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={STRIPE_LINK}
              className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-white text-xl font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg"
            >
              Donate Now
            </a>
            <a
              href="/wishlist"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-900 text-xl font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-gray-200"
            >
              Shop Wish List
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
