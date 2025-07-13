import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Mortgage",
  description: "Its like Tabby but for renting a home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
