"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, TextAreaField } from "@/components/ui/Field";

type Status =
  | { type: "idle" }
  | { type: "pending" }
  | { type: "success"; reference: string; mode: string }
  | { type: "error"; message: string };

type Props = {
  defaults?: {
    industryOrService?: string;
    context?: string;
  };
};

export function RfqForm({ defaults }: Props) {
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
      const response = await fetch("/api/request-a-quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setStatus({
          type: "error",
          message: data.message ?? "Unable to submit quotation request.",
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
        required
        autoComplete="organization"
        error={errors.organisation}
      />
      <Field
        id="phone"
        name="phone"
        label="Phone"
        autoComplete="tel"
        error={errors.phone}
      />
      <Field
        id="industryOrService"
        name="industryOrService"
        label="Industry, service or product"
        required
        defaultValue={defaults?.industryOrService}
        error={errors.industryOrService}
      />
      <TextAreaField
        id="requirements"
        name="requirements"
        label="Requirements"
        required
        hint="Include technical context, standards or package details where useful."
        error={errors.requirements}
      />
      <Field
        id="location"
        name="location"
        label="Delivery / project location"
        error={errors.location}
      />
      <Field
        id="schedule"
        name="schedule"
        label="Desired schedule"
        error={errors.schedule}
      />
      <Field
        id="quantity"
        name="quantity"
        label="Quantity"
        error={errors.quantity}
      />
      <input type="hidden" name="context" value={defaults?.context ?? ""} />
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="text-sm text-steel">
        By submitting, you agree that Drais Energy may process this information to prepare a
        quotation response. See our{" "}
        <a href="/privacy" className="font-semibold underline-offset-4 hover:underline">
          privacy notice
        </a>
        .
      </p>
      <Button type="submit" disabled={status.type === "pending"}>
        {status.type === "pending" ? "Sending…" : "Submit quotation request"}
      </Button>
      <div aria-live="polite" className="min-h-6 text-sm">
        {status.type === "success" ? (
          <p className="font-medium text-charcoal">
            Quotation request accepted
            {status.mode === "mock" ? " (local mock mode)" : ""}. Reference: {status.reference}
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
