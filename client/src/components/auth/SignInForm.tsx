"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Input } from "@/src/components/ui/Input";
import { Button } from "@/src/components/ui/Button";

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Integration point: wire up to a real authentication provider.
    // This UI intentionally does not fake authentication or store credentials.
    console.info("Sign-in submitted", { email, rememberMe });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="email" className="eyebrow mb-2 block">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="admin@medtechpro.com"
          style={{ paddingLeft: "2.25rem" }}
          icon={<Mail aria-hidden className="h-4 w-4" />}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="eyebrow mb-2 block">
          Password
        </label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
            icon={<Lock aria-hidden className="h-4 w-4" />}
            value={password}
            style={{ paddingLeft: "2.25rem" }}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-muted hover:text-primary focus-visible:outline-2 focus-visible:outline-secondary"
          >
            {showPassword ? (
              <EyeOff aria-hidden className="h-4 w-4" />
            ) : (
              <Eye aria-hidden className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full">
        Sign In
      </Button>
    </form>
  );
}
