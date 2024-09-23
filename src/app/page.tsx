"use client";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}
