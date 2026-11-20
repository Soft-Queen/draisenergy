import Link from "next/link";
import { CardBody, CardShell } from "@/components/ui/Card";
import { getWhatsAppHref } from "@/lib/whatsapp";

type Props = {
  pathname?: string;
};

export function WhatsAppContactCard({ pathname = "/contact" }: Props) {
  const href = getWhatsAppHref(pathname);

  if (!href) {
    return null;
  }

  return (
    <CardShell>
      <CardBody>
      <h2 className="display text-xl">WhatsApp</h2>
      <p className="mt-2 text-sm text-steel">
        For a quick message, reach us on WhatsApp. Formal quotations should still
        use the request-a-quote form.
      </p>
      <p className="mt-4">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#075E54] px-4 text-sm font-semibold text-white underline-offset-4 hover:bg-[#064e46]"
        >
          Open WhatsApp chat
        </Link>
      </p>
      </CardBody>
    </CardShell>
  );
}