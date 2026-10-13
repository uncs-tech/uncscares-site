/* WHY: Direct Stripe Payment Links with ?amount= pre-fill the donation
   amount on Stripe's hosted page — no server-side Checkout Session needed.
   The base URL is a Stripe Payment Link created in the dashboard. */
const STRIPE_PAYMENT_LINK =
  "https://donate.stripe.com/5kQ5kDgKW6Yu2Ua8jBaEE01";

/* ---------- Bicycle Drive tiers ---------- */
/* WHY: Brett Rose specified impact-tier pricing for the Holiday Bicycle Drive.
   Largest first so the anchor effect nudges higher donations.
   amount is in dollars (display), cents is for the Stripe ?amount= param. */
const bicyclePresets: {
  amount: number;
  cents: number;
  tier: string;
  label: string;
}[] = [
  { amount: 125, cents: 12500, tier: "FRIEND", label: "One brand-new bicycle + helmet for a child" },
  { amount: 250, cents: 25000, tier: "SUPPORTER", label: "Two bicycles + helmets for children in need" },
  { amount: 500, cents: 50000, tier: "CHAMPION", label: "Four bicycles delivered directly to children in need" },
  { amount: 1000, cents: 100000, tier: "ADVOCATE", label: "Eight bicycles — delivered with smiles" },
  { amount: 1250, cents: 125000, tier: "DRIVE PARTNER", label: "Ten bicycles + helmets, personally delivered by our team" },
  { amount: 5000, cents: 500000, tier: "LEAD SPONSOR", label: "Sponsor an entire drive for children, one unforgettable holiday morning" },
];

export default function DonatePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-teal-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Make a Donation
          </h1>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl">
            Every dollar goes directly to supporting families in our community.
            Choose an amount below or enter your own.
          </p>
        </div>
      </section>

      <section className="bg-warm-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
            {/* Drive label */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-1">
                Holiday Bicycle Drive
              </p>
              <p className="text-sm text-gray-500">
                Select a giving tier to go directly to our secure donation page.
              </p>
            </div>

            {/* Tier buttons — each links directly to Stripe with pre-filled amount */}
            <div className="flex flex-col gap-3 mb-6">
              {bicyclePresets.map((tier) => (
                <a
                  key={tier.amount}
                  href={`${STRIPE_PAYMENT_LINK}?amount=${tier.cents}`}
                  className="py-4 px-5 rounded-lg transition-colors border-2 text-left bg-white text-teal-700 border-teal-200 hover:border-teal-400 hover:bg-teal-50 block"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-lg">
                      ${tier.amount.toLocaleString()}
                    </span>
                    <span className="text-xs font-semibold tracking-wide uppercase text-gold-500">
                      {tier.tier}
                    </span>
                  </div>
                  <p className="text-sm mt-1 text-gray-500">{tier.label}</p>
                </a>
              ))}
            </div>

            {/* Submit your own amount — base URL, no ?amount= */}
            <a
              href={STRIPE_PAYMENT_LINK}
              className="block w-full py-4 bg-gold-500 text-white text-lg font-bold rounded-lg hover:bg-gold-400 transition-colors text-center"
            >
              Submit Your Own Amount
            </a>

            <p className="mt-4 text-center text-xs text-gray-400">
              UNCS Cares Foundation is a 501(c)(3) nonprofit. EIN #84-4044721.
              Your donation is tax-deductible. Processed securely by Stripe.
            </p>
          </div>

          {/* Trust signals */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              {
                title: "Secure",
                text: "Payments processed securely through Stripe",
              },
              {
                title: "Tax-Deductible",
                text: "Receive a receipt for your tax records",
              },
              {
                title: "Direct Impact",
                text: "100% goes to community programs",
              },
            ].map((item) => (
              <div key={item.title} className="p-4">
                <p className="text-sm font-semibold text-teal-900">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
