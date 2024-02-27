import type { Metadata } from "next";
import { Jost } from "next/font/google";

const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Winederland",
  description: "Uncork the Magic! A project for Event Planning class",
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
