import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UpdateBanner from "@/components/UpdateBanner";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "NewTunes – Your Spotify Stats",
  description:
    "Discover your top tracks, artists, and recent listens with NewTunes. Connect with Spotify to see how your music speaks.",
};

// Roboto for body
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

// Manrope for display
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${manrope.variable}`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <UpdateBanner />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
