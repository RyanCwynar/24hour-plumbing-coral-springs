import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "24 Hour Plumbing | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for 24 Hour Plumbing in Coral Springs, FL. This is a demo site created by Ryan Cwynar to showcase modern web design.",
  authors: [{ name: "Ryan Cwynar", url: "https://ryancwynar.com" }],
  creator: "Ryan Cwynar",
  publisher: "Byldr",
  robots: "noindex, nofollow",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%230ea5e9' width='100' height='100' rx='15'/><text x='50' y='70' text-anchor='middle' font-size='55' fill='white' font-family='system-ui'>24</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "24 Hour Plumbing | Free Mockup",
    description: "A free website redesign mockup created by Ryan Cwynar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
