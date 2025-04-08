import { Inter } from "next/font/google";
import Nav from '@/app/components/nav';
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: './manifest.json',
  title: "Create Next App",
  description: "Generated by create next app",
  // icons: {
  //   icon: '/favicon.ico',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
