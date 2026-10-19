export default function ContactPage() {
  return (
    <main className="bg-[#faf8f5] text-neutral-900">
      {/* Hero */}
      <section className="px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
          We’re here for you
        </p>

        <h1 className="text-4xl font-light tracking-tight md:text-6xl">
          Let’s Talk <span className="italic">Style.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-600 md:text-base">
          Have a question about your order, our collections, or anything
          else? We would love to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 md:grid-cols-2 md:gap-20">
        {/* Contact Information */}
        <div className="py-4">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
            Get in touch
          </p>

          <h2 className="text-3xl font-light leading-snug md:text-4xl">
            We believe every great experience starts with a conversation.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
            Our team is happy to help you with product information,
            orders, sizing, and anything you need to make your Veloura
            experience special.
          </p>

          <div className="mt-10 space-y-7">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
                Email us
              </p>
              <a
                href="mailto:hello@veloura.com"
                className="text-base transition hover:text-neutral-500"
              >
                hello@veloura.com
              </a>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
                Customer support
              </p>
              <p className="text-sm text-neutral-700">
                Monday – Saturday
              </p>
              <p className="mt-1 text-sm text-neutral-700">
                10:00 AM – 6:00 PM
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
                Follow our journey
              </p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4 transition hover:text-neutral-500"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form UI */}
        <div className="border border-neutral-200 bg-white p-6 md:p-10">
          <h2 className="text-2xl font-light">Send us a message</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            Fill out the form below and we’ll get back to you.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                defaultValue=""
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none focus:border-neutral-900"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="order">Order inquiry</option>
                <option value="product">Product information</option>
                <option value="returns">Returns & exchanges</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full resize-none border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-900 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-neutral-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}