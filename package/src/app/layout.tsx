import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV. Kurnia Jaya Teknik - Penyedia Peralatan Listrik di Jawa Timur",
  description: "CV. Kurnia Jaya Teknik - Penyedia peralatan listrik terpercaya di Jawa Timur dengan rating 5,01 ulasan Google. Melayani Mechanical, Electrical & Automation System.",
  icons: {
    icon: [
      { url: "/Kontent/LOGO 2.png", type: "image/png" },
    ],
    shortcut: "/Kontent/LOGO 2.png",
    apple: "/Kontent/LOGO 2.png",
  },
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmsans.className}`}>
        <AuthDialogProvider>
          <SessionProviderComp session={session}>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
