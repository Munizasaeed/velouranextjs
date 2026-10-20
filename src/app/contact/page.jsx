
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  function handleFieldChange(field) {
    setErrors((prevErrors) => {
      if (!prevErrors[field]) return prevErrors;

      const updatedErrors = { ...prevErrors };
      delete updatedErrors[field];
      return updatedErrors;
    });

    if (status === "error" || status === "success") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || "").trim(),
    };

    const newErrors = {};

    // Name validation
    if (!data.name) {
      newErrors.name = "Please enter your name.";
    } else if (data.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (data.name.length > 100) {
      newErrors.name = "Name cannot exceed 100 characters.";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (data.email.length > 254) {
      newErrors.email = "Email address is too long.";
    }

    // Subject validation
    const validSubjects = ["order", "product", "returns", "other"];

    if (!validSubjects.includes(data.subject)) {
      newErrors.subject = "Please select a valid subject.";
    }

    // Message validation
    if (!data.message) {
      newErrors.message = "Please enter your message.";
    } else if (data.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (data.message.length > 2000) {
      newErrors.message = "Message cannot exceed 2000 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus("success");
      setErrors({});
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (field) =>
    `w-full border-b bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 ${
      errors[field] ? "border-red-500" : "border-neutral-300"
    }`;

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

        {/* Contact Form */}
        <div className="border border-neutral-200 bg-white p-6 md:p-10">
          <h2 className="text-2xl font-light">Send us a message</h2>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            Fill out the form below and we’ll get back to you.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 space-y-6"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                maxLength={100}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your name"
                onChange={() => handleFieldChange("name")}
                className={inputClass("name")}
              />

              {errors.name && (
                <p id="name-error" className="mt-2 text-xs text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                maxLength={254}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@example.com"
                onChange={() => handleFieldChange("email")}
                className={inputClass("email")}
              />

              {errors.email && (
                <p id="email-error" className="mt-2 text-xs text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm">
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                defaultValue=""
                required
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? "subject-error" : undefined
                }
                onChange={() => handleFieldChange("subject")}
                className={inputClass("subject")}
              >
                <option value="" disabled>
                  Select a subject
                </option>

                <option value="order">Order inquiry</option>
                <option value="product">Product information</option>
                <option value="returns">Returns & exchanges</option>
                <option value="other">Other</option>
              </select>

              {errors.subject && (
                <p id="subject-error" className="mt-2 text-xs text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Your message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                minLength={10}
                maxLength={2000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
                placeholder="How can we help you?"
                onChange={() => handleFieldChange("message")}
                className={`${inputClass("message")} resize-none`}
              />

              {errors.message && (
                <p id="message-error" className="mt-2 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-neutral-900 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {status === "success" && (
              <p role="status" className="text-sm text-green-700">
                Your message has been sent successfully.
              </p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                Unable to send your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
