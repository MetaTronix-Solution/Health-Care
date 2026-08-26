import type { Metadata } from "next";
import { ShieldCheck, ShieldPlus } from "lucide-react";
import { SignInForm } from "@/src/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Administrator Sign In",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(46,91,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(46,91,255,0.25), transparent 40%), linear-gradient(180deg, #0a192f 0%, #0a192f 100%)",
          }}
        />
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />

        <div className="relative z-10 px-10 pt-10">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
              <ShieldPlus aria-hidden className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold text-white">
              Himanshi-biomedical
            </span>
          </div>
        </div>

        <div className="relative z-10 px-10 pb-10">
          <h2 className="text-4xl font-semibold leading-tight text-white">
            Clinical precision.
            <br />
            Absolute structural integrity.
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/70">
            High density, command and control interface for comprehensive
            healthcare administration and clinical data management.
          </p>
          <div className="mt-10 flex items-center justify-between text-xs text-white/50">
            <span>
              © {new Date().getFullYear()} Himanshi biomedical Solutions.
            </span>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-white/80">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white/80">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
              <ShieldPlus aria-hidden className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold text-primary">
              Himanshi-biomedical
            </span>
          </div>

          <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
            Administrator Sign In
          </h1>
          <p className="mt-2 text-sm text-neutral-muted">
            Enter your credentials to access the administrative portal.
          </p>

          <div className="mt-8">
            <SignInForm />
          </div>

          <div className="hairline mt-8 flex items-center gap-2 pt-6 text-xs text-neutral-muted">
            <ShieldCheck aria-hidden className="h-4 w-4 shrink-0" />
            Authorized personnel only. Access is logged.
          </div>
        </div>
      </div>
    </div>
  );
}
