import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
});
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export const metadata: Metadata = {
  title: "PrintForge - 3D Printing Files",
  description: "Discover what's possible with 3D Printing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} ${montserratAlternates.variable} ${albertSans.className} antialiased`}
      >
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/" className="relative flex items-center">
              {/* Desktop Logo */}
              <img
                src="/printforge-logo.svg"
                alt="PrintForge Logo"
                className="hidden h-auto w-[200px] md:block"
              />
              {/* Mobile Logo */}
              <img
                src="/printforge-logo-icon.svg"
                alt="PrintForge Logo"
                className="block h-auto w-[40px] md:hidden"
              />
            </Link>
            <ul className="flex items-center gap-2.5">
              <li>
                <Link
                  href="/3d-models"
                  className="text-gray-700 transition hover:text-black"
                >
                  3D Models
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 transition hover:text-black"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
