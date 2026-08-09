import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const base = host ? new URL(`${protocol}://${host}`) : undefined;
  const socialImage = base ? new URL("/og.png", base).toString() : undefined;

  const title = "PocketGPT | Structure–function conditioned molecular generation";
  const description = "PocketGPT combines protein pocket context and medicinal-chemistry objectives for controllable molecular generation and prospective PARP1 inhibitor discovery.";

  return {
    title,
    description,
    metadataBase: base,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title,
      description,
      type: "website",
      images: socialImage ? [{ url: socialImage, width: 1728, height: 910, alt: "PocketGPT project preview" }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImage ? [socialImage] : undefined,
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
