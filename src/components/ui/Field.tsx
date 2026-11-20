import type { ComponentProps, ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children?: ReactNode;
} & ComponentProps<"input">;

export function Field({
  id,
  label,
  hint,
  error,
  children,
  className = "",
  ...inputProps
}: Props) {
  const describedBy = [
    hint ? `${id}-hint` : null,
    error ? `${id}-error` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label}
      </label>
      {children ?? (
        <input
          id={id}
          className={[
            "min-h-11 w-full rounded-[6px] border border-border bg-white px-3 text-base text-charcoal",
            error ? "border-brand" : "",
            className,
          ].join(" ")}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy || undefined}
          {...inputProps}
        />
      )}
      {hint ? (
        <p id={`${id}-hint`} className="text-xs text-steel">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-sm font-medium text-brand" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  hint,
  error,
  className = "",
  ...props
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
} & ComponentProps<"textarea">) {
  const describedBy = [
    hint ? `${id}-hint` : null,
    error ? `${id}-error` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label}
      </label>
      <textarea
        id={id}
        className={[
          "min-h-32 w-full rounded-[6px] border border-border bg-white px-3 py-2.5 text-base text-charcoal",
          error ? "border-brand" : "",
          className,
        ].join(" ")}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy || undefined}
        {...props}
      />
      {hint ? (
        <p id={`${id}-hint`} className="text-xs text-steel">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-sm font-medium text-brand" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
