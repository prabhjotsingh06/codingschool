import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/mainComponents/Navbar";


export const metadata: Metadata = {
  title: "Coding School",
  description: "At Our Coding School, we empower learners of all levels to master the skills needed to thrive in the tech-driven world. Our hands-on, industry-relevant courses are designed to teach everything from foundational programming languages to advanced technologies like machine learning, web development, and cybersecurity. Led by experienced instructors, our curriculum combines practical projects, real-world applications, and expert mentorship to help you build a strong portfolio and gain the confidence to excel in your career. Whether you’re a beginner exploring coding for the first time or a professional looking to upskill, we’re here to support your journey into the exciting world of tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"dark"}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}</body>
    </html>
  );
}
