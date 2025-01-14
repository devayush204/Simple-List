import "@/styles/app.sass";
import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "SimpleList",
    description: "📝 A sleek and intuitive tool to organize tasks, set priorities, and boost productivity effortlessly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={rubik.className}>{children}</body>
        </html>
    );
}

export async function generateViewport(): Promise<Viewport> {
    const userAgent = headers().get("user-agent");
    const isiPhone = /iphone/i.test(userAgent ?? "");
    return isiPhone
        ? {
              width: "device-width",
              initialScale: 1,
              maximumScale: 1, // disables auto-zoom on ios safari
          }
        : {};
}
