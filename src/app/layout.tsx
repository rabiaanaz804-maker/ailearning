import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Learning Roadmap Generator",
  description:
    "Generate personalized AI learning roadmaps for your career goals.",
  keywords: ["AI", "Learning Roadmap", "Next.js", "Career Paths"],
  openGraph: {
    title: "AI Learning Roadmap Generator",
    description:
      "Create personalized learning plans for any technology or career.",
    url: "https://yourdomain.com",
    siteName: "AI Roadmap",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}