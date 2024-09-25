import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Arena Fácil",
  description: "A plataforma de gestão de alugueis de quadras esportivas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

