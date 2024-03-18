import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import StoreProvider from "@/provider/StoreProvider";
import RootDrawer from "@/components/drawer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: `${process.env.NEXT_PUBLIC_APP_NAME} by create next app`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StoreProvider>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <ThemeProvider theme={theme}>
              <>
                {children}
                <RootDrawer />
              </>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
