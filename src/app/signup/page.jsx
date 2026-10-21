"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import { useRouter, usePathname } from "next/navigation";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formRef = useRef(null);
  const redirectTimer = useRef(null);
  const pathname = usePathname();

  // Page jab bhi dobara dikhe (back button, Link, ya bfcache) to form reset karo
  useEffect(() => {
    const form = formRef.current;
    function resetForm() {
      setErrors({});
      setMessage("");
      setShowPassword(false);
      setShowConfirmPassword(false);
      setLoading(false);
      form?.reset(); // inputs uncontrolled hain, reset() chalega
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

  function handleChange(field) {
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;

    const newErrors = {};

    if (!name) {
      newErrors.name = "Full name is required.";
    }

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    setMessage("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        createdAt: new Date().toISOString(),
      });
      form.reset();
      setErrors({});
      setShowPassword(false);
      setShowConfirmPassword(false);
      setMessage("Account created successfully!");

      redirectTimer.current = setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors({
          email: "This email is already registered.",
        });
      } else if (error.code === "auth/invalid-email") {
        setErrors({
          email: "Please enter a valid email address.",
        });
      } else if (error.code === "auth/weak-password") {
        setErrors({
          password: "Please choose a stronger password.",
        });
      } else {
        setMessage("Something went wrong. Please try again.");
        console.error("Signup error:", error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f5f0] p-3 sm:p-5 lg:p-7">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-360 overflow-hidden rounded-2xl bg-white shadow-xl sm:min-h-[calc(100vh-40px)] lg:min-h-[calc(100vh-56px)] lg:grid-cols-2">

        {/* Fashion Image */}
        <section
          className="relative flex min-h-70 flex-col justify-between bg-cover bg-center p-7 sm:p-10 lg:min-h-0 lg:p-12"
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
              A world of your own
            </p>

            <h1 className="mb-5 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              Find your
              <br />
              own elegance.
            </h1>

            <p className="max-w-sm text-sm leading-7 text-white/80 sm:text-base">
              Create your account and discover timeless styles,
              thoughtful details, and pieces that feel like you.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ead4bd]" />
              <span className="text-xs tracking-[0.2em] text-white/80">
                YOUR STYLE JOURNEY
              </span>
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">

            <div className="mb-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9a765b]">
                JOIN VELOURA
              </p>

              <h2 className="text-4xl font-medium tracking-tight text-[#30251f] sm:text-5xl">
                Create account
              </h2>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                A few details to get your style journey started.
              </p>
            </div>

            <form
              ref={formRef}
              className="space-y-4"
              noValidate
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#3e332c]"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  onChange={() => handleChange("name")}
                  className="h-12 w-full rounded-lg border border-[#e7e0d8] bg-[#fdfcfb] px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#9a765b] focus:ring-2 focus:ring-[#9a765b]/10"
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
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
                  onChange={() => handleChange("email")}
                  className="h-12 w-full rounded-lg border border-[#e7e0d8] bg-[#fdfcfb] px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#9a765b] focus:ring-2 focus:ring-[#9a765b]/10"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#3e332c]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    onChange={() => handleChange("password")}
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

                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-[#3e332c]"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    onChange={() => handleChange("confirmPassword")}
                    className="h-12 w-full rounded-lg border border-[#e7e0d8] bg-[#fdfcfb] px-4 pr-12 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#9a765b] focus:ring-2 focus:ring-[#9a765b]/10"
                  />

                  <button
                    type="button"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute inset-y-0 right-3 flex items-center justify-center rounded p-2 text-stone-500 transition hover:text-[#382820]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} strokeWidth={1.7} />
                    ) : (
                      <Eye size={20} strokeWidth={1.7} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Success / General Message */}
              {message && (
                <p
                  role="status"
                  className={`text-center text-sm ${
                    message === "Account created successfully!"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              {/* Create Account Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#382820] text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#594133] focus:outline-none focus:ring-2 focus:ring-[#9a765b] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create account"}
                {!loading && <UserPlus size={19} strokeWidth={1.8} />}
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#eee8e2]" />
              <span className="text-xs text-stone-400">OR</span>
              <div className="h-px flex-1 bg-[#eee8e2]" />
            </div>

            <p className="text-center text-sm text-stone-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#8b6447] underline-offset-4 transition hover:text-[#382820] hover:underline"
              >
                Sign in
              </Link>
            </p>

            <p className="mt-6 text-center text-xs leading-6 text-stone-400">
              By creating an account, you agree to our{" "}
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