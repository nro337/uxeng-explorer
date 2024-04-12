import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { NavigationMenuDemo } from "@/components/Navbar";
import AuthButton from "@/components/AuthButton";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "UX & Engineering Rankings",
  description: "Find your dream UI/UX and Engineering program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full h-16 px-4 bg-gradient-to-br from-slate-500 via-cyan-700 to-blue-950 flex flex-row justify-between items-center rounded-b-lg sticky top-0 z-50">
            <NavigationMenuDemo />
            <AuthButton />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
