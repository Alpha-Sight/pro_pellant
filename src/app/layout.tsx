"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import {AbstraxionProvider} from "@burnt-labs/abstraxion";

import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

const inter = Inter({ subsets: ['latin'] })


const treasuryConfig = {
    // treasury: "xion1q8sx9l4a522ys83az63wjdn06amyzzmaszkt47zeyfrj7hddlmcs474gfe",
    treasury: "xion1huyn33tux926r8rfk2yjczqnlzpmp36tv2qy9ahh2c4384q842tspj6xrs",
    rpcUrl: "https://rpc.xion-testnet-2.burnt.com/",
    restUrl: "https://api.xion-testnet-2.burnt.com/"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AbstraxionProvider config={treasuryConfig}>
                    {children}
                </AbstraxionProvider>
            </body>
        </html>
    )
}

