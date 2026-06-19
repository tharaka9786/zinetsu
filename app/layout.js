import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata = {
  title: "Dhananjaya Prasad Photography",
  description: "Bringing stories to life through the lens. Experience moments frozen in time, blending modern aesthetics with profound emotion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome for Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollObserver />
      </body>
    </html>
  );
}
