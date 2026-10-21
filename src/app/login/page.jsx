"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const redirectTimer = useRef(null);
  const pathname = usePathname();

  // Page jab bhi dobara dikhe (back button, Link, ya bfcache) to form reset karo
  useEffect(() => {
    function resetForm() {
      setEmail("");
      setPassword("");
      setErrors({});
      setMessage("");
      setShowPassword(false);
      setLoading(false);
    }
    function handlePageShow(e) {
      if (e.persisted) resetForm();
    }

    resetForm(); // route active hone par
    window.addEventListener("pageshow", handlePageShow);
    return () => {
      resetForm(); // route hide/unmount hone par
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [pathname]);

  // Page chhodne par pending redirect timer cancel karo
  useEffect(() => {
    return () => {
      if (redirectTimer.current) clearTimeout(redirectTimer.current);
    };
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: "" }));
    setMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: "" }));
    setMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);

      setEmail("");
      setPassword("");
      setErrors({});
      setMessage("Login successful!");

      // Change "/" if you want to redirect to another page.
      redirectTimer.current = setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setErrors({ email: "Please enter a valid email address." });
      } else if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setMessage("Incorrect email or password.");
      } else if (error.code === "auth/too-many-requests") {
        setMessage("Too many attempts. Please try again later.");
      } else {
        setMessage("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setMessage("");

    if (!email.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: "Enter your email address to reset your password.",
      }));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());
      setMessage("If an account exists for this email, a password reset email has been sent. Please check your inbox.");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));
      } else if (error.code === "auth/too-many-requests") {
        setMessage("Too many requests. Please try again later.");
      } else {
        setMessage("Unable to send the reset email. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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

            <form className="space-y-5" onSubmit={handleLogin} noValidate>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#3e332c]">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`h-12 w-full rounded-lg border bg-[#fdfcfb] px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:ring-2 focus:ring-[#9a765b]/10 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#e7e0d8] focus:border-[#9a765b]"
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label htmlFor="password" className="text-sm font-medium text-[#3e332c]">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={loading}
                    className="text-xs font-medium text-[#947052] transition hover:text-[#5b4030] disabled:opacity-50"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    className={`h-12 w-full rounded-lg border bg-[#fdfcfb] px-4 pr-12 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:ring-2 focus:ring-[#9a765b]/10 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#e7e0d8] focus:border-[#9a765b]"
                    }`}
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
                {errors.password && (
                  <p id="password-error" className="mt-1.5 text-xs text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#382820] text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#594133] focus:outline-none focus:ring-2 focus:ring-[#9a765b] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Please wait..." : "Sign in"}
                {!loading && <LogIn size={19} strokeWidth={1.8} />}
              </button>

              {message && (
                <p
                  role="status"
                  className={`text-center text-sm ${
                    message.toLowerCase().includes("successful") ||
                    message.toLowerCase().includes("reset email")
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
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
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}