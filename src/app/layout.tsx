import "./globals.css";
import { Inter } from "next/font/google";
import BaseLayout from "../components/BaseLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SK E-com",
  description: "Created for SK Innovate Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
