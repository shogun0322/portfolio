import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";

import theme from "@/app/theme";
import Header from "@/components/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Panuwat Suwanritdej",
  description: "Portfolio Panuwat.suw",
};
export default function RootLayout({ children }) {
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
