import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  icons: {
    icon: "/asset/logo.svg",
  },
  title: "Betterlife",
  description: "Betterlife",
  openGraph: {
    title: "Betterlife Adult Program",
    description:
      "Our mission is to support adults by providing high-quality care, meaningful opportunities for growth, and a compassionate community where every individual is valued.",
    url: "https://betterlifeorg.com",
    siteName: "Betterlife Adult Program",
    images: [
      {
        url: "/asset/betterlife-thumbnail.png", // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "Betterlife - Our mission is to support adults by providing high-quality care, meaningful opportunities for growth, and a compassionate community where every individual is valued.", // Optional alt text
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/asset/betterlife-thumbnail.png", // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "Betterlife- Betterlife Adult Program", // Optional alt text
      },
    ],
    creator: "@betterlife",
    site: "betterlifeorg.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <meta
          property="og:image"
          content="https://i.postimg.cc/8zYMNMgN/betterlife-thumbnail.pngg"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Betterlife- Our mission is to support adults by providing high-quality care, meaningful opportunities for growth, and a compassionate community where every individual is valued."
        />
        <meta
          property="og:image:url"
          content="https://i.postimg.cc/8zYMNMgN/betterlife-thumbnail.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://i.postimg.cc/8zYMNMgN/betterlife-thumbnail.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Betterlife- Our mission is to support adults by providing high-quality care, meaningful opportunities for growth, and a compassionate community where every individual is valued."
        />
        <meta
          property="og:image:url"
          content="https://i.postimg.cc/8zYMNMgN/betterlife-thumbnail.png"
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "td62vp1ovi");
  `}
      </Script>

      <Script id="gtm-loader" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5GBPTRPG');
  `}
</Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

<Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RC06JS7XMR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-5GBPTRPG');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GBPTRPG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
