"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  inquiryType: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  inquiryType: "",
  message: "",
};

const inquiryOptions = [
  "General Inquiry",
  "Product Demo Request",
  "Technical Support",
  "Service & Maintenance",
  "Partnership",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) {
    errors.email = "Corporate email is required.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.inquiryType)
    errors.inquiryType = "Select the nature of your inquiry.";
  if (!values.message.trim()) {
    errors.message = "Please provide details regarding your inquiry.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function updateField<K extends keyof FormValues>(
    field: K,
    value: FormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      // Simulated request. Replace with `await fetch("/api/contact", { ... })`
      // once a backend endpoint is available — the form state and UI below
      // do not need to change.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border border-neutral-line bg-neutral-bg p-8">
        <CheckCircle2 size={28} className="text-secondary" />
        <h2 className="text-xl font-medium tracking-tight text-primary">
          Inquiry received.
        </h2>
        <p className="text-[13px] leading-relaxed text-neutral-muted">
          A MedTech Pro specialist will follow up within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-secondary hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="eyebrow">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={(event) => updateField("firstName", event.target.value)}
          aria-invalid={Boolean(errors.firstName)}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
          placeholder="Enter first name"
          className="border-0 border-b border-neutral-line bg-transparent pb-3 text-[14px] text-primary placeholder:text-neutral-muted/70 focus-visible:outline-none focus-visible:border-secondary"
        />
        {errors.firstName && (
          <p id="firstName-error" className="text-[12px] text-red-600">
            {errors.firstName}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lastName" className="eyebrow">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={(event) => updateField("lastName", event.target.value)}
          aria-invalid={Boolean(errors.lastName)}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
          placeholder="Enter last name"
          className="border-0 border-b border-neutral-line bg-transparent pb-3 text-[14px] text-primary placeholder:text-neutral-muted/70 focus-visible:outline-none focus-visible:border-secondary"
        />
        {errors.lastName && (
          <p id="lastName-error" className="text-[12px] text-red-600">
            {errors.lastName}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="email" className="eyebrow">
          Corporate Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="email@organization.com"
          className="border-0 border-b border-neutral-line bg-transparent pb-3 text-[14px] text-primary placeholder:text-neutral-muted/70 focus-visible:outline-none focus-visible:border-secondary"
        />
        {errors.email && (
          <p id="email-error" className="text-[12px] text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="inquiryType" className="eyebrow">
          Nature of Inquiry
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={values.inquiryType}
          onChange={(event) => updateField("inquiryType", event.target.value)}
          aria-invalid={Boolean(errors.inquiryType)}
          aria-describedby={
            errors.inquiryType ? "inquiryType-error" : undefined
          }
          className="border-0 border-b border-neutral-line bg-transparent pb-3 text-[14px] text-primary focus-visible:outline-none focus-visible:border-secondary"
        >
          <option value="">Select an option...</option>
          {inquiryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <p id="inquiryType-error" className="text-[12px] text-red-600">
            {errors.inquiryType}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Provide details regarding your inquiry..."
          className="border-0 border-b border-neutral-line bg-transparent pb-3 text-[14px] text-primary placeholder:text-neutral-muted/70 focus-visible:outline-none focus-visible:border-secondary resize-none"
        />
        {errors.message && (
          <p id="message-error" className="text-[12px] text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        {status === "error" && (
          <p className="mb-4 text-[13px] text-red-600">
            Something went wrong submitting your inquiry. Please try again.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-tertiary transition-colors hover:bg-[#132540] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              Submitting
              <Loader2 size={15} className="animate-spin" />
            </>
          ) : (
            <>
              Submit Inquiry
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
