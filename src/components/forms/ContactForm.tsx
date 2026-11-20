"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, TextAreaField } from "@/components/ui/Field";

type Status =
  | { type: "idle" }
  | { type: "pending" }
  | { type: "success"; reference: string; mode: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus({ type: "pending" });
    setErrors({});

    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setStatus({
          type: "error",
          message: data.message ?? "Unable to submit enquiry.",
        });
        return;
      }

      setStatus({
        type: "success",
        reference: data.reference,
        mode: data.mode,
      });
      formElement.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field id="name" name="name" label="Name" required autoComplete="name" error={errors.name} />
      <Field
        id="email"
        name="email"
        type="email"
        label="Work email"
        required
        autoComplete="email"
        error={errors.email}
      />
      <Field
        id="organisation"
        name="organisation"
        label="Organisation"
        autoComplete="organization"
        error={errors.organisation}
      />
      <div className="space-y-1.5">
        <label htmlFor="category" className="block text-sm font-semibold">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="min-h-11 w-full rounded-sm border border-border bg-white px-3"
          defaultValue="project-discussion"
        >
          <option value="general">General enquiry</option>
          <option value="project-discussion">Project discussion</option>
          <option value="partnership">Partnership</option>
          <option value="careers">Careers</option>
          <option value="other">Other</option>
        </select>
      </div>
      <Field id="subject" name="subject" label="Subject" required error={errors.subject} />
      <TextAreaField
        id="message"
        name="message"
        label="Message"
        required
        error={errors.message}
      />
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="text-sm text-steel">
        By submitting, you agree that Drais Energy may process this information to respond
        to your enquiry. See our{" "}
        <a href="/privacy" className="font-semibold underline-offset-4 hover:underline">
          privacy notice
        </a>
        .
      </p>
      <Button type="submit" disabled={status.type === "pending"}>
        {status.type === "pending" ? "Sending…" : "Send message"}
      </Button>
      <div aria-live="polite" className="min-h-6 text-sm">
        {status.type === "success" ? (
          <p className="font-medium text-charcoal">
            Enquiry accepted{status.mode === "mock" ? " (local mock mode)" : ""}. Reference:{" "}
            {status.reference}
          </p>
        ) : null}
        {status.type === "error" ? (
          <p className="font-medium text-brand" role="alert">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
