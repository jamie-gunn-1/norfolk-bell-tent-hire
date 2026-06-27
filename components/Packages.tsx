const packages = [
  {
    title: "Classic Bell Tent",
    price: "From £250",
    description: "Perfect for garden parties, birthdays and small gatherings.",
    features: ["Sleeps 2–4", "Mattresses included", "Fairy lights"],
  },
  {
    title: "Luxury Wedding Package",
    price: "From £650",
    description: "Our premium setup for weddings and special events.",
    features: ["Sleeps up to 6 per tent", "Boho décor", "Full setup & takedown"],
  },
  {
    title: "Festival Package",
    price: "From £180",
    description: "Simple, stylish camping for festivals and weekend events.",
    features: ["Lightweight setup", "Comfort bedding", "Easy add-ons"],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          Bell Tent Packages
        </h2>

        <p className="text-gray-600 mb-12">
          Flexible options for every type of event across Norfolk & Suffolk
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-left hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {pkg.title}
              </h3>

              <p className="text-forest font-semibold mb-2">
                {pkg.price}
              </p>

              <p className="text-gray-600 mb-4">
                {pkg.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-700">
                {pkg.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <button className="mt-6 btn-primary w-full">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}