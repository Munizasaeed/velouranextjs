
"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LogIn } from "lucide-react";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f5f0] p-3 sm:p-5 lg:p-7">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-360 overflow-hidden rounded-2xl bg-white shadow-xl sm:min-h-[calc(100vh-40px)] lg:min-h-[calc(100vh-56px)] lg:grid-cols-2">

        {/* Fashion Image */}
        <section
          className="relative flex min-h-75 flex-col justify-between bg-cover bg-center p-7 sm:p-10 lg:min-h-0 lg:p-12"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(35,25,20,0.85), rgba(35,25,20,0.05) 70%), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=85')",
          }}
        >
          <Link
            href="/"
            className="relative z-10 w-fit text-2xl font-semibold tracking-[0.2em] text-white"
          >
            VELOURA
          </Link>

          <div className="relative z-10 max-w-lg pb-2 text-white">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ead4bd]">
              Style that feels like you
            </p>
            <h1 className="mb-5 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              Your style.
              <br />
              Your story.
            </h1>
            <p className="max-w-sm text-sm leading-7 text-white/80 sm:text-base">
              Discover timeless pieces made to celebrate your individuality.
              Welcome back to a world of effortless elegance.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ead4bd]" />
              <span className="text-xs tracking-[0.2em] text-white/80">
                DRESS YOUR WAY
              </span>
            </div>
          </div>
        </section>

        {/* Login Form */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">

            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9a765b]">
                VELOURA ACCOUNT
              </p>
              <h2 className="text-4xl font-medium tracking-tight text-[#30251f] sm:text-5xl">
                Welcome back
              </h2>
              <p className="mt-4 text-sm leading-6 text-stone-500">
                Sign in to explore your style and discover something new.
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#3e332c]"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-lg border border-[#e7e0d8] bg-[#fdfcfb] px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#9a765b] focus:ring-2 focus:ring-[#9a765b]/10"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#3e332c]"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-[#947052] transition hover:text-[#5b4030]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="h-12 w-full rounded-lg border border-[#e7e0d8] bg-[#fdfcfb] px-4 pr-12 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#9a765b] focus:ring-2 focus:ring-[#9a765b]/10"
                  />
                  
<button
  type="button"
  aria-label={showPassword ? "Hide password" : "Show password"}
  onClick={() => setShowPassword(!showPassword)}
  className="absolute inset-y-0 right-3 flex items-center justify-center rounded p-2 text-stone-500 transition hover:text-[#382820]"
>
  {showPassword ? (
    <EyeOff size={20} strokeWidth={1.7} />
  ) : (
    <Eye size={20} strokeWidth={1.7} />
  )}
</button>

                </div>
              </div>

            
<button
  type="submit"
  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#382820] text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#594133] focus:outline-none focus:ring-2 focus:ring-[#9a765b] focus:ring-offset-2"
>
  Sign in
    <LogIn size={19} strokeWidth={1.8} />
</button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#eee8e2]" />
              <span className="text-xs text-stone-400">OR</span>
              <div className="h-px flex-1 bg-[#eee8e2]" />
            </div>

            <p className="text-center text-sm text-stone-500">
              Do not have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[#8b6447] underline-offset-4 transition hover:text-[#382820] hover:underline"
              >
                Create account
              </Link>
            </p>

            <p className="mt-10 text-center text-xs leading-6 text-stone-400">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-4">
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4"
              >
                Privacy Policy
              </Link>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
