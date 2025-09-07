import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bobur Abdullayev Resume",
    description: "Made without love",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NavigationMenu className="bg-zinc-950 text-zinc-100 p-2 rounded-lg flex justify-between items-center">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/"
                                className="font-bold text-xl text-emerald-500 tracking-wide transition-colors"
                            >
                                Ferxes
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/docs">
                                Docs
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="https://www.linkedin.com/in/bobur-abdullayev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {children}
            </body>
        </html>
    );
}
