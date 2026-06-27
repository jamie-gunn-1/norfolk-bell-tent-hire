const testimonials = [
  {
    name: "Sarah & James",
    text: "Absolutely magical experience from start to finish. The tent was stunning and every detail was perfect.",
    rating: 5,
    event: "Wedding in Norfolk",
  },
  {
    name: "Emma",
    text: "We hired a bell tent for my daughter’s birthday and it completely exceeded expectations. Highly recommend!",
    rating: 5,
    event: "Birthday Party",
  },
  {
    name: "Tom",
    text: "Great service, easy setup, and the tent looked incredible. Will definitely use again for future events.",
    rating: 5,
    event: "Festival Weekend",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>

        <p className="text-gray-600 mb-12">
          Real experiences from events across Norfolk & Suffolk
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 p-8 text-left shadow-sm hover:shadow-md transition"
            >
              <Stars count={t.rating} />

              <p className="mt-4 text-gray-700 italic">
                “{t.text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.event}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}