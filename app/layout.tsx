import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { D } from "@upstash/redis/zmscore-Dc6Llqgr";

const description =
  "Balancing tech prowess with a love for motorcycle rides, boxing and vanlife adventures.";

export const metadata: Metadata = {
  title: {
    default: "iosifv.com",
    template: "%s | iosifv.com",
  },
  description: description,
  openGraph: {
    title: "iosifv.com",
    description: description,
    url: "https://iosifv.com",
    siteName: "iosifv.com",
    images: [
      {
        url: "../public/favicon.png",
        width: 157,
        height: 157,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "iosifv",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "241535b3ccab4b03b66d5edeff27c1c8"}'
        ></script>
      </body>
    </html>
  );
}
