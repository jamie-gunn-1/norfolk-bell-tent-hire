export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get a Quote
          </h2>

          <p className="text-gray-600">
            Tell us about your event and we’ll get back to you with availability and pricing.
          </p>
        </div>

        {/* Form */}
        <form className="grid gap-6 bg-white p-10 rounded-2xl shadow-md">

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--forest)]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--forest)]"
            />

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Event Type (Wedding, Birthday, Festival...)"
              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--forest)]"
            />

            <input
              type="text"
              placeholder="Event Date"
              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--forest)]"
            />

          </div>

          <textarea
            placeholder="Tell us about your event..."
            rows={5}
            className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--forest)]"
          />

          <button
            type="submit"
            className="btn-primary w-full text-lg"
          >
            Send Enquiry
          </button>

          <p className="text-sm text-gray-500 text-center">
            We typically respond within 24 hours.
          </p>

        </form>

      </div>
    </section>
  );
}