import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load Geist font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Load Geist_Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load Poppins font
const poppins = Poppins({
  weight: ['400', '600', '700'], // Select weights you need
  variable: "--font-poppins", 
  subsets: ["latin"],
});

export const metadata = {
  title: "Smile House Dental Care",
  description: "Dental care services for your perfect smile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include any necessary meta tags */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-white text-gray-900`}>
        {/* Main content */}
        {children}

        {/* Example usage of the mono font in a code block */}
        <pre className={`${geistMono.variable} bg-gray-800 text-white p-4`}>
          {/* Your code block */}
        </pre>
      </body>
    </html>
  );
}
