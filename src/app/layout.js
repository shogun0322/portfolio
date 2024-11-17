import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";

import theme from "@/app/theme";
import Header from "@/components/header";

import "./globals.css";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Panuwat Suwanritdej",
  description: "Portfolio Panuwat.suw",
};
export default function RootLayout({ children }) {
  // const pathname = usePathname();

  // useEffect(() => {
  // if (pathname) {
  trackPageView("resume view");
  // }
  // }, [pathname]);

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
