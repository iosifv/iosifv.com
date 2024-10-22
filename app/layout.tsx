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
        // add the iosifv.com image here
        url: "https://iosifv.com/assets/images/logo/favicon-70x70.png",
        width: 70,
        height: 70,
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
    title: "Iosifv",
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
      </body>
    </html>
  );
}
