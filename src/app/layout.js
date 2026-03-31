
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageLoader from "./components/ImageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://littleberries.com"),
  title: "Little Berries Playschool | Joyful Early Learning in [Your City]",
  description: "Little Berries Playschool offers a nurturing, creative, and safe environment for children to learn, play, and grow. Discover our activities, achievements, and caring staff.",
  keywords: [
    "playschool",
    "preschool",
    "early childhood education",
    "kids activities",
    "child care",
    "learning",
    "Little Berries",
    "[Your City]"
  ],
  openGraph: {
    title: "Little Berries Playschool | Joyful Early Learning in [Your City]",
    description: "Little Berries Playschool offers a nurturing, creative, and safe environment for children to learn, play, and grow.",
    url: "https://littleberries.com",
    siteName: "Little Berries Playschool",
    images: [
      {
        url: "/logo.jpeg",
        width: 400,
        height: 400,
        alt: "Little Berries Playschool Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Berries Playschool | Joyful Early Learning in [Your City]",
    description: "Little Berries Playschool offers a nurturing, creative, and safe environment for children to learn, play, and grow.",
    images: ["/logo.jpeg"]
  }
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Little Berries Playschool" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Little Berries Playschool" />
        <meta property="og:image" content="/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.jpeg" />
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo.jpeg" type="image/jpeg" />
      </head>
      <body className="min-h-full flex flex-col">
        <ImageLoader>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ImageLoader>
      </body>
    </html>
  );
}
